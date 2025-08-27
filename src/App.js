// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import LoginModal from './components/LoginModal';

// Example page components:
import Home from './pages/Home';
import AboutWhoWeAre from './pages/AboutWhoWeAre';
import AboutOurValues from './pages/AboutOurValues';
import DataCenters from './pages/DataCenters';
import Resellers from './pages/Resellers';
import AffiliateProgram from './pages/AffiliateProgram';
import Careers from './pages/Careers';
import DomainsSearchRegister from './pages/DomainsSearchRegister';
import DomainsTransfer from './pages/DomainsTransfer';
import DomainsWhois from './pages/DomainsWhois';
import LinuxHosting from './pages/LinuxHosting';
import WindowsHosting from './pages/WindowsHosting';
import WordPressHosting from './pages/WordPressHosting';
import LiteSpeedHosting from './pages/LiteSpeedHosting';
import CloudAppHosting from './pages/CloudAppHosting';
import TransferToUs from './pages/TransferToUs';
import EmailIMAPPOP3 from './pages/EmailIMAPPOP3';
import EmailExchange from './pages/EmailExchange';
import EmailMicrosoft365 from './pages/EmailMicrosoft365';
import SSLStandard from './pages/SSLStandard';
import SSLOV from './pages/SSLOV';
import SSLEV from './pages/SSLEV';
import SSLWildcard from './pages/SSLWildcard';
import HireDeveloper from './pages/HireDeveloper';
import Weebly from './pages/Weebly';
import StackWebsiteBuilder from './pages/StackWebsiteBuilder';
import SiteJetBuilder from './pages/SiteJetBuilder';
import VPN from './pages/VPN';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  return (
    <Router>
      {/* Header with Login / Register button */}
      <div className="container py-2 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleLoginShow}>
          Login / Register
        </button>
      </div>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* About Us Routes */}
          <Route path="about-us/who-we-are" element={<AboutWhoWeAre />} />
          <Route path="about-us/our-values" element={<AboutOurValues />} />
          <Route path="about-us/data-centers" element={<DataCenters />} />
          <Route path="about-us/resellers" element={<Resellers />} />
          <Route path="about-us/affiliate-program" element={<AffiliateProgram />} />
          <Route path="about-us/careers" element={<Careers />} />

          {/* Domains Routes */}
          <Route path="domains/search-register" element={<DomainsSearchRegister />} />
          <Route path="domains/transfer" element={<DomainsTransfer />} />
          <Route path="domains/whois" element={<DomainsWhois />} />

          {/* Hosting Routes */}
          <Route path="hosting/linux-hosting" element={<LinuxHosting />} />
          <Route path="hosting/windows-hosting" element={<WindowsHosting />} />
          <Route path="hosting/wordpress-hosting" element={<WordPressHosting />} />
          <Route path="hosting/litespeed-hosting" element={<LiteSpeedHosting />} />
          <Route path="hosting/cloud-app-hosting" element={<CloudAppHosting />} />
          <Route path="hosting/transfer-to-us" element={<TransferToUs />} />

          {/* Email Hosting Routes */}
          <Route path="email-hosting/imap-pop3" element={<EmailIMAPPOP3 />} />
          <Route path="email-hosting/exchange" element={<EmailExchange />} />
          <Route path="email-hosting/microsoft-365" element={<EmailMicrosoft365 />} />

          {/* SSL Routes */}
          <Route path="ssl/standard" element={<SSLStandard />} />
          <Route path="ssl/ov" element={<SSLOV />} />
          <Route path="ssl/ev" element={<SSLEV />} />
          <Route path="ssl/wildcard" element={<SSLWildcard />} />

          {/* Websites Routes */}
          <Route path="websites/hire-developer" element={<HireDeveloper />} />
          <Route path="websites/weebly" element={<Weebly />} />
          <Route path="websites/stack-website-builder" element={<StackWebsiteBuilder />} />
          <Route path="websites/sitejet-builder" element={<SiteJetBuilder />} />

          {/* VPN Route */}
          <Route path="vpn" element={<VPN />} />
        </Route>
      </Routes>

      {/* Login/Register Modal */}
      <LoginModal show={showLogin} handleClose={handleLoginClose} />
    </Router>
  );
}

export default App;
