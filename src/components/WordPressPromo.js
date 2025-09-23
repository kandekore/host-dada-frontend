// src/components/WordPressPromo.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EmailHosting.css';
import WordPressLogo from '../assets/images/wordpress.svg';

const WordPressPromo = () => {
  return (
    <section className="alternating-section bg-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={{ span: 6, order: 'last' }}>
            <div className="text-content">
              <h2 className="section-title">Super-fast &amp; Secure WordPress Hosting</h2>
              <p>
                Get optimised hosting for WordPress, the world's most popular website builder. Our platform includes daily backups, malware scanning, and page speed optimization to keep your WordPress site fast and secure.
              </p>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check-circle text-success"></i></span>Free Domain Name with yearly plans</li>
                <li><span className="fa-li"><i className="fas fa-check-circle text-success"></i></span>Free SSL Certificates Included</li>
                <li><span className="fa-li"><i className="fas fa-check-circle text-success"></i></span>Powerful cPanel Management Tools</li>
              </ul>
              <Button as={Link} to="/hosting/wordpress-hosting" variant="primary" className="mt-3">
                Find Out More
              </Button>
            </div>
          </Col>

          <Col xs={12} md={{ span: 6, order: 'first' }} className="text-center">
            <Image
              src={WordPressLogo}
              alt="WordPress Hosting"
              fluid
              className="section-image"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 90vw, 520px"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WordPressPromo;
