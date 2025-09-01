// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async'; // 1. Import HelmetProvider
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import 'react-toastify/dist/ReactToastify.css'; // <-- Add this line



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <CartProvider> 
          <App /> 
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();