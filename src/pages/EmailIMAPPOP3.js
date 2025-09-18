import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './EmailIMAPPOP3.css'; // New CSS file for styling

const EmailIMAPPOP3 = () => {
    const pageTitle = "Business Email Hosting | Host Dada";
    const pageDescription = "Secure, reliable, and professional email hosting with IMAP/POP3 support. Get scalable storage, advanced security, and seamless migration with Host Dada.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="email-hero-section text-white text-center">
                <Container>
                    <h1>Professional Email Hosting</h1>
                    <p className="lead">
                        Secure and reliable email perfect for your business, with the flexibility to grow with you.
                    </p>
                </Container>
            </div>

            <Container className="my-5">
                {/* --- Introduction Section --- */}
                <Row className="mb-5 align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <h2>Business-Class Email That Works for You</h2>
                        <p className="text-muted">
                            Move beyond free email providers and give your business the professional image it deserves. Our email hosting is built on a robust, secure, and completely independent platform, ensuring your communication is always fast, reliable, and protected.
                        </p>
                        <p className="text-muted">
                            We offer seamless, unlimited migrations for your existing emails, so switching is entirely stress-free.
                        </p>
                    </Col>
                    <Col md={6}>
                        {/* Placeholder for a relevant image */}
                        <div className="placeholder-image">
                           <p>Image Placeholder: Illustration of secure email servers or devices</p>
                        </div>
                    </Col>
                </Row>

                {/* --- Core Features Section --- */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Powerful Features, Effortlessly Managed</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-email">
                            <Card.Body>
                                <Card.Title>Generous, Scalable Storage</Card.Title>
                                <Card.Text>
                                    Start with ample storage and scale up whenever you need to. From 10GB to 100GB and beyond, your mailbox grows with your business.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-email">
                            <Card.Body>
                                <Card.Title>Guaranteed Email Delivery</Card.Title>
                                <Card.Text>
                                    With advanced SPF and DKIM authentication, we protect your domain's reputation, ensuring your messages land in the inbox, not the spam folder.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-email">
                            <Card.Body>
                                <Card.Title>Uninterrupted Service</Card.Title>
                                <Card.Text>
                                    Our email is hosted on fully redundant servers, separate from website hosting. High website traffic will never slow down your email.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* --- Security Section --- */}
                 <div className="security-section my-5">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <h3>Multi-Layered Security, Built-In</h3>
                                <p>Our system automatically scans all emails for viruses and spam at the network level, long before they reach your device. Using sophisticated filters and global deny-lists, we provide robust protection while giving you full control with configurable allow-lists.</p>
                                <p><strong>We also maintain a clean network by prohibiting mass marketing emails, protecting your reputation.</strong></p>
                            </Col>
                            <Col md={6}>
                               {/* Placeholder for a relevant image */}
                                <div className="placeholder-image">
                                   <p>Image Placeholder: Security shield or lock icon graphic</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                {/* --- Webmail & Connectivity Section --- */}
                <Row className="align-items-center my-5">
                     <Col md={6} className="order-md-2">
                        <h3>Stay Connected, Anywhere</h3>
                         <p>Access your email from any device, anywhere in the world. Use our fast, browser-based Roundcube webmail, or connect your favourite desktop and mobile apps like Outlook, Apple Mail, or Thunderbird with IMAP/POP3 support.</p>
                         <p>Manage forwards, auto-responders, and signatures with ease.</p>
                    </Col>
                    <Col md={6} className="order-md-1">
                        {/* Placeholder for an image */}
                        <div className="placeholder-image text-center">
                            <p><strong>[Screenshot of Roundcube Webmail Interface]</strong></p>
                        </div>
                    </Col>
                </Row>
                
                {/* --- Premium Email Upgrade Section --- */}
                <Row className="premium-section my-5">
                    <Col className="text-center">
                        <h2>Upgrade to Premium Email</h2>
                        <p className="lead">
                            For the ultimate email experience, upgrade to Premium Email for a massive <strong>50GB</strong> mailbox and full Contact/Calendar Sync (CalDAV/CardDAV) with your favourite clients.
                        </p>
                        <Button as={Link} to="/contact" variant="success" size="lg">Contact Us to Upgrade</Button>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default EmailIMAPPOP3;