// src/components/DomainSearch.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './DomainSearch.css';

// Placeholder TLD data - you can replace these with actual images
import comLogo from '../assets/tlds/com.png';
import netLogo from '../assets/tlds/net.png';
import orgLogo from '../assets/tlds/org.png';
import coUkLogo from '../assets/tlds/co-uk.png';
import ioLogo from '../assets/tlds/io.png';

const tlds = [
  { name: '.com', price: '$8.99', logo: comLogo },
  { name: '.net', price: '$9.99', logo: netLogo },
  { name: '.org', price: '$10.99', logo: orgLogo },
  { name: '.co.uk', price: '$7.99', logo: coUkLogo },
  { name: '.io', price: '$14.99', logo: ioLogo },
];

const DomainSearch = () => {
  return (
    <div className="domain-search-section">
      <Container>
        <Row className="align-items-center">
          {/* ====== Domain Search Bar ====== */}
          <Col lg={7} className="mb-4 mb-lg-0">
            <h2 className="domain-search-title">Find Your Perfect Domain Name</h2>
            <Form className="d-flex domain-search-form">
              <Form.Control
                type="search"
                placeholder="Search for your domain..."
                className="me-2 domain-search-input"
                aria-label="Search for your domain"
              />
              <Button variant="primary" type="submit" className="domain-search-button">
                Search
              </Button>
            </Form>
          </Col>

          {/* ====== TLD Pricing ====== */}
          <Col lg={5}>
            <Row className="justify-content-center">
              {tlds.map((tld) => (
                <Col key={tld.name} xs={4} sm className="text-center tld-item">
                  <img src={tld.logo} alt={`${tld.name} logo`} className="tld-logo" />
                  <div className="tld-price">{tld.price}</div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DomainSearch;