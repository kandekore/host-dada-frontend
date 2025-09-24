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
        {/* Column 1 (becomes last): Logos and Brand Info */}
        <Col
          lg={{ span: 4, order: 4 }}
          md={{ span: 6, order: 4 }}
          className="mb-4 footer-info text-center"
        >
          <h5>Accredited Partners</h5>
          <div className="partner-logos">
            <Image src={microsoftLogo} alt="Microsoft Partner" className="partner-logo" />
            <Image src={nominetLogo} alt="Nominet Partner" className="partner-logo" />
          </div>
          <p className="company-motto">Reliable hosting, backed by expert support.</p>
        </Col>

        {/* Column 2 (now first): Product Links */}
        <Col
          lg={{ span: 2, order: 1 }}
          md={{ span: 3, order: 1 }}
          sm={6}
          className="mb-4 text-center text-md-start"
        >
          <h5>Products</h5>
          <ul className="list-unstyled footer-links">
            {productLinks.map(item => (
              <li key={item.title}><Link to={item.url}>{item.title}</Link></li>
            ))}
          </ul>
        </Col>

        {/* Column 3 (now second): Company Links */}
        <Col
          lg={{ span: 3, order: 2 }}
          md={{ span: 3, order: 2 }}
          sm={6}
          className="mb-4 text-center text-md-start"
        >
          <h5>Company</h5>
          <ul className="list-unstyled footer-links">
            {companyLinks.subItems.map(sub => (
              <li key={sub.title}><Link to={sub.url}>{sub.title}</Link></li>
            ))}
          </ul>
        </Col>

        {/* Column 4 (now third): Support & Legal Links */}
        <Col
          lg={{ span: 3, order: 3 }}
          md={{ span: 12, order: 3 }}
          className="mb-4 text-center text-md-start"
        >
          <h5>Support</h5>
          <ul className="list-unstyled footer-links">
            <li><Link to="/support">Contact Us</Link></li>
            <li><Link to="/knowledge-base">Knowledge Base</Link></li>
          </ul>
          <h5>Legal</h5>
          <ul className="list-unstyled footer-links">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </Col>
      </Row>

      {/* Sub-Footer */}
      <div className="sub-footer">
        <p>Host Dada is a company registered in England under company number 14514477</p>
        <p>&copy; {new Date().getFullYear()} Host Dada. All Rights Reserved.</p>
      </div>
    </Container>
  </footer>
);
};

export default Footer;