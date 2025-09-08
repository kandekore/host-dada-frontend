// server/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.set('trust proxy', true);            // you already have this


const allowedOrigins = [
  'http://localhost:3000', 
  'http://192.168.1.9:3000',
  'http://185.137.39.98:3000',
  'https://hostdada.dadadns.uk',
    'https://hostdada.co.uk',
  'https://www.hostdada.co.uk',
  'https://my.hostdada.co.uk'
  // Add your production domain here when you go live, e.g., 'https://www.your-site.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

// --- ValidateLogin Endpoint ---
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const validationParams = new URLSearchParams({
    action: 'ValidateLogin',
    email: email,
    password2: password,
    identifier: process.env.WHMCS_API_IDENTIFIER,
    secret: process.env.WHMCS_API_SECRET,
    responsetype: 'json',
  });

  try {
    const { data: validationData } = await axios.post(process.env.WHMCS_API_URL, validationParams);

    if (validationData.result === 'success') {
      const clientParams = new URLSearchParams({
        action: 'GetClientsDetails',
        email: email,
        identifier: process.env.WHMCS_API_IDENTIFIER,
        secret: process.env.WHMCS_API_SECRET,
        responsetype: 'json',
      });
      
      const { data: clientData } = await axios.post(process.env.WHMCS_API_URL, clientParams);

      if (clientData.result === 'success') {
        res.json({
          result: 'success',
          user: {
            id: clientData.client.userid,
            firstName: clientData.client.firstname,
            lastName: clientData.client.lastname,
            email: clientData.client.email,
          }
        });
      } else {
         throw new Error(clientData.message || 'Could not find a client account for this user.');
      }
    } else {
      res.status(401).json({ error: validationData.message || 'Invalid credentials.' });
    }
  } catch (error) {
    console.error('WHMCS API Error:', error.message);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

// --- CreateSsoToken Endpoint ---
app.post('/api/sso', async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required.' });
    }

    const params = new URLSearchParams({
        action: 'CreateSsoToken',
        client_id: userId,
        identifier: process.env.WHMCS_API_IDENTIFIER,
        secret: process.env.WHMCS_API_SECRET,
        responsetype: 'json',
    });

    try {
        const { data } = await axios.post(process.env.WHMCS_API_URL, params);
        if (data.result === 'success') {
            res.json({
                redirectTo: data.redirect_url
            });
        } else {
            res.status(500).json({ error: 'Failed to create SSO token.' });
        }
    } catch (error) {
        console.error('WHMCS SSO Error:', error.message);
        res.status(500).json({ error: 'An error occurred during SSO creation.' });
    }
});

// --- Single Domain Whois Endpoint ---
app.post('/api/domain-check', async (req, res) => {
  const { domain } = req.body;
  if (!domain) {
    return res.status(400).json({ error: 'Domain name is required.' });
  }

  const params = new URLSearchParams({
    action: 'DomainWhois',
    domain: domain,
    identifier: process.env.WHMCS_API_IDENTIFIER,
    secret: process.env.WHMCS_API_SECRET,
    responsetype: 'json',
  });

  try {
    const { data } = await axios.post(process.env.WHMCS_API_URL, params);
    if (data.result === 'success') {
      res.json(data);
    } else {
      res.status(400).json({ error: data.message || `Could not check status of ${domain}.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while checking the domain.' });
  }
});

// --- Homepage Domain Suggestions Endpoint ---
app.post('/api/domain-search', async (req, res) => {
  const { searchTerm } = req.body;
  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required.' });
  }

  const primaryTlds = ['.com', '.uk', '.co.uk', '.net', '.io'];
  const promises = [];

  primaryTlds.forEach(tld => {
    const domain = `${searchTerm}${tld}`;
    const params = new URLSearchParams({
      action: 'DomainWhois',
      domain: domain,
      identifier: process.env.WHMCS_API_IDENTIFIER,
      secret: process.env.WHMCS_API_SECRET,
      responsetype: 'json',
    });
    promises.push(axios.post(process.env.WHMCS_API_URL, params));
  });

  try {
    const results = await Promise.allSettled(promises);
    const statuses = results.map((result, index) => {
      const domain = `${searchTerm}${primaryTlds[index]}`;
      if (result.status === 'fulfilled' && result.value.data.result === 'success') {
        return { domain, status: result.value.data.status };
      }
      return { domain, status: 'error' };
    });
    res.json({ results: statuses });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during the domain search.' });
  }
});

// --- Get All TLDs Endpoint ---
app.get('/api/get-all-tlds', async (req, res) => {
  const params = new URLSearchParams({
    action: 'GetTLDPricing',
    identifier: process.env.WHMCS_API_IDENTIFIER,
    secret: process.env.WHMCS_API_SECRET,
    responsetype: 'json',
  });

  try {
    const { data } = await axios.post(process.env.WHMCS_API_URL, params);
    if (data.result === 'success') {
      const currency = data.currency;
      const tlds = Object.keys(data.pricing).map(tld => {
        const pricingInfo = data.pricing[tld];
        const registerPrice = pricingInfo && pricingInfo.register && pricingInfo.register['1'];
        
        return {
          tld: `.${tld}`,
          price: registerPrice ? `${currency.prefix}${registerPrice}` : 'N/A'
        };
      });
      res.json({ tlds });
    } else {
      res.status(500).json({ error: 'Failed to get TLD list.' });
    }
  } catch (error) {
    console.error('WHMCS API Error:', error.message);
    res.status(500).json({ error: 'An error occurred while getting the TLD list.' });
  }
});

// --- Full Domain Search Endpoint ---
app.post('/api/full-domain-search', async (req, res) => {
  const { searchTerm, tlds } = req.body;

  if (!searchTerm || !tlds || !Array.isArray(tlds)) {
    return res.status(400).json({ error: 'Search term and a list of TLDs are required.' });
  }

  const promises = tlds.map(tldInfo => {
    const domain = `${searchTerm}${tldInfo.tld}`;
    const params = new URLSearchParams({
      action: 'DomainWhois',
      domain: domain,
      identifier: process.env.WHMCS_API_IDENTIFIER,
      secret: process.env.WHMCS_API_SECRET,
      responsetype: 'json',
    });
    return axios.post(process.env.WHMCS_API_URL, params)
      .then(response => ({
        domain,
        status: response.data.status,
        price: tldInfo.price
      }))
      .catch(() => ({
        domain,
        status: 'error',
        price: tldInfo.price
      }));
  });

  try {
    const results = await Promise.all(promises);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during the full domain search.' });
  }
});
// --- Get Products Endpoint (New) ---
// --- Get Products Endpoint ---
// server/server.js

// --- Get Products Endpoint ---
// REFLACE the existing '/api/products' function with this one.
app.post('/api/products', async (req, res) => {
  const { gid } = req.body;
  if (!gid) {
    return res.status(400).json({ error: 'Product Group ID (gid) is required.' });
  }

  const params = new URLSearchParams({
    action: 'GetProducts',
    gid: String(gid),
    identifier: process.env.WHMCS_API_IDENTIFIER,
    secret: process.env.WHMCS_API_SECRET,
    responsetype: 'json',
  });

  try {
    const { data } = await axios.post(process.env.WHMCS_API_URL, params);

    if (data.result !== 'success') {
      // If WHMCS reports an error, pass it along.
      return res.status(500).json({ error: data.message || 'Could not fetch products.' });
    }

    // The WHMCS API can return a single product object or an array.
    // This simple logic ensures we always work with an array for consistency on the frontend.
    const products = Array.isArray(data.products?.product)
      ? data.products.product
      : (data.products?.product ? [data.products.product] : []);

    // Send the clean, unfiltered product array to the frontend.
    res.json({ products });
    
  } catch (error) {
    // Catch any network or other errors.
    console.error('WHMCS GetProducts Error:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});


// --- Add Product to Cart Endpoint (New) ---
app.post('/api/add-product-to-cart', async (req, res) => {
  const { userId, productId } = req.body;
  if (!productId) {
    return res.status(400).json({ error: 'Product ID is required.' });
  }

  const params = new URLSearchParams({
    action: 'AddOrder',
    clientid: userId, // Can be null if user is not logged in
    pid: productId,
    billingcycle: 'monthly', // You can make this dynamic later
    responsetype: 'json',
    identifier: process.env.WHMCS_API_IDENTIFIER,
    secret: process.env.WHMCS_API_SECRET,
  });

  try {
    const { data } = await axios.post(process.env.WHMCS_API_URL, params);
    if (data.result === 'success') {
      // Construct the URL to the WHMCS cart
      const checkoutUrl = `${process.env.WHMCS_API_URL.replace('/includes/api.php', '')}/cart.php?a=view`;
      res.json({ redirectTo: checkoutUrl });
    } else {
      res.status(500).json({ error: data.message || 'Could not add product to cart.' });
    }
  } catch (error) {
    console.error('WHMCS AddOrder Error:', error.message);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
});

// --- Get All TLDs with Pricing Endpoint (This was missing) ---
app.get('/api/get-tld-pricing', async (req, res) => {
  const params = new URLSearchParams({
    action: 'GetTLDPricing',
    identifier: process.env.WHMCS_API_IDENTIFIER,
    secret: process.env.WHMCS_API_SECRET,
    responsetype: 'json',
  });

  try {
    const { data } = await axios.post(process.env.WHMCS_API_URL, params);
    if (data.result === 'success' && data.pricing) {
      res.json({ pricing: data.pricing });
    } else {
      res.status(500).json({ error: data.message || 'Could not fetch TLD list.' });
    }
  } catch (error) {
    console.error('WHMCS GetTLDPricing Error:', error.message);
    res.status(500).json({ error: 'A server error occurred while fetching TLDs.' });
  }
});
app.post('/api/whois', async (req, res) => {
    const { domain } = req.body;
    if (!domain) {
        return res.status(400).json({ error: 'Domain is required' });
    }
    try {
        const response = await axios.post(process.env.WHMCS_API_URL, new URLSearchParams({
            action: 'DomainWhois',
            domain: domain,
            identifier: process.env.WHMCS_API_IDENTIFIER,
            secret: process.env.WHMCS_API_SECRET,
            responsetype: 'json',
        }));

          // FIX: Clean the raw WHOIS data to remove HTML line breaks
        const rawData = response.data.whois || '';
        const cleanedData = rawData.replace(/<br\s*\/?>/gi, '\n');

        res.json({ whoisData: cleanedData });
    } catch (error) {
        console.error('WHOIS Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch WHOIS data from the registrar.' });
    }
});

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`API listening on http://${HOST}:${PORT}`);
});
