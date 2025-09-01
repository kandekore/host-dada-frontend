// src/pages/CartPage.js
import React, { useContext } from 'react';
import { Container, ListGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import CartContext from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    if (item.price && typeof item.price === 'string') {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      return total + (isNaN(price) ? 0 : price);
    }
    return total;
  }, 0);

  const handleCheckout = () => {
    const baseUrl = 'https://my.hostdada.co.uk/cart.php?a=add';
    const params = [];

    // Separate domains and hosting products
    const domains = cartItems.filter(item => item.type === 'domain');
    const products = cartItems.filter(item => item.type === 'hosting');

    // Add domain parameters
    if (domains.length > 0) {
      params.push('domain=register');
      domains.forEach(item => {
        // Assuming a 1-year registration period for all domains
        params.push(`domains[]=${encodeURIComponent(item.domain)}`);
        params.push(`domainsregperiod[${item.domain}]=1`);
      });
    }

    // Add hosting product parameters
    products.forEach(item => {
      params.push(`pid[]=${item.pid}`);
      // Add the billing cycle for each product
      if (item.cycle) {
        params.push(`billingcycle[]=${item.cycle}`);
      }
    });

    if (params.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const checkoutUrl = `${baseUrl}&${params.join('&')}`;
    
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
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row className="align-items-center">
                <Col md={6}>
                  <strong>{item.name || item.domain}</strong>
                  {/* Display the selected cycle for hosting products */}
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