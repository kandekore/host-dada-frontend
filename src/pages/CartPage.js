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
    const baseUrl = 'https://my.hostdada.co.uk/index.php?rp=';
    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const domains = cartItems.filter(item => item.type === 'domain');
    const products = cartItems.filter(item => item.type === 'hosting');

    let checkoutUrl = '';

    if (products.length > 0) {
        // --- THE DEFINITIVE FIX ---
        // If there's a hosting product, we go directly to its configuration page.
        const product = products[0]; // Take the first hosting product
        
        // The slug from the API often looks like "product-group/product-name"
        // If your slug doesn't contain the group, you may need to adjust this.
        const productPath = product.slug; 

        checkoutUrl = `${baseUrl}/store/${productPath}`;

        if (domains.length > 0) {
            // If a domain is also in the cart, pass it as a query parameter.
            // WHMCS will pre-fill the domain on the configuration page.
            const domain = domains[0];
            checkoutUrl += `?domain=${domain.domain}`;
        }

    } else if (domains.length > 0) {
        // --- Scenario 2: Only Domain(s) in Cart ---
        const whmcsCartUrl = 'https://my.hostdada.co.uk/cart.php';
        const domainParams = domains.map(d => `domains[]=${encodeURIComponent(d.domain)}&domainsregperiod[${d.domain}]=1`).join('&');
        checkoutUrl = `${whmcsCartUrl}?a=add&domain=register&${domainParams}`;
    }

    if (checkoutUrl) {
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