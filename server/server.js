// server/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));
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
          price: registerPrice ? `${currency.prefix}${registerPrice}${currency.suffix}` : 'N/A'
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


app.listen(PORT, () => {
  console.log(`BFF Server is running on http://localhost:${PORT}`);
});