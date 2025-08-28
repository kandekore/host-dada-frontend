// server/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001; // We'll run our backend on a different port

// Middleware setup
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from our React app
app.use(express.json()); // Allow the server to understand JSON request bodies

// --- ValidateLogin Endpoint ---
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // First, validate the user's credentials
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
      // --- THIS IS THE FIX ---
      // If login is successful, use the user's EMAIL to get their client details,
      // not the userid from the previous call. This is more reliable.
      const clientParams = new URLSearchParams({
        action: 'GetClientsDetails',
        email: email, // Use the email address directly
        identifier: process.env.WHMCS_API_IDENTIFIER,
        secret: process.env.WHMCS_API_SECRET,
        responsetype: 'json',
      });
      
      const { data: clientData } = await axios.post(process.env.WHMCS_API_URL, clientParams);

      if (clientData.result === 'success') {
        res.json({
          result: 'success',
          user: {
            // WHMCS returns client details under `client[0]` when searching by email
            id: clientData.client.userid,
            firstName: clientData.client.firstname,
            lastName: clientData.client.lastname,
            email: clientData.client.email,
          }
        });
      } else {
         // This can happen if a user exists but isn't linked to a client account
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

app.listen(PORT, () => {
  console.log(`BFF Server is running on http://localhost:${PORT}`);
});