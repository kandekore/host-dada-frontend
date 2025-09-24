// src/components/VpsHosting.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './EmailHosting.css';
import { Link } from 'react-router-dom';


const VpsHosting = () => {
  return (
    <section className="alternating-section bg-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={{ span: 6, order: 'last' }}>
            <div className="text-content">
              <h2 className="section-title">Powerful VPS Hosting Services</h2>
              <p>
                Experience the ultimate in VPS hosting with our state-of-the-art services. Our enterprise-level Samsung SSD storage ensures maximum speed.
              </p>
              <p>
                Easily scale your VPS from a single server to a load-balanced cluster. Data protection is guaranteed with redundant hardware RAID. Deploy your choice of Windows or Linux in one click.
              </p>
              <Button as={Link} to="/hosting/vps-hosting" variant="primary" className="mt-3">Explore VPS Plans</Button>
              
            </div>
          </Col>

          <Col xs={12} md={{ span: 6, order: 'first' }} className="text-center">
            <Image
              src="https://hostdada.uk/wp-content/uploads/2024/07/Server.png"
              alt="VPS Hosting"
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

export default VpsHosting;
