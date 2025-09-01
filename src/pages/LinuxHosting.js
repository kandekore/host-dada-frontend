// src/pages/LinuxHosting.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';

const LinuxHosting = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace '1' with your actual Product Group ID for Linux Hosting
        const response = await fetch('http://localhost:3001/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ gid: 38 }), 
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch products.');
        }
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Linux Web Hosting | Host Dada</title>
        <meta name="description" content="Powerful and affordable Linux web hosting plans with cPanel, free SSL, and 24/7 support." />
      </Helmet>
      
      <Container className="my-5">
        <Row className="text-center mb-5">
          <Col>
            <h1>Linux Web Hosting</h1>
            <p className="lead">Reliable, fast, and secure hosting for any website, powered by cPanel.</p>
          </Col>
        </Row>

        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {!isLoading && !error && (
          <PricingTable products={products} />
        )}
      </Container>
    </>
  );
};

export default LinuxHosting;