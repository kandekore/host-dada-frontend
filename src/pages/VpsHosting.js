// src/pages/VpsHosting.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './VpsHosting.css';

const VpsHosting = () => {
    const pageTitle = "VPS Hosting | Super-Fast SSD Virtual Private Servers | Host Dada";
    const pageDescription = "Experience the power and flexibility of our high-performance SSD VPS hosting. Get root access, unlimited bandwidth, and instant setup.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Intro Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h1>High-Performance SSD VPS Hosting</h1>
                            <p className="lead">Lightning-fast, reliable, and flexible VPS hosting for your next project. Full root access, 100% SSD storage, and unlimited bandwidth.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Power and Flexibility for Your Applications</h2>
                            <p>Our Virtual Private Servers (VPS) offer the perfect balance of performance, control, and affordability. With full root access, you can install custom software and configure your server to your exact needs. Our VPS are built on enterprise-grade hardware with 100% SSD storage, ensuring the best possible performance for your websites and applications.</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <img src="https://i.imgur.com/3Z3L1Yh.png" alt="VPS Hosting" className="img-fluid rounded" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Features Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Industry-Leading Features</h2>
                        <p className="lead text-muted">Everything you need to power your projects, big or small.</p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Full Root Access</Card.Title>
                                    <Card.Text>Complete control over your server environment. Install and configure any software you need.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>100% SSD Storage</Card.Title>
                                    <Card.Text>Experience blazing-fast performance with our enterprise-grade Samsung SSDs.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Unlimited Bandwidth</Card.Title>
                                    <Card.Text>No caps, no throttling. Ever. Your traffic is genuinely unlimited.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Instant Provisioning</Card.Title>
                                    <Card.Text>Your Linux VPS will be up and running in less than a minute.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>99.99% Uptime Guarantee</Card.Title>
                                    <Card.Text>Our robust infrastructure ensures your server is always online when you need it.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>1 Tbps+ DDoS Protection</Card.Title>
                                    <Card.Text>Advanced, real-time protection against DDoS attacks at no extra cost.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Pricing Section --- */}
            <Container fluid className="section-container py-5 bg-white" id="pricing">
                <Container>
                    <h2 className="text-center mb-4">Choose Your VPS Hosting Plan</h2>
                    <div className="text-center">
                        <h3>Coming Soon!</h3>
                        <p>Our VPS hosting plans will be available shortly. Stay tuned for our competitive pricing and powerful features.</p>
                    </div>
                </Container>
            </Container>

            {/* --- Use Cases Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>A VPS for Every Occasion</h2>
                        <p className="lead text-muted">Our VPS are perfect for a wide range of applications.</p>
                    </div>
                     <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-server"></i></div>
                                    <Card.Title as="h5">Web Hosting</Card.Title>
                                    <Card.Text className="text-muted">
                                       Give your website the dedicated resources it needs to handle high traffic and demanding applications.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-code"></i></div>
                                    <Card.Title as="h5">Development Server</Card.Title>
                                    <Card.Text className="text-muted">
                                        An isolated environment to test your code and experiment with new technologies.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-gamepad"></i></div>
                                    <Card.Title as="h5">Gaming Server</Card.Title>
                                    <Card.Text className="text-muted">
                                        Host your own private gaming server for Minecraft, CS:GO, and more.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default VpsHosting;