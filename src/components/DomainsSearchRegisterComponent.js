import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import WhoisModal from './WhoisModal';
import './DomainsSearchRegisterComponent.css'; // Using the new CSS file
import { API_BASE } from '../config';

// Import logos
import comLogo from '../assets/tlds/com.png';
import ukLogo from '../assets/tlds/uk.png';
import coUkLogo from '../assets/tlds/co-uk.png';
import netLogo from '../assets/tlds/net.png';
import ioLogo from '../assets/tlds/io.png';

const tldLogos = {
  '.com': comLogo,
  '.uk': ukLogo,
  '.co.uk': coUkLogo,
  '.net': netLogo,
  '.io': ioLogo,
};

const PRIMARY_TLDS = ['.com', '.uk', '.co.uk', '.net', '.io'];

const DomainsSearchRegisterComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mainResult, setMainResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [tldPrices, setTldPrices] = useState({});
  const [showWhois, setShowWhois] = useState(false);
  const [whoisDomain, setWhoisDomain] = useState('');
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTldPrices = async () => {
      try {
        const response = await fetch(`${API_BASE}/get-all-tlds`);
        const data = await response.json();
        if (response.ok) {
          const priceMap = data.tlds.reduce((acc, tld) => {
            acc[tld.tld] = { price: tld.price };
            return acc;
          }, {});
          setTldPrices(priceMap);
        }
      } catch (error) {
        console.error("Could not fetch TLD prices");
      }
    };
    fetchTldPrices();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    let fullSearchTerm = searchTerm.trim();
    if (!fullSearchTerm) {
      setError('Please enter a domain name.');
      return;
    }

    const hasPrimaryTld = PRIMARY_TLDS.some(tld => fullSearchTerm.endsWith(tld));
    const hasAnyTld = fullSearchTerm.includes('.');
    
    let name = fullSearchTerm;
    if (hasAnyTld) {
        const parts = name.split('.');
        name = parts[0];
    }

    setIsLoading(true);
    setMainResult(null);
    setSuggestions([]);
    setError('');

    if (!hasPrimaryTld && hasAnyTld) {
      try {
        const response = await fetch(`${API_BASE}/domain-check`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ domain: fullSearchTerm }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);

        setMainResult({ domain: fullSearchTerm, status: data.status });

      } catch (err) {
        setError(err.message);
      }
    }
    
    try {
      const response = await fetch(`${API_BASE}/domain-search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchTerm: name }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      let searchDomain = fullSearchTerm;
      if (!hasAnyTld) {
        searchDomain += '.co.uk';
      }

      const main = data.results.find(res => res.domain === searchDomain);
      const otherSuggestions = data.results.filter(res => res.domain !== searchDomain);
      
      if (hasPrimaryTld || !hasAnyTld) {
        setMainResult(main);
      }
      
      setSuggestions(otherSuggestions);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = (domainResult) => {
    const tld = domainResult.domain.substring(domainResult.domain.indexOf('.'));
    const price = tldPrices[tld]?.price;

    const item = {
      id: domainResult.domain, // Use domain as a unique ID
      type: 'domain',
      domain: domainResult.domain,
      price: price, // Pass the price
    };
    addToCart(item);
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
      <div className="domain-search-register-section">
        <Container>
            <Row className="justify-content-center text-center">
                <Col md={10} lg={8}>
                    <h1 className="domain-search-title">Find your perfect domain name</h1>
                    <p className="lead mb-4">
                    With over 300 domain extensions, you'll find the one that's right for you.
                    </p>
                </Col>
            </Row>

            {/* TLD Prices Above */}
            <Row className="justify-content-center text-center mb-4">
            {PRIMARY_TLDS.map((tld) => {
                const logo = tldLogos[tld];
                const price = tldPrices[tld]?.price;
                if (!logo) return null;
                return (
                <Col key={tld} xs={4} md="auto" className="tld-item">
                    <Image src={logo} alt={`${tld} logo`} className="tld-logo" />
                    <div className="tld-price">{price || <Spinner size="sm" />}</div>
                </Col>
                );
            })}
            </Row>

            {/* Full-Width Search Bar */}
            <Row className="justify-content-center">
            <Col md={10} lg={8}>
                <Form onSubmit={handleSearch} className="domain-search-form">
                    <div className="input-group">
                        <Form.Control
                        type="search"
                        placeholder="e.g., myawesomeidea.com"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Domain search"
                        />
                        <Button variant="primary" type="submit" disabled={isLoading}>
                             {isLoading ? <Spinner size="sm" /> : 'Search'}
                        </Button>
                    </div>
                </Form>
                 <div className="text-center mt-3">
                    <Link to="/domains/all-tlds">Or see a list of all TLDs and prices</Link>
                </div>
            </Col>
            </Row>
            
            {/* Results Section */}
            <Row className="justify-content-center mt-4">
                <Col lg={10}>
                {error && <Alert variant="danger">{error}</Alert>}
                
                {mainResult && (
                    <Alert variant={mainResult.status === 'available' ? 'success' : 'danger'} className="d-flex justify-content-between align-items-center">
                    <span>
                        <strong>{mainResult.domain}</strong> is {mainResult.status}.
                    </span>
                    {mainResult.status === 'available' ? (
                        <div>
                        <strong className="mx-3">
                            {tldPrices[mainResult.domain.substring(mainResult.domain.indexOf('.'))]?.price}
                        </strong>
                        <Button variant="outline-success" onClick={() => handleAddToCart(mainResult)}>Add to Cart</Button>
                        </div>
                    ) : (
                        <Button variant="outline-secondary" onClick={() => handleWhoisClick(mainResult.domain)}>WHOIS</Button>
                    )}
                    </Alert>
                )}

                {suggestions.length > 0 && (
                    <Row className="tld-suggestions-row mt-3">
                    {suggestions.map(sugg => (
                        <Col key={sugg.domain} xs={6} sm={4} md={3} lg className="text-center tld-suggestion-item">
                        <Image src={tldLogos[sugg.domain.substring(sugg.domain.indexOf('.'))]} className="tld-logo" />
                        <div className="domain-name">{sugg.domain}</div>
                        <div className="tld-price">{tldPrices[sugg.domain.substring(sugg.domain.indexOf('.'))]?.price}</div>
                        {sugg.status === 'available' ? (
                            <Button variant="success" size="sm" onClick={() => handleAddToCart(sugg)}>Register</Button>
                        ) : (
                            <Button variant="secondary" size="sm" onClick={() => handleWhoisClick(sugg.domain)}>WHOIS</Button>
                        )}
                        </Col>
                    ))}
                    </Row>
                )}
                {(mainResult || suggestions.length > 0) && (
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

export default DomainsSearchRegisterComponent;