// src/components/FooterPromo.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './FooterPromo.css';

const FooterPromo = () => {
  return (
    <section className="footer-promo-section">
      <Container className="text-center">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers and launch your website today.</p>
        <Button variant="light" size="lg" className="promo-button">
          View Hosting Plans
        </Button>
      </Container>
    </section>
  );
};

export default FooterPromo;