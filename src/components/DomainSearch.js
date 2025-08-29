// src/components/DomainSearch.js
import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import WhoisModal from './WhoisModal';
import './DomainSearch.css';

import comLogo from '../assets/tlds/com.png';
import ukLogo from '../assets/tlds/uk.png';
import coUkLogo from '../assets/tlds/co-uk.png';
import netLogo from '../assets/tlds/net.png';
import ioLogo from '../assets/tlds/io.png';

const tldInfo = {
  '.com': { logo: comLogo, price: '$8.99' },
  '.uk': { logo: ukLogo, price: '$6.99' },
  '.co.uk': { logo: coUkLogo, price: '$7.99' },
  '.net': { logo: netLogo, price: '$9.99' },
  '.io': { logo: ioLogo, price: '$14.99' },
};

const DomainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mainResult, setMainResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const [showWhois, setShowWhois] = useState(false);
  const [whoisDomain, setWhoisDomain] = useState('');

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    let fullSearchTerm = searchTerm.trim();
    if (!fullSearchTerm) {
      setError('Please enter a domain name.');
      return;
    }

    const primaryTlds = ['.com', '.uk', '.co.uk', '.net', '.io'];
    const hasPrimaryTld = primaryTlds.some(tld => fullSearchTerm.endsWith(tld));
    
    // If it doesn't have a primary TLD, and it has a dot, we do a single search
    if (!hasPrimaryTld && fullSearchTerm.includes('.')) {
      setIsLoading(true);
      setMainResult(null);
      setSuggestions([]);
      setError('');
      try {
        const response = await fetch('http://localhost:3001/api/domain-check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ domain: fullSearchTerm }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);

        setMainResult({ domain: fullSearchTerm, status: data.status });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
      return;
    }


    if (!fullSearchTerm.includes('.')) {
      fullSearchTerm += '.co.uk';
    }

    let name = fullSearchTerm;
    Object.keys(tldInfo).forEach(tld => {
        if (name.endsWith(tld)) {
            name = name.slice(0, -tld.length);
        }
    });
    if (name.includes('.')) {
        const parts = name.split('.');
        parts.pop();
        name = parts.join('.');
    }

    setIsLoading(true);
    setMainResult(null);
    setSuggestions([]);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/domain-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchTerm: name }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const main = data.results.find(res => res.domain === fullSearchTerm);
      const otherSuggestions = data.results.filter(res => res.domain !== fullSearchTerm);
      
      setMainResult(main);
      setSuggestions(otherSuggestions);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhoisClick = (domain) => {
    setWhoisDomain(domain);
    setShowWhois(true);
  };
  
  const handleCheckAllExtensions = () => {
    const baseName = searchTerm.trim().split('.')[0];
    if (baseName) {
      navigate(`/domains/all-tlds-search/${baseName}`);
    }
  };


  return (
    <>
      <div className="domain-search-section">
        <Container>
          {/* --- THIS IS THE RESTORED 2-COLUMN LAYOUT --- */}
          <Row className="align-items-center">
            <Col lg={7} className="mb-4 mb-lg-0">
              <h2 className="domain-search-title">Find Your Perfect Domain Name</h2>
              <Form onSubmit={handleSearch} className="d-flex domain-search-form">
                <Form.Control
                    type="search"
                    placeholder="e.g., myawesomeidea"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner size="sm" /> : 'Search'}
                </Button>
              </Form>
              <div className="text-center text-lg-start mt-3">
                <Link to="/domains/all-tlds">Or see a list of all TLDs and prices</Link>
              </div>
            </Col>
            <Col lg={5}>
              <Row className="justify-content-center">
                {Object.entries(tldInfo).map(([tld, info]) => (
                  <Col key={tld} xs={4} sm className="text-center tld-item">
                    <Image src={info.logo} alt={`${tld} logo`} className="tld-logo" />
                    <div className="tld-price">{info.price}</div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          {/* --- END OF RESTORED LAYOUT --- */}

          {/* Results Area (appears underneath on search) */}
          <Row className="justify-content-center mt-4">
            <Col lg={10}>
              {error && <Alert variant="danger">{error}</Alert>}
              
              {mainResult && (
                <Alert variant={mainResult.status === 'available' ? 'success' : 'danger'}>
                  <strong>{mainResult.domain}</strong> is {mainResult.status}.
                  {mainResult.status === 'available' ? (
                    <Button variant="outline-success" className="float-end" onClick={() => addToCart(mainResult)}>Add to Cart</Button>
                  ) : (
                    <Button variant="outline-secondary" className="float-end" onClick={() => handleWhoisClick(mainResult.domain)}>WHOIS</Button>
                  )}
                </Alert>
              )}

              {suggestions.length > 0 && (
                <Row className="tld-suggestions-row mt-3">
                  {suggestions.map(sugg => (
                    <Col key={sugg.domain} className="text-center tld-suggestion-item">
                      <Image src={tldInfo[sugg.domain.substring(sugg.domain.indexOf('.'))]?.logo} className="tld-logo" />
                      <div className="domain-name">{sugg.domain}</div>
                      {sugg.status === 'available' ? (
                        <Button variant="success" size="sm" onClick={() => addToCart(sugg)}>Register</Button>
                      ) : (
                        <Button variant="secondary" size="sm" onClick={() => handleWhoisClick(sugg.domain)}>WHOIS</Button>
                      )}
                    </Col>
                  ))}
                </Row>
              )}
               {mainResult && (
                <div className="text-center mt-4">
                  <Button variant="link" onClick={handleCheckAllExtensions}>
                    Check all extensions
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <WhoisModal domain={whoisDomain} show={showWhois} handleClose={() => setShowWhois(false)} />
    </>
  );
};

export default DomainSearch;