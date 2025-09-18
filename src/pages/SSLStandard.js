import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './SSLPage.css'; // Shared CSS for all SSL pages
import { API_BASE } from '../config';

const SSLStandard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 44 }),
                });

                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(`Failed to fetch products: ${errorText}`);
                }
                
                const data = await res.json();
                setProducts(data.products);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const pageTitle = "Standard SSL Certificates (DV) | Host Dada";
    const pageDescription = "Secure your site quickly with our Domain Validated (DV) SSL Certificates. Ideal for blogs, personal sites, and non-critical pages. Issued in minutes.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="ssl-hero-section text-white text-center">
                <Container>
                    <h1>Standard SSL - Domain Validation (DV)</h1>
                    <p className="lead">Fast, affordable, and essential security for your website.</p>
                </Container>
            </div>

            <Container className="my-5">
                {/* --- Intro Section --- */}
                <Row className="text-center mb-5">
                    <Col lg={8} className="mx-auto">
                        <h2>Quickly Secure Your Site & Gain Visitor Trust</h2>
                        <p className="text-muted">
                            A Domain Validated (DV) certificate is the most common and accessible type of SSL. It confirms that you own and control your domain, enabling HTTPS and the secure padlock icon in your visitors' browsers.
                        </p>
                    </Col>
                </Row>

                {/* --- Features Section --- */}
                <Row className="mb-5">
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                            <Card.Body>
                                <Card.Title>Verifies Domain Ownership</Card.Title>
                                <Card.Text>Confirms you control the domain, satisfying browser requirements for basic security.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Issued in Minutes</Card.Title>
                                <Card.Text>With a fully automated validation process, your certificate is issued and ready to use in just a few minutes.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                         <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Ideal for Basic Sites</Card.Title>
                                <Card.Text>Perfect for blogs, portfolios, and personal websites that don't handle sensitive user data.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* --- Pricing Section --- */}
                <div id="pricing">
                    <h2 className="text-center mb-4">Our Standard SSL Plans</h2>
                     {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} groupSlug="sslcerts"/>
                    )}
                </div>

            </Container>
        </>
    );
};

export default SSLStandard;