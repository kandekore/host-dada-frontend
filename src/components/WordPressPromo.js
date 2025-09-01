// src/components/WordPressPromo.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// We can reuse the same CSS file as the other promo sections
import './EmailHosting.css'; 

const WordPressPromo = () => {
  return (
    <section className="alternating-section bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={{ span: 6, order: 'last' }}>
            <div className="text-content">
              <h2 className="section-title">Super-fast & Secure WordPress Hosting</h2>
              <p>
                Get optimized hosting for the world's most popular website builder. Our platform includes daily backups, malware scanning, and page speed optimization to keep your WordPress site fast and secure.
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
          <Col md={{ span: 6, order: 'first' }}>
            <Image
              src="https://hostdada.uk/wp-content/uploads/2024/07/wordpress.svg"
              alt="WordPress Hosting"
              fluid
              className="section-image p-5"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WordPressPromo;