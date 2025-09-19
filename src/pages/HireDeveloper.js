import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './HireDeveloper.css'; // New CSS for this page

const HireDeveloper = () => {
    const pageTitle = "Hire a Developer | Custom Web Design & Development | Host Dada";
    const pageDescription = "Bring your vision to life with Host Dada's expert development team. We offer custom website design, WordPress development, full-stack solutions, and digital marketing services.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="hire-hero-section text-white text-center">
                <Container>
                    <h1>Custom Website Design & Development</h1>
                    <p className="lead">
                        Everything you need to launch. Host Dada provides access to a dedicated team of experienced developers ready to build your perfect website.
                    </p>
                    <Button as={Link} to="/contact" variant="light" size="lg">Get a Free Quote</Button>
                </Container>
            </div>

            <Container className="my-5">

                {/* --- Services Section --- */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Relax, You're in Capable Hands</h2>
                        <p className="lead text-muted">Our end-to-end service covers everything from concept to completion and beyond.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className="mb-4">
                        <Card className="h-100 service-card">
                            <Card.Body>
                                <div className="service-icon">💻</div>
                                <Card.Title as="h4">Proven WordPress Experts</Card.Title>
                                <Card.Text>
                                    With over 15 years of experience, our team specializes in creating dynamic, robust WordPress websites, complete with custom plugins and unique functionalities tailored to your needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="mb-4">
                        <Card className="h-100 service-card">
                            <Card.Body>
                                <div className="service-icon">🚀</div>
                                <Card.Title as="h4">Full-Stack Proficiency</Card.Title>
                                <Card.Text>
                                    Our comprehensive knowledge spans multiple languages like React, JavaScript & PHP. From front-end aesthetics to complex back-end logic, we build and seamlessly integrate your ideas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="mb-4">
                        <Card className="h-100 service-card">
                            <Card.Body>
                                <div className="service-icon">📈</div>
                                <Card.Title as="h4">Digital Marketing Veterans</Card.Title>
                                <Card.Text>
                                    Beyond development, we are certified Google Partners. We ensure your website is not only well-crafted but also highly visible and optimized for search engines to drive traffic.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* --- Process Section --- */}
                <div className="process-section my-5">
                    <h2 className="text-center mb-5">The Process is Easy!</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 process-card">
                                <Card.Body>
                                    <div className="process-number">1</div>
                                    <Card.Title>Consult & Plan</Card.Title>
                                    <Card.Text>
                                        We begin with an in-depth consultation to understand your vision, target audience, and business goals, creating a strategic plan tailored for you.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 process-card">
                                <Card.Body>
                                    <div className="process-number">2</div>
                                    <Card.Title>Design & Develop</Card.Title>
                                    <Card.Text>
                                        Our team designs a visually appealing, responsive layout. After approval, we develop all custom functionalities using best coding practices.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                             <Card className="h-100 process-card">
                                <Card.Body>
                                    <div className="process-number">3</div>
                                    <Card.Title>Test, Launch & Support</Card.Title>
                                    <Card.Text>
                                        Your site undergoes rigorous testing before going live. After launch, we provide 12 months of support, ensuring your site remains secure and performing at its peak.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* --- What's Included Section --- */}
                <div className="included-section my-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                             {/* Placeholder for an image of a finished website */}
                             <div className="placeholder-image-dev">
                                <p>Image Placeholder</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h4>A Complete Website Solution</h4>
                            <h2>Our Comprehensive Web Design Package</h2>
                            <p className="text-muted">Every website package includes the following as standard, giving you everything you need for a successful launch.</p>
                            <ul className="list-unstyled included-list">
                                <li>✓ 12 Months Unlimited Website & Email Hosting</li>
                                <li>✓ Free Domain Name Registration</li>
                                <li>✓ Included SSL Certificate</li>
                                <li>✓ Fully Responsive, Mobile-Friendly Design</li>
                                <li>✓ Website Page Speed Optimization</li>
                                <li>✓ 12 Months of Technical Support</li>
                                <li>✓ Microsoft 365 Integration†</li>
                            </ul>
                             <small className="text-muted d-block mt-3">*SSL not available if domain uses third-party nameservers.</small>
                             <small className="text-muted d-block">†Requires a Microsoft 365 license.</small>
                        </Col>
                    </Row>
                </div>

                {/* --- FAQ Section --- */}
                <div className="faq-section my-5">
                    <h2 className="text-center mb-4">Your Questions Answered</h2>
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How long does it take to build a website?</Accordion.Header>
                            <Accordion.Body>
                                The timeline can vary based on the project’s complexity but typically ranges from 4 to 12 weeks from initial consultation to launch.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Can you redesign our existing website?</Accordion.Header>
                            <Accordion.Body>
                                Absolutely! Our team can revamp your existing site, improving its design, functionality, and overall performance to meet the latest standards.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Will we be able to update the site ourselves?</Accordion.Header>
                             <Accordion.Body>
                                Yes, we ensure that you can manage and update your website easily. We also provide training on how to use the WordPress platform and any custom features.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Where will our website be hosted?</Accordion.Header>
                            <Accordion.Body>
                               Your website will be hosted right here at Host Dada. Every development package includes 12 months of our premium, secure hosting, ensuring your site operates smoothly and efficiently.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </Container>
        </>
    );
};

export default HireDeveloper;