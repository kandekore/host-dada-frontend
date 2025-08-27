// src/components/SupportedTech.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './SupportedTech.css';

const technologies = [
  { name: 'Linux', logo: 'https://hostdada.uk/wp-content/uploads/2024/07/linux.svg' },
  { name: 'WordPress', logo: 'https://hostdada.uk/wp-content/uploads/2024/07/wordpress.svg' },
  { name: 'Windows', logo: 'https://hostdada.uk/wp-content/uploads/2024/07/windows.svg' },
  { name: 'AWS', logo: 'https://hostdada.uk/wp-content/uploads/2024/07/aws.svg' },
  { name: 'Google Cloud', logo: 'https://hostdada.uk/wp-content/uploads/2024/07/gcp.svg' },
];

const SupportedTech = () => {
  return (
    <section className="supported-tech-section">
      <Container>
        <h2 className="text-center section-title">We Support Your Favorite Tech</h2>
        <Row className="align-items-center justify-content-center">
          {technologies.map((tech) => (
            <Col key={tech.name} xs={4} md={2} className="text-center tech-logo-col">
              <Image src={tech.logo} alt={tech.name} className="tech-logo" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SupportedTech;