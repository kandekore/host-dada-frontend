// src/pages/AllTlds.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Form, Spinner, Alert, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './AllTlds.css';

const AllTlds = () => {
  const [pricing, setPricing] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTldPricing = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/get-tld-pricing');
        
        // --- THIS IS THE FIX: Resilient JSON parsing ---
        const resText = await response.text();
        if (!response.ok || !resText.startsWith('{')) {
          throw new Error('Could not fetch the list of domain extensions. Please check API permissions.');
        }
        const data = JSON.parse(resText);
        // --- END OF FIX ---

        setPricing(data.pricing);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTldPricing();
  }, []);

  const handleOrder = (tld) => {
    // Redirects to the homepage to perform an availability check
    window.location.href = `/?search=yourdomain${tld}`;
  };

  const filteredTlds = Object.entries(pricing).filter(([tld]) => 
    tld.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Domain TLD Pricing | Host Dada</title>
        <meta name="description" content="Explore a comprehensive list of all available domain extensions and their registration, transfer, and renewal prices." />
      </Helmet>

      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h1>All TLDs & Pricing</h1>
            <p className="lead">Find the perfect extension for your next big idea.</p>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Form.Control 
              type="text"
              placeholder="Filter by extension (e.g., .com, .store)"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Col>
        </Row>

        {isLoading && (
          <div className="text-center py-5">
            <Spinner animation="border" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}
        
        {!isLoading && !error && (
          <Table striped bordered hover responsive className="pricing-table">
            <thead>
              <tr>
                <th>Extension</th>
                <th className="text-center">Register (1 Year)</th>
                <th className="text-center">Transfer</th>
                <th className="text-center">Renew</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredTlds.map(([tld, prices]) => (
                <tr key={tld}>
                  <td className="tld-name">.<a href={`/domains/${tld}`}>{tld}</a></td>
                  <td className="text-center price">{prices.register['1']}</td>
                  <td className="text-center price">{prices.transfer['1']}</td>
                  <td className="text-center price">{prices.renew['1']}</td>
                  <td className="text-center">
                    <Button variant="primary" size="sm" onClick={() => handleOrder(`.${tld}`)}>
                      Order
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default AllTlds;