// src/components/EmailHosting.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './EmailHosting.css';

const EmailHosting = () => {
  return (
    <section className="alternating-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="text-content">
              <h2 className="section-title">Business-Class Email Hosting</h2>
              <p>
                Our email hosting service offers secure, business-class email with flexible mailbox limits. Enjoy easy, unlimited email migrations without paying extra.
              </p>
              <p>
                Make a professional impression with an email address that matches your domain. Manage email forwarding and autoresponders easily. Our service includes advanced antivirus and anti-spam protection.
              </p>
              <Button variant="primary" className="mt-3">Learn More About Email</Button>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src="https://hostdada.uk/wp-content/uploads/2024/07/hosted-email.png"
              alt="Hosted Email"
              fluid
              className="section-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmailHosting;