import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './SSLPage.css'; // Shared CSS for all SSL pages
import { API_BASE } from '../config';

const SSLWildcard = () => {
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

    const pageTitle = "Wildcard SSL Certificates | Host Dada";
    const pageDescription = "Secure your main domain and all your subdomains with a single Wildcard SSL certificate. The most convenient and cost-effective way to protect your entire site.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="ssl-hero-section text-white text-center">
                <Container>
                    <h1>Wildcard SSL Certificates</h1>
                    <p className="lead">One certificate to secure your entire online presence.</p>
                </Container>
            </div>

            <Container className="my-5">
                 {/* --- Intro Section --- */}
                <Row className="text-center mb-5">
                    <Col lg={8} className="mx-auto">
                        <h2>Secure Unlimited Subdomains, Simply & Affordably</h2>
                        <p className="text-muted">
                           A Wildcard SSL certificate is the ultimate solution for managing security across your entire domain. Protect your main site (`yourdomain.com`) and all your subdomains (`blog.yourdomain.com`, `shop.yourdomain.com`, etc.) with a single, easy-to-manage certificate.
                        </p>
                    </Col>
                </Row>
                 {/* --- Features Section --- */}
                <Row className="mb-5">
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                            <Card.Body>
                                <Card.Title>Unlimited Subdomains</Card.Title>
                                <Card.Text>Secure every subdomain on your server now and in the future. One certificate covers them all.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                        <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Simplified Management</Card.Title>
                                <Card.Text>Save time and reduce complexity by managing just one certificate for your entire domain portfolio.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-3">
                         <Card className="h-100 text-center feature-card-ssl">
                             <Card.Body>
                                <Card.Title>Cost-Effective Security</Card.Title>
                                <Card.Text>Far more affordable than purchasing individual SSL certificates for each of your subdomains.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* --- Pricing Section --- */}
                <div id="pricing">
                    <h2 className="text-center mb-4">Our Wildcard SSL Plans</h2>
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

export default SSLWildcard;