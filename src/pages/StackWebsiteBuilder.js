import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './StackWebsiteBuilder.css';
import { API_BASE } from '../config';

const StackWebsiteBuilder = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 50 }), // Stack Website Builder Product Group ID
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
    }, []); // This is the closing of the useEffect hook. It is syntactically correct.

    const pageTitle = "Stack Website Builder | Host Dada";
    const pageDescription = "Build a contemporary, responsive website quickly and easily with the Stack Website Builder. No coding required, packed with features, and 100% free with your hosting.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="stack-hero-section text-white text-center">
                <Container>
                    <h1>Build Your Website, Your Way. No Code Required.</h1>
                    <p className="lead">
                        Launch a stunning, professional website in minutes with our intuitive drag-and-drop Stack Website Builder.
                    </p>
                    <Button href="#pricing" variant="light" size="lg">Get Started for Free</Button>
                </Container>
            </div>

            <Container className="my-5">
                {/* --- Intro / Why Offer Section --- */}
                <Row className="mb-5 align-items-center">
                     <Col lg={7} className="mb-4 mb-lg-0">
                        <h2>The Perfect DIY Solution for Any Project</h2>
                        <p className="text-muted">
                            Whether you're a small business on a budget, a hobbyist sharing your passion, or just need a professional online presence without the complexity, our Stack Website Builder is for you. It’s included for free with your hosting, offering incredible value.
                        </p>
                        <p className="text-muted">
                            It empowers you to create and manage your own site, freeing you up to focus on what you do best. Plus, with support for custom HTML, CSS, and JavaScript, it’s flexible enough for any level of expertise.
                        </p>
                    </Col>
                    <Col lg={5}>
                        <div className="placeholder-image-stack">
                           <p>Image: A collage of diverse websites built with the builder</p>
                        </div>
                    </Col>
                </Row>

                {/* --- Key Features Section --- */}
                <div className="features-section py-5">
                    <h2 className="text-center mb-5">Everything You Need is Built-In</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 text-center feature-card-stack">
                                <Card.Body>
                                    <h5>Intuitive Drag & Drop</h5>
                                    <p>Build visually. Add, arrange, and customize content blocks, galleries, forms, and more without touching a line of code.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 text-center feature-card-stack">
                                <Card.Body>
                                    <h5>Stunning Templates</h5>
                                    <p>Start with a professional, fully responsive template. With hundreds of fonts and color themes, you can create a unique look.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                             <Card className="h-100 text-center feature-card-stack">
                                <Card.Body>
                                    <h5>Powerful E-commerce</h5>
                                    <p>Launch an online store with a shopping cart, inventory management, and everything you need to start selling.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                 {/* --- Pricing Section --- */}
                <div id="pricing" className="py-5">
                    <h2 className="text-center mb-4">Plans & Pricing</h2>
                    <p className="text-center text-muted mb-4">The Stack Website Builder is included free with your hosting. Choose a plan to get started.</p>
                     {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} groupSlug="website-builder"/>
                    )}
                </div>

                {/* --- All Features List --- */}
                <div className="all-features-section my-5">
                    <h3 className="text-center mb-4">A Comprehensive Feature Set</h3>
                     <Row>
                        <Col md={4}>
                            <ul className="list-unstyled feature-list">
                                <li>✓ SEO Friendly Tools</li>
                                <li>✓ Mobile Responsive Design</li>
                                <li>✓ Pre-defined Content Blocks</li>
                                <li>✓ Online Image Editor</li>
                                <li>✓ 500,000+ Free Photos</li>
                            </ul>
                        </Col>
                        <Col md={4}>
                             <ul className="list-unstyled feature-list">
                                <li>✓ Full E-commerce Suite</li>
                                <li>✓ Blog & Photo Galleries</li>
                                <li>✓ Contact Form Maker</li>
                                <li>✓ Events Calendar</li>
                                <li>✓ Social Media Integration</li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul className="list-unstyled feature-list">
                                <li>✓ Google Analytics & Maps</li>
                                <li>✓ TawkTo Live Chat</li>
                                <li>✓ Custom HTML/JS/CSS Support</li>
                                <li>✓ Built-in Site Search</li>
                                <li>✓ And so much more...</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}; // This is the closing of the StackWebsiteBuilder component function

export default StackWebsiteBuilder;