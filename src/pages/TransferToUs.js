// src/pages/TransferToUs.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TransferToUs = () => {
    const pageTitle = "Effortless Website Migration | Host Dada";
    const pageDescription = "Ready to switch to Host Dada? Our expert team will migrate your entire website, files, and databases for you, completely free and with zero downtime.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <Container className="my-5">
                {/* --- Hero Section --- */}
                <Row className="text-center mb-5">
                    <Col>
                        <h1>Seamless & Stress-Free Website Migrations</h1>
                        <p className="lead text-muted">
                            Ready to upgrade your hosting? Our expert migration team will move your entire website to Host Dada for you, ensuring a smooth transition with zero downtime.
                        </p>
                    </Col>
                </Row>

                {/* --- How It Works Section --- */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Our White-Glove Migration Process</h2>
                        <p>We've made switching to Host Dada as simple as possible. Just three easy steps.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 text-center">
                            <Card.Body>
                                <div className="p-3 mb-2 bg-primary text-white d-inline-block rounded-circle h1">1</div>
                                <Card.Title as="h4" className="mt-3">Choose Your Hosting</Card.Title>
                                <Card.Text>
                                    Your journey begins by selecting the perfect new home for your website. Browse our powerful hosting solutions to find the right fit for your needs and budget.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 text-center">
                            <Card.Body>
                                <div className="p-3 mb-2 bg-primary text-white d-inline-block rounded-circle h1">2</div>
                                <Card.Title as="h4" className="mt-3">Contact Our Experts</Card.Title>
                                <Card.Text>
                                    Once you've placed your order, simply get in touch with our friendly UK-based support team. Provide us with your previous hosting login details, and we'll handle the rest.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 text-center">
                            <Card.Body>
                                <div className="p-3 mb-2 bg-primary text-white d-inline-block rounded-circle h1">3</div>
                                <Card.Title as="h4" className="mt-3">Relax, We've Got This</Card.Title>
                                <Card.Text>
                                    Our migration specialists will securely transfer all your website files, databases, and settings. We perform thorough tests to ensure everything works perfectly before you go live.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* --- Call to Action Section --- */}
                <Row className="mt-5">
                    <Col className="text-center">
                        <h2>Ready to Make the Move?</h2>
                        <p className="lead">
                            The first step is to choose your new hosting package. Our team is ready and waiting to assist you with a seamless migration as soon as you are.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <Button as={Link} to="/hosting/linux-hosting" variant="primary" size="lg" className="mb-2 mb-md-0">View Linux Plans</Button>
                            <Button as={Link} to="/hosting/wordpress-hosting" variant="outline-primary" size="lg" className="mb-2 mb-md-0">View WordPress Plans</Button>
                            <Button as={Link} to="/hosting/litespeed-hosting" variant="outline-primary" size="lg">View LiteSpeed Plans</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TransferToUs;