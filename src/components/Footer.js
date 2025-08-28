// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import siteStructure from '../data/siteStructure';
import './Footer.css';

import microsoftLogo from '../assets/images/microsoft-partner.png';
import nominetLogo from '../assets/images/nominet-partner.png';

const Footer = () => {
  // ... link extraction logic remains the same ...
  const productLinks = siteStructure.filter(item =>
    ["Domains", "Hosting", "Email Hosting", "SSL", "Websites", "VPN"].includes(item.title)
  );
  const companyLinks = siteStructure.find(item => item.title === "About Us");


  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5 justify-content-center">
          {/* Column 1: Logos and Brand Info */}
          <Col lg={4} md={6} className="mb-4 footer-info text-center">
            <h5>Accredited Partners</h5>
            <div className="partner-logos">
                <Image src={microsoftLogo} alt="Microsoft Partner" className="partner-logo" />
                <Image src={nominetLogo} alt="Nominet Partner" className="partner-logo" />
            </div>
            <p className="company-motto">Reliable hosting, backed by expert support.</p>
          </Col>

          {/* Column 2: Product Links */}
          <Col lg={2} md={3} sm={6} className="mb-4 text-center text-md-start">
            <h5>Products</h5>
            <ul className="list-unstyled footer-links">
              {productLinks.map(item => (
                <li key={item.title}><Link to={item.url}>{item.title}</Link></li>
              ))}
            </ul>
          </Col>
          
          {/* Column 3: Company Links */}
          <Col lg={3} md={3} sm={6} className="mb-4 text-center text-md-start">
            <h5>Company</h5>
            <ul className="list-unstyled footer-links">
              {companyLinks.subItems.map(sub => (
                <li key={sub.title}><Link to={sub.url}>{sub.title}</Link></li>
              ))}
            </ul>
          </Col>

          {/* Column 4: Support & Legal Links */}
          <Col lg={3} md={12} className="mb-4 text-center text-md-start">
             <h5>Support</h5>
            <ul className="list-unstyled footer-links">
                <li><Link to="/support">Contact Us</Link></li>
                <li><Link to="/knowledge-base">Knowledge Base</Link></li>
            </ul>
            <h5>Legal</h5>
            <ul className="list-unstyled footer-links">
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Sub-Footer */}
        <div className="sub-footer">
          <p>Host Dada is a registered UK company. Company No: 12345678. VAT No: GB123456789.</p>
          <p>&copy; {new Date().getFullYear()} Host Dada. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;