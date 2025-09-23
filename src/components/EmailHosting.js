// src/components/EmailHosting.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './EmailHosting.css';
import emailImage from '../assets/images/hosted-email.png';
import { Link } from 'react-router-dom';


const EmailHosting = () => {
  return (
    <section className="alternating-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={{ span: 6, order: 'first' }}>
            <div className="text-content">
              <h2 className="section-title">Business-Class Email Hosting</h2>
              <p>
                Our email hosting service offers secure, business-class email with flexible mailbox limits. Enjoy easy, unlimited email migrations without paying extra.
              </p>
              <p>
                Make a professional impression with an email address that matches your domain. Manage email forwarding and autoresponders easily. Our service includes advanced antivirus and anti-spam protection.
              </p>
              <Button as={Link} to="/email-hosting/" variant="primary" className="mt-3">Learn More About Email</Button>
            </div>
          </Col>

          <Col xs={12} md={{ span: 6, order: 'last' }} className="text-center">
            <Image
              src={emailImage}
              alt="Hosted Email"
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

export default EmailHosting;
