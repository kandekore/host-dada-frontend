import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './Weebly.css'; // New CSS for this page
import { API_BASE } from '../config';

const Weebly = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 50 }), // Weebly Product Group ID
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
    }, []); // Corrected this line

    const pageTitle = "Weebly Website Builder | Host Dada";
    const pageDescription = "Create a stunning, professional website in minutes with the Weebly drag-and-drop builder. No technical skills required. Perfect for websites, blogs, and online stores.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="weebly-hero-section text-white text-center">
                <Container>
                    <h1>Building a Website Has Never Been Easier</h1>
                    <p className="lead">
                        Create the perfect site for your passion or business with powerful drag-and-drop tools.
                    </p>
                    <Button href="#pricing" variant="light" size="lg">View Plans & Pricing</Button>
                </Container>
            </div>

            <Container className="my-5">

                {/* --- Intro Section --- */}
                <Row className="mb-5 align-items-center">
                     <Col md={6} className="mb-4 mb-md-0">
                        <h2>Your Vision, Brought to Life</h2>
                        <p className="text-muted">
                            Weebly’s intuitive drag-and-drop builder makes it easy to create a powerful, professional website without any technical skills. Over 40 million people have already used Weebly to build their online presence.
                        </p>
                        <p className="text-muted">
                            Simply choose your elements—photos, maps, videos, forms—and drag them into place. It’s that simple.
                        </p>
                    </Col>
                    <Col md={6}>
                        {/* Placeholder for an image of the builder interface */}
                        <div className="placeholder-image-weebly">
                           <p>Image: Weebly Drag & Drop Interface</p>
                        </div>
                    </Col>
                </Row>


                {/* --- Core Features Section --- */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Powerful Design Tools at Your Fingertips</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-weebly">
                            <Card.Body>
                                <Card.Title>Stunning Templates</Card.Title>
                                <Card.Text>
                                    Choose from a wide variety of professionally designed, mobile-responsive templates that you can fully customize to fit your brand.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-weebly">
                            <Card.Body>
                                <Card.Title>Complete E-commerce</Card.Title>
                                <Card.Text>
                                    Build a powerful online store with a fully integrated shopping cart, secure checkout, inventory tracking, and more.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-weebly">
                            <Card.Body>
                                <Card.Title>Built-in SEO Tools</Card.Title>
                                <Card.Text>
                                    All Weebly sites include powerful SEO tools to help you optimize your pages and get found by search engines like Google.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* --- Pricing Section --- */}
                <div id="pricing" className="py-5">
                    <h2 className="text-center mb-4">Choose Your Weebly Plan</h2>
                     {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} groupSlug="weebly"/>
                    )}
                </div>

                {/* --- FAQ Section --- */}
                <div className="faq-section my-5">
                    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Will my site be mobile friendly?</Accordion.Header>
                            <Accordion.Body>
                                Yes, all websites created with the Weebly site builder are fully responsive and optimized for mobile devices, ensuring a great experience on any screen.
                            </Accordion.Body>
                        </Accordion.Item>
                         <Accordion.Item eventKey="1">
                            <Accordion.Header>Can I sell products through my site?</Accordion.Header>
                            <Accordion.Body>
                                Yes, e-commerce functionality is included with all plans. The number of products you can offer varies by plan, with unlimited products available on the Business plan.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I add a blog to my website?</Accordion.Header>
                            <Accordion.Body>
                                Absolutely. The Weebly builder allows you to include a beautiful, feature-rich blog with just a few clicks.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Can I upgrade my plan later?</Accordion.Header>
                            <Accordion.Body>
                                Yes, you can upgrade your Weebly plan at any time. Simply log in to your account and choose the upgrade option that best suits your growing needs.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </Container>
        </>
    );
};

export default Weebly;