import React, { useContext, useState, useMemo } from 'react';
import { Container, ListGroup, Button, Alert, Row, Col, Spinner } from 'react-bootstrap';
import CartContext from '../context/CartContext';

// Submit to WHMCS bridge as a top-level POST (avoids 3rd-party cookie issues)
const submitBridgeViaForm = (payload) => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://my.hostdada.co.uk/modules/addons/react_cart_bridge/bridge.php?action=prepare&return=redirect';
  form.style.display = 'none';

  const add = (name, value) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };

  const json = JSON.stringify(payload);
  add('payload_b64', (typeof btoa === 'function') ? btoa(unescape(encodeURIComponent(json))) : json);
  add('payload', json);

  document.body.appendChild(form);
  form.submit();
};

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState('');

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      if (item.price && typeof item.price === 'string') {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
        return total + (isNaN(price) ? 0 : price);
      }
      return total;
    }, 0);
  }, [cartItems]);

  const buildPayload = () => {
    const domains = cartItems
      .filter((i) => i.type === 'domain' && i.domain)
      .map((d) => ({
        domain: String(d.domain).toLowerCase(),
        type: d.transfer ? 'transfer' : 'register',
        regperiod: Number(d.regperiod || 1),
        dnsmanagement: Boolean(d.dnsmanagement || false),
        emailforwarding: Boolean(d.emailforwarding || false),
        idprotection: Boolean(d.idprotection || false),
        nameservers: Array.isArray(d.nameservers) ? d.nameservers : [],
        eppcode: d.eppcode || '',
      }));

    const products = cartItems
      .filter((i) => i.type === 'hosting' && (i.id || i.pid))
      .map((p) => {
        const allDomains = cartItems
          .filter((i) => i.type === 'domain' && i.domain)
          .map((d) => String(d.domain).toLowerCase());
        const chosenDomain =
          (p.domain && String(p.domain).toLowerCase()) ||
          (allDomains.length === 1 ? allDomains[0] : '');

        return {
          pid: Number(p.pid || p.id),
          billingcycle: (p.cycle || p.billingcycle || 'monthly').toLowerCase(),
          domain: chosenDomain,
          domainoption: p.domainoption || null,
          regperiod: p.regperiod || null,
          configoptions: p.configoptions || {},
          customfields: p.customfields || {},
          addons: Array.isArray(p.addons) ? p.addons : [],
          qty: p.qty || 1,
        };
      });

    return { clearExisting: true, domains, products };
  };

  const handleCheckout = () => {
    setError('');
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    setIsCheckingOut(true);
    try {
      submitBridgeViaForm(buildPayload());
    } catch (e) {
      console.error(e);
      setError(e.message || 'An unexpected error occurred while preparing checkout.');
      setIsCheckingOut(false);
    }
  };

  return (
    <Container className="my-5">
      <h2>Shopping Cart</h2>

      {error && <Alert variant="danger" className="mb-3">{error}</Alert>}

      {cartItems.length === 0 ? (
        <Alert variant="info">Your cart is currently empty.</Alert>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={`${item.type}-${item.id || item.pid || item.domain}`}>
              <Row className="align-items-center">
                <Col md={6}>
                  <strong>{item.name || item.domain}</strong>
                  {item.type === 'hosting' && (item.cycle || item.billingcycle) && (
                    <div className="text-muted" style={{ textTransform: 'capitalize' }}>
                      {item.cycle || item.billingcycle}
                    </div>
                  )}
                  {item.type === 'domain' && (
                    <div className="text-muted">
                      {(item.transfer ? 'Transfer' : 'Register')} for {item.regperiod || 1} year(s)
                    </div>
                  )}
                </Col>
                <Col md={3} className="text-md-end">
                  <span>{item.price || 'N/A'}</span>
                </Col>
                <Col md={3} className="text-md-end">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id || item.pid || item.domain)}
                    disabled={isCheckingOut}
                  >
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

          <ListGroup.Item className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={clearCart}
              disabled={isCheckingOut}
            >
              Empty Cart
            </Button>

            <Button variant="primary" onClick={handleCheckout} disabled={isCheckingOut}>
              {isCheckingOut ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Preparing Checkout…
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Container>
  );
};

export default CartPage;
