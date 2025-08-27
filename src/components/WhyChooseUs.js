// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';

const features = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Security',
    description: 'Our servers are protected by the latest security measures, ensuring your data is always safe.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Performance',
    description: 'Experience blazing-fast website speeds with our state-of-the-art infrastructure.',
  },
  {
    icon: 'fas fa-headset',
    title: 'Support',
    description: 'Our expert support team is available 24/7 to help you with any issues or questions.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <Container>
        <h2 className="text-center section-title">Why Choose Host Dada?</h2>
        <p className="text-center section-subtitle mb-5">
          We provide hosting that's powerful, simple, and surprisingly affordable.
        </p>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;