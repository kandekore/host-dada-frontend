// src/pages/CloudAppHosting.js
import React from 'react';
import { Container, Row, Col, Card, Button, Accordion, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './CloudAppHosting.css';

const CloudAppHosting = () => {
    const pageTitle = "Cloud App Hosting for MERN | Host Dada";
    const pageDescription = "Deploy production-ready MERN stack applications in minutes with our Heroku-style PaaS. Git-push to deploy, enjoy free SSL, and scale effortlessly.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero & Intro Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h1>Cloud App Hosting for Modern Developers</h1>
                            <p className="lead">A Heroku-style Platform as a Service (PaaS) for your MERN stack applications. Focus on your code, not on the server.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Deploy in Minutes, Not Days</h2>
                            <p>Spin up production-ready MongoDB, Express, React, and Node.js applications with a simple Git push. Our platform abstracts away the DevOps headaches, providing a seamless workflow from your local machine to a live, secure server. Set your environment variables, attach a custom domain, and get free, automated SSL. It's the developer experience you love, without the unpredictable pricing.</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <i className="fas fa-cubes" style={{ fontSize: '10rem', color: '#00729B' }}></i>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Why Choose Us Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>The Developer-First Platform</h2>
                        <p className="lead text-muted">We provide the tools you need to build, deploy, and scale with confidence.</p>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 text-center feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fab fa-git-alt"></i></div>
                                    <Card.Title as="h5">Heroku-like Workflow</Card.Title>
                                    <Card.Text>Use the `git push` command you know and love to deploy. Our platform supports Node buildpacks and custom Dockerfiles for ultimate flexibility.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 text-center feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-bolt"></i></div>
                                    <Card.Title as="h5">Fast & Isolated</Card.Title>
                                    <Card.Text>Your app runs in its own secure container on high-speed NVMe SSDs. Enforceable CPU/RAM limits prevent noisy neighbours, and zero-downtime releases keep your service online during updates.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 text-center feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-box-open"></i></div>
                                    <Card.Title as="h5">Batteries Included</Card.Title>
                                    <Card.Text>Get free, auto-renewing Let’s Encrypt SSL, easy custom domain mapping, persistent storage volumes, log streaming, and optional nightly backups to S3.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Plans Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <h2 className="text-center mb-5">Simple, Predictable Pricing</h2>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 plan-card">
                                <Card.Header as="h5">Starter</Card.Header>
                                <Card.Body>
                                    <Card.Title>For Small Projects & MVPs</Card.Title>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-success me-2"></i>1 Shared vCPU</li>
                                        <li><i className="fas fa-check text-success me-2"></i>512 MB RAM</li>
                                        <li><i className="fas fa-check text-success me-2"></i>5 GB NVMe Storage</li>
                                        <li><i className="fas fa-check text-success me-2"></i>1 Container / 1 Domain</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer><Button variant="primary" className="w-100" disabled>Coming Soon</Button></Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 plan-card">
                                <Card.Header as="h5">Growth</Card.Header>
                                <Card.Body>
                                    <Card.Title>For Production MERN Apps</Card.Title>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-success me-2"></i>1-2 Shared vCPU</li>
                                        <li><i className="fas fa-check text-success me-2"></i>1-2 GB RAM</li>
                                        <li><i className="fas fa-check text-success me-2"></i>20 GB NVMe Storage</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Scale to 2 Containers</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Optional Daily Backups</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer><Button variant="primary" className="w-100" disabled>Coming Soon</Button></Card.Footer>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 plan-card">
                                <Card.Header as="h5">Business</Card.Header>
                                <Card.Body>
                                    <Card.Title>For Heavier Workloads</Card.Title>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-success me-2"></i>2-4+ vCPU</li>
                                        <li><i className="fas fa-check text-success me-2"></i>4 GB+ RAM</li>
                                        <li><i className="fas fa-check text-success me-2"></i>40 GB+ NVMe Storage</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Multi-Container Scaling</li>
                                        <li><i className="fas fa-check text-success me-2"></i>Uptime Monitoring & Alerts</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer><Button variant="primary" className="w-100" disabled>Coming Soon</Button></Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Core Features Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>A Feature-Complete Platform</h2>
                        <p className="lead text-muted">Everything you need to run a professional, production-grade application.</p>
                    </div>
                    <Row>
                        <Col md={6} lg={4} className="mb-4"><h5><i className="fas fa-cogs text-primary me-2"></i>Zero-Downtime Releases</h5><p className="text-muted">Deploy updates seamlessly without interrupting your users. Roll back to a previous release with a single command if needed.</p></Col>
                        <Col md={6} lg={4} className="mb-4"><h5><i className="fas fa-lock text-primary me-2"></i>Free Automated SSL</h5><p className="text-muted">Every custom domain you attach gets a free Let's Encrypt SSL certificate that is automatically provisioned and renewed for you.</p></Col>
                        <Col md={6} lg={4} className="mb-4"><h5><i className="fas fa-sitemap text-primary me-2"></i>Horizontal Scaling</h5><p className="text-muted">Easily scale your application by increasing the number of running containers to handle more traffic and background jobs.</p></Col>
                        <Col md={6} lg={4} className="mb-4"><h5><i className="fas fa-file-alt text-primary me-2"></i>Live Log Streaming</h5><p className="text-muted">Tail your application logs in real-time directly from the command line to debug issues and monitor activity as it happens.</p></Col>
                        <Col md={6} lg={4} className="mb-4"><h5><i className="fas fa-database text-primary me-2"></i>Persistent Storage</h5><p className="text-muted">Mount persistent storage volumes to your containers for handling user uploads, caching, or any other data that needs to survive a deploy.</p></Col>
                        <Col md={6} lg={4} className="mb-4"><h5><i className="fas fa-plug text-primary me-2"></i>Extensible with Add-ons</h5><p className="text-muted">Easily attach other services to your application, such as Redis for caching, Postgres for an alternative database, or Cron for scheduled tasks.</p></Col>
                    </Row>
                </Container>
            </Container>

            {/* --- FAQ Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <h2 className="text-center mb-4">Your App Hosting Questions</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I run multiple apps on one account?</Accordion.Header>
                            <Accordion.Body>
                                Yes. Each application runs in its own fully isolated container with its own environment variables, domains, SSL certificates, and resource limits. You can run as many separate applications as your plan allows.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do I connect my custom domain?</Accordion.Header>
                            <Accordion.Body>
                                It's a simple, three-step process. First, point your domain's DNS records to our servers. Second, attach the domain to your app via our control panel or CLI. Third, enable SSL with a single command. The entire process takes just a few minutes.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What are my database options?</Accordion.Header>
                            <Accordion.Body>
                                We offer two flexible options for MongoDB. For simplicity, you can use our platform-managed database, which is easy to link and provides good performance. For larger, production applications, we highly recommend using a dedicated service like MongoDB Atlas. You can securely connect your Atlas cluster by simply setting the connection URI as an environment variable.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How are backups handled?</Accordion.Header>
                            <Accordion.Body>
                                For our platform-managed MongoDB instances, you can opt-in to nightly database dumps that are securely exported to a cloud storage bucket of your choice (like AWS S3). If you are using MongoDB Atlas, you will benefit from their robust, built-in continuous backup and point-in-time recovery features.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>
        </>
    );
};

export default CloudAppHosting;