// src/pages/CartPage.js
import React, { useContext } from 'react';
import { Container, ListGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import CartContext from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    // Extract the numeric value from the price string (e.g., "£18.07 GBP")
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  const handleCheckout = () => {
    // Base URL for the WHMCS cart
    const baseUrl = 'https://my.hostdada.co.uk/cart.php?a=add&domain=register';
    
    // Create an array of domain parameters
    const domainParams = cartItems.map(item => `domains[]=${item.domain}`);
    
    // Combine the base URL with the domain parameters
    const checkoutUrl = `${baseUrl}&${domainParams.join('&')}`;
    
    // Redirect the user to the WHMCS checkout page
    window.location.href = checkoutUrl;
  };

  return (
    <Container className="my-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <Alert variant="info">Your cart is currently empty.</Alert>
      ) : (
        <ListGroup>
          {cartItems.map(item => (
            <ListGroup.Item key={item.domain}>
              <Row className="align-items-center">
                <Col md={8}>
                  <strong>{item.domain}</strong>
                </Col>
                <Col md={2} className="text-md-end">
                  <span>{item.price}</span>
                </Col>
                <Col md={2} className="text-md-end">
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.domain)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <Row>
              <Col md={10} className="text-end">
                <strong>Total:</strong>
              </Col>
              <Col md={2} className="text-md-end">
                <strong>£{totalPrice.toFixed(2)}</strong>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="text-end">
            <Button variant="primary" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Container>
  );
};

export default CartPage;