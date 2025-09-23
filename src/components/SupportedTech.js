// src/components/SupportedTech.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './SupportedTech.css';

// Local imports (placed in src/assets/images)
import linuxLogo from '../assets/images/linux.svg';
import wordpressLogo from '../assets/images/wordpress.svg';
import windowsLogo from '../assets/images/windows.svg';
import awsLogo from '../assets/images/aws.svg';
import gcpLogo from '../assets/images/gcp.svg';

const technologies = [
  { name: 'Linux', logo: linuxLogo },
  { name: 'WordPress', logo: wordpressLogo },
  { name: 'Windows', logo: windowsLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Google Cloud', logo: gcpLogo },
];

const SupportedTech = () => {
  return (
    <section className="supported-tech-section">
      <Container>
        <h2 className="text-center section-title">We Support Your Favorite Tech</h2>
        <Row className="align-items-center justify-content-center">
          {technologies.map((tech) => (
            <Col key={tech.name} xs={4} md={2} className="text-center tech-logo-col">
              <Image
                src={tech.logo}
                alt={tech.name}
                className="tech-logo"
                
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 30vw, 160px"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SupportedTech;
