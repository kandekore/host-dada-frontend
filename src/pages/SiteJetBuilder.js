import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // CORRECTED: Added Link to imports
import './SiteJetBuilder.css';

const SiteJetBuilder = () => {
    // NOTE: PricingTable is commented out as no gid was provided.
    // To enable it, you would add the state and useEffect hook like in other pages,
    // for example: const [products, setProducts] = useState([]); etc.
    // And then replace the placeholder div with the PricingTable component.

    const pageTitle = "Sitejet Website Builder | Host Dada";
    const pageDescription = "Build stunning, professional websites in minutes with the AI-powered Sitejet Website Builder. No coding required, fully responsive, and packed with features.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="sitejet-hero-section text-white text-center">
                <Container>
                    <h1>Create Beautifully Designed Websites Fast with AI</h1>
                    <p className="lead">
                        Launch a polished, professional website in minutes. Sitejet's AI handles the layout, content, and structure—no coding or design experience needed.
                    </p>
                    <Button href="#pricing" variant="light" size="lg">View Plans</Button>
                </Container>
            </div>

            <Container className="my-5">
                {/* --- AI Generator Section --- */}
                <Row className="mb-5 pb-5 align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="placeholder-image-sitejet">
                           <p>Image: AI Website Generator Interface</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h4>The Power of AI</h4>
                        <h2>Turn Your Ideas into a Website Instantly</h2>
                        <p className="text-muted">
                            Say goodbye to writer's block and design paralysis. Just provide a few details about your project, and our AI Website Generator will build a fully tailored, mobile-ready site complete with SEO-ready text and professional imagery. Launch immediately or customize every detail to perfection.
                        </p>
                    </Col>
                </Row>

                {/* --- Core Features Section --- */}
                <Row className="text-center">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-sitejet">
                            <Card.Body>
                                <div className="sitejet-icon">🎨</div>
                                <Card.Title>170+ Professional Templates</Card.Title>
                                <Card.Text>
                                    Start with a stunning, fully customizable template. With over 120 pre-designed sections, building a unique site is effortless.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-sitejet">
                            <Card.Body>
                                <div className="sitejet-icon">✏️</div>
                                <Card.Title>Intuitive On-Page Editor</Card.Title>
                                <Card.Text>
                                    Our user-friendly drag-and-drop editor gives you full control. Edit text, swap images, and adjust layouts in real-time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 feature-card-sitejet">
                            <Card.Body>
                                <div className="sitejet-icon">🚀</div>
                                <Card.Title>Built for Performance & SEO</Card.Title>
                                <Card.Text>
                                    Launch fast, responsive, and SEO-optimized websites that are ready to attract and engage visitors from day one.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* --- Pricing Section Placeholder --- */}
                <div id="pricing" className="py-5 text-center">
                    <h2 className="text-center mb-4">Choose Your Sitejet Plan</h2>
                    <p className="text-muted">Please contact us for pricing information on our Sitejet Builder plans.</p>
                    <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-3">Contact Sales</Button>
                    {/* WHEN READY, REPLACE THE ABOVE WITH THIS:
                        {loading ? (
                            <div className="text-center"><Spinner animation="border" /></div>
                        ) : error ? (
                            <Alert variant="danger">{error}</Alert>
                        ) : (
                            <PricingTable products={products} groupSlug="sitejet-builder"/>
                        )}
                    */}
                </div>
            </Container>
        </>
    );
};

export default SiteJetBuilder;