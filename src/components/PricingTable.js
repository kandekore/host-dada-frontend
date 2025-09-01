// src/components/PricingTable.js
import React, { useContext } from 'react';
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import './PricingTable.css';

const PricingTable = ({ products }) => {
  const { user } = useContext(AuthContext);

  const handleOrder = async (productId) => {
    try {
      const response = await fetch('http://localhost:3001/api/add-product-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user ? user.id : null, // Pass user ID if logged in
          productId: productId,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        window.location.href = data.redirectTo; // Redirect to WHMCS cart
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Order failed:', error);
      alert('Error: Could not add product to cart.');
    }
  };

  return (
    <Row>
      {products.map((product) => (
        <Col md={6} lg={4} key={product.pid} className="mb-4">
          <Card className="h-100 pricing-card">
            <Card.Header as="h4" className="text-center">{product.name}</Card.Header>
            <Card.Body>
              <div className="price-tag text-center">
                <span className="price">{product.pricing.GBP.monthly}</span>
                <span className="period">/mo</span>
              </div>
              <Card.Text as="div" dangerouslySetInnerHTML={{ __html: product.description }} className="product-description" />
              {/* You can add more product features here if available in the API response */}
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" className="w-100" onClick={() => handleOrder(product.pid)}>
                Order Now
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PricingTable;