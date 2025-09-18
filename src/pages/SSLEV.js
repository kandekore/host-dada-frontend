import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './SSLPage.css'; // Shared CSS for all SSL pages
import { API_BASE } from '../config';

const SSLEV = () => {
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

    const pageTitle = "Extended Validation (EV) SSL | Host Dada";
    const pageDescription = "Maximize visitor confidence with an EV SSL certificate. The green address bar provides the strongest visual proof of your site's authenticity and security.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="ssl-hero-section text-white text-center">
                <Container>
                    <h1>Extended Validation (EV) SSL</h1>
                    <p className="lead">The highest standard in website trust and security.</p>
                </Container>
            </div>

            <Container className="my-5">
                 {/* --- Intro Section --- */}
                <Row className="text-center mb-5">
                    <Col lg={8} className="mx-auto">
                        <h2>Activate the Green Address Bar for Maximum Trust</h2>
                        <p className="text-muted">
                           An Extended Validation (EV) certificate represents the highest level of authentication. It triggers the famous "green address bar" in browsers, displaying your company name and providing an unmistakable sign of security that boosts customer confidence and conversions.
                        </p>
                    </Col>
                </Row>
                 {/* --- Features Section --- */}
                <Row className="mb-5">
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                            <Card.Body>
                                <Card.Title>Full Business Vetting</Card.Title>
                                <Card.Text>Undergoes a strict, standardized validation process to confirm your company’s legal and operational existence.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Highest Level of Trust</Card.Title>
                                <Card.Text>The green address bar provides a clear, visual cue that your site is highly secure and trustworthy.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                         <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Essential for E-commerce</Card.Title>
                                <Card.Text>Ideal for e-commerce, online banking, and any site handling sensitive data where trust is paramount.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* --- Pricing Section --- */}
                <div id="pricing">
                    <h2 className="text-center mb-4">Our Extended Validation SSL Plans</h2>
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

export default SSLEV;