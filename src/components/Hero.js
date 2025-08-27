// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';
import heroBackground from '../assets/images/slider-1.jpg';

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
              Not All Hosting Is Created Equal. Experience blazing fast speeds and 99.9% uptime with our state-of-the-art hosting solutions.
            </p>
            <Button variant="primary" size="lg">Get Started Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; // This line is crucial