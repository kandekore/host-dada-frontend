// src/config.js
const envBase = process.env.REACT_APP_API_BASE && process.env.REACT_APP_API_BASE.trim();

// Fallbacks:
// - localhost dev  -> http://localhost:3001/api
// - everything else -> /api  (proxied by LiteSpeed in prod)
const computedBase =
  envBase || (window.location.hostname === 'localhost'
    ? 'http://localhost:3001/api'
    : '/api');

// Export both named and default so either import style works
export const API_BASE = computedBase;
export default API_BASE;
