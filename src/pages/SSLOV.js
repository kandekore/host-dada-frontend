import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './SSLPage.css'; // Shared CSS for all SSL pages
import { API_BASE } from '../config';

const SSLOV = () => {
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

    const pageTitle = "Organization Validation (OV) SSL | Host Dada";
    const pageDescription = "Build customer confidence with an OV SSL certificate that verifies your business's identity. Ideal for small businesses and sites accepting sensitive info.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="ssl-hero-section text-white text-center">
                <Container>
                    <h1>Organization Validation (OV) SSL</h1>
                    <p className="lead">Authenticate your business and protect your users with a higher level of trust.</p>
                </Container>
            </div>

            <Container className="my-5">
                 {/* --- Intro Section --- */}
                <Row className="text-center mb-5">
                    <Col lg={8} className="mx-auto">
                        <h2>Show Customers You're a Legitimate Business</h2>
                        <p className="text-muted">
                            An Organization Validated (OV) SSL certificate goes beyond simple domain control. We verify your company’s details, providing a much stronger signal of trust to your visitors.
                        </p>
                    </Col>
                </Row>
                 {/* --- Features Section --- */}
                <Row className="mb-5">
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                            <Card.Body>
                                <Card.Title>Verifies Your Organization</Card.Title>
                                <Card.Text>We authenticate your business identity, proving to users that your site is operated by a real, registered company.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Issued Within a Day</Card.Title>
                                <Card.Text>The enhanced validation process is thorough but efficient, typically completing within one business day.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                         <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Ideal for Business Sites</Card.Title>
                                <Card.Text>Perfect for login pages, intranets, and small business websites that handle user information.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* --- Pricing Section --- */}
                <div id="pricing">
                    <h2 className="text-center mb-4">Our Organization Validation SSL Plans</h2>
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

export default SSLOV;