// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';
import heroBackground from '../assets/images/small-business-website-hosting.jpg'; // Ensure you have this image in the specified path

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-overlay"></div>
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={7} className="text-start">
            <h1 className="display-3 fw-bold text-white">
              Website & Email Hosting You Can Rely On
            </h1>
            <p className="lead text-white-75 my-4">
We are the platform for 100's of businesses, giving them the foundation they           </p>
            <Button variant="primary" size="lg">Get Started Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; // This line is crucial