// src/components/HeroSlider.js
import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import './HeroSlider.css';

// Placeholder background images
import slide1 from '../assets/images/slider-1.jpg';
import slide2 from '../assets/images/slider-2.jpg';

const HeroSlider = () => {
  return (
    <Carousel className="hero-slider" indicators={false}>
      {/* ====== Slide 1: Image Background ====== */}
      <Carousel.Item style={{ backgroundImage: `url(${slide1})` }}>
        <div className="carousel-overlay"></div>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-start">
              {/* The className is removed from the caption itself */}
              <Carousel.Caption>
                <h1 className="display-4 fw-bold">Reliable Web Hosting</h1>
                <p className="lead">
                  Experience blazing fast speeds and 99.9% uptime with our
                  state-of-the-art hosting solutions.
                </p>
                <Button variant="primary" size="lg">Get Started</Button>
              </Carousel.Caption>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      {/* ====== Slide 2: Video Background ====== */}
      <Carousel.Item>
        <div className="carousel-overlay"></div>
        <video className="video-background" autoPlay loop muted playsInline>
          <source src="https://www.crazydomains.co.uk/wp-content/uploads/2023/07/home-page-banner.mp4" type="video/mp4" />
        </video>
        <Container>
           <Row className="align-items-center justify-content-end">
            <Col md={6} className="text-end">
              {/* The className is removed from the caption itself */}
              <Carousel.Caption>
                <h1 className="display-4 fw-bold">Seamless Video Integration</h1>
                <p className="lead">
                  Engage your audience with stunning video backgrounds and
                  showcase your products in action.
                </p>
                <Button variant="success" size="lg">Learn More</Button>
              </Carousel.Caption>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      
      {/* ====== Slide 3: Image Background (Right Aligned) ====== */}
      <Carousel.Item style={{ backgroundImage: `url(${slide2})` }}>
        <div className="carousel-overlay"></div>
        <Container>
          <Row className="align-items-center justify-content-end">
            <Col md={6} className="text-end">
              {/* The className is removed from the caption itself */}
              <Carousel.Caption>
                <h1 className="display-4 fw-bold">24/7 Expert Support</h1>
                <p className="lead">
                  Our award-winning support team is here to help you around the clock,
                  whenever you need it.
                </p>
                <Button variant="info" size="lg">Contact Us</Button>
              </Carousel.Caption>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSlider;