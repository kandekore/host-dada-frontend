// src/pages/CartPage.js
import React, { useContext } from 'react';
import { Container, ListGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import CartContext from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    if (item.price && typeof item.price === 'string') {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      return total + (isNaN(price) ? 0 : price);
    }
    return total;
  }, 0);

  const handleCheckout = () => {
    const whmcsUrl = 'https://my.hostdada.co.uk/cart.php';
    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const domains = cartItems.filter(item => item.type === 'domain');
    const products = cartItems.filter(item => item.type === 'hosting');

    let checkoutUrl = '';

    if (products.length > 0) {
        // --- Scenario 1: Hosting and (optional) Domain ---
        // This is the most robust method. It tells WHMCS to add a product
        // and simultaneously begin the registration process for the specified domain.
        const product = products[0];
        
        // Start by adding the product ID
        checkoutUrl = `${whmcsUrl}?a=add&pid=${product.id}`;

        if (domains.length > 0) {
            const domain = domains[0];
            // Add the domain and specify the action is to 'register' it
            checkoutUrl += `&domain=${domain.domain}&domainoption=register`;
        }

    } else if (domains.length > 0) {
        // --- Scenario 2: Only Domain(s) in Cart ---
        // This method correctly adds multiple domains for registration.
        const domainParams = domains.map(d => `domains[]=${encodeURIComponent(d.domain)}`).join('&');
        checkoutUrl = `${whmcsUrl}?a=add&domain=register&${domainParams}`;
    }

    if (checkoutUrl) {
        console.log("Redirecting to WHMCS:", checkoutUrl);
        window.location.href = checkoutUrl;
    } else {
        alert("Could not determine the checkout URL.");
    }
  }; 
  
  return (
    <Container className="my-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <Alert variant="info">Your cart is currently empty.</Alert>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row className="align-items-center">
                <Col md={6}>
                  <strong>{item.name || item.domain}</strong>
                  {item.type === 'hosting' && item.cycle && (
                    <div className="text-muted" style={{textTransform: 'capitalize'}}>{item.cycle}</div>
                  )}
                </Col>
                <Col md={3} className="text-md-end">
                  <span>{item.price || 'N/A'}</span>
                </Col>
                <Col md={3} className="text-md-end">
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <Row>
              <Col md={9} className="text-end">
                <strong>Total:</strong>
              </Col>
              <Col md={3} className="text-md-end">
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