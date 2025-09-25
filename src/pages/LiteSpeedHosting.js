// src/pages/LiteSpeedHosting.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable'; // Ensure this component is imported
import './LiteSpeedHosting.css';
import { API_BASE } from '../config';
import litepseedws from '../assets/images/litespeed.png';
import ms365logo from '../assets/images/ms365.png';
import aws from '../assets/images/aws.svg';

const LiteSpeedHosting = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_BASE}/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 39 }), // WHMCS Product Group ID for LiteSpeed
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch products.');
                }
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const pageTitle = "Premium LiteSpeed Hosting | Host Dada";
    const pageDescription = "Experience elite performance with our Premium LiteSpeed Hosting on a low-tenancy, high-power VPS, coupled with enterprise-grade Microsoft 365 email.";

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
                            <h1>Premium LiteSpeed Hosting</h1>
                            <p className="lead">An exclusive, high-performance hosting environment for websites that demand uncompromising speed and reliability.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>A New Class of Performance</h2>
                            <p>Welcome to an elevated hosting experience. Our Premium LiteSpeed Hosting is not traditional shared hosting; it's a curated, low-tenancy environment on a powerful, dedicated Virtual Private Server (VPS). We host only a handful of sites on this server, guaranteeing that your website has access to the vast resources it needs to perform at its absolute peak.</p>
                            <p>This exclusive service is engineered for speed-critical websites, e-commerce stores, and businesses where every millisecond matters. By combining the raw power of an Intel Xeon Silver CPU with the unmatched efficiency of LiteSpeed Web Server, we deliver a hosting solution that is in a class of its own.</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <img src={litepseedws} alt="Autoscaling server diagram" className="img-fluid rounded lslogo" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- The LiteSpeed Advantage Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>The LiteSpeed Advantage</h2>
                        <p className="lead text-muted">Discover why LiteSpeed is the world's fastest web server and the core of our premium offering.</p>
                    </div>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-4">
                            <h4>Superior Architecture, Superior Speed</h4>
                            <p>Unlike older web servers like Apache that create a new process for every single visitor, LiteSpeed uses a modern, event-driven architecture. This allows it to handle thousands of concurrent connections with a fraction of the memory and CPU usage. For your website, this means consistently fast page loads, even during intense traffic spikes, and the ability to handle far more visitors without a drop in performance.</p>
                        </Col>
                        <Col md={6} className="mb-4">
                            <h4>Built-in Caching Engine</h4>
                            <p>LiteSpeed comes with its own advanced, server-level caching engine (LSCache). This is significantly more efficient than plugin-based caching solutions because it integrates directly with the web server. It can store static and dynamic versions of your pages, dramatically reducing server processing time and delivering content to your visitors at lightning speed. For WordPress users, the LSCache plugin provides an unmatched level of synergy and performance.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            
            {/* --- Pricing Section --- */}

            
           <div className="text-center">
                        <h3>Coming Soon!</h3>
                        <p className="ctr">Our VPS hosting plans will be available shortly. Stay tuned for our competitive pricing and powerful features.</p>
                    </div>

            {/* --- The Powerhouse Hardware Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>The Powerhouse Behind Your Website</h2>
                        <p className="lead text-muted">Exceptional software deserves enterprise-grade hardware. We've built this platform on a foundation of pure power.</p>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4 text-center">
                            <i className="fas fa-microchip fa-3x text-primary mb-3"></i>
                            <h5>Intel Xeon Silver CPU</h5>
                            <p>At the heart of our server is an Intel Xeon Silver 4214R processor. With 8 dedicated vCPUs, it provides immense processing power to handle complex database queries, dynamic content, and high traffic volumes with ease.</p>
                        </Col>
                        <Col md={4} className="mb-4 text-center">
                            <i className="fas fa-memory fa-3x text-primary mb-3"></i>
                            <h5>15 GiB Dedicated RAM</h5>
                            <p>With a massive 15 GiB of high-speed RAM, your website has the memory it needs for intensive tasks. This ensures smooth multitasking and rapid data access, eliminating bottlenecks that can slow down lesser servers.</p>
                        </Col>
                        <Col md={4} className="mb-4 text-center">
                            <i className="fas fa-hdd fa-3x text-primary mb-3"></i>
                            <h5>Blazing-Fast SSD Storage</h5>
                            <p>Your website's files and databases are stored on high-performance solid-state drives (SSDs). This results in near-instantaneous file access and database response times, contributing significantly to your site's overall speed.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Email & Security Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col md={6}>
                            <h3>The Microsoft 365 Email Advantage</h3>
                            <p>Standard webmail is a compromise. For our premium clients, we offer the gold standard: Microsoft 365. By separating your email from your web server, we ensure that neither service can impact the performance of the other. Your website remains fast, and your email remains reliable.</p>
                            <p>You benefit from an enterprise-grade email solution with a global reputation for security, reliability, and advanced features like calendaring, contacts, and seamless integration with the entire Microsoft Office suite. It's the professional communication tool your business deserves.</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <img src={ms365logo} alt="Autoscaling server diagram" className="img-fluid rounded lslogo" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h3>A Multi-Layered Security Fortress</h3>
                            <p className="text-muted">Your website is protected by a proactive, intelligent security stack that neutralizes threats before they can cause harm.</p>
                        </Col>
                    </Row>
                     <Row className="mt-4">
                        <Col md={6} className="mb-3">
                            <p><strong>Imunify360:</strong> This is your 24/7 automated security guard. It provides a sophisticated Web Application Firewall (WAF), real-time antivirus scanning, and proactive defense against the latest malware and brute-force attacks.</p>
                        </Col>
                         <Col md={6} className="mb-3">
                            <p><strong>CSF/LFD Firewall:</strong> This robust firewall provides a powerful, network-level barrier, blocking suspicious connections and preventing unauthorized access to your server, all managed through the industry-leading WHM/cPanel interface.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Backups & Reliability --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-4">Unwavering Reliability & Data Protection</h2>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center">
                            <img src={aws} alt="Autoscaling server diagram" className="img-fluid rounded lslogo2" />
                        </Col>
                        <Col md={6}>
                            <p>Your peace of mind is our priority. We perform comprehensive backups of your entire cPanel account every single day. These backups are then securely stored on the world-class Amazon Web Services (AWS) infrastructure, completely separate from the primary server. This provides a robust disaster recovery solution, ensuring that your valuable data is always safe, secure, and ready to be restored in a worst-case scenario.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* --- FAQ Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <h2 className="text-center mb-4">Your Premium Hosting Questions Answered</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What makes this Premium Hosting different from your other plans?</Accordion.Header>
                            <Accordion.Body>
                                Our Premium LiteSpeed Hosting is an entirely different class of service. Instead of a traditional shared environment, you are securing a seat on a powerful, low-tenancy Virtual Private Server (VPS). We strictly limit the number of websites on this server to guarantee that your site has consistent access to vast resources from the Intel Xeon CPU and 15 GiB of RAM. It's an exclusive environment designed for those who require uncompromising speed and reliability.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is LiteSpeed Web Server and why is it so much faster?</Accordion.Header>
                            <Accordion.Body>
                                LiteSpeed is a next-generation web server built for speed. Unlike older technologies like Apache which create a new process for every visitor (consuming more resources), LiteSpeed uses a modern, event-driven architecture. This allows it to handle thousands of simultaneous visitors with minimal memory and CPU usage. The result for your website is significantly faster page load times and the ability to handle intense traffic spikes without slowing down.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Is this hosting suitable for a demanding e-commerce store?</Accordion.Header>
                            <Accordion.Body>
                                Absolutely. This platform is tailor-made for e-commerce. The combination of the powerful Intel Xeon CPU, high-speed SSD storage for fast database queries, and LiteSpeed's efficient handling of concurrent connections means your store will be fast and responsive, even during peak shopping periods. Furthermore, the server is PCI Compliant, providing the secure environment necessary for handling online transactions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Why is email handled by Microsoft 365 instead of the server?</Accordion.Header>
                            <Accordion.Body>
                                We believe in using the best tool for the job. By separating your email onto Microsoft 365's world-class infrastructure, we ensure that your website's performance is never impacted by email activity, and vice-versa. This provides a "no-compromise" solution: your website gets the full power of the LiteSpeed server, and you get an enterprise-grade email solution renowned for its reliability, security, and advanced features, far surpassing standard webmail.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What specific security measures protect my website?</Accordion.Header>
                            <Accordion.Body>
                                Your site is protected by an intelligent, multi-layered security stack. The core is **Imunify360**, an automated security suite that provides a Web Application Firewall (WAF), real-time antivirus scanning, and proactive defense against malware and attacks. This is reinforced by the powerful **CSF/LFD network firewall**, which blocks suspicious connections at the server level. This combination provides a comprehensive defense against a wide range of digital threats.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How are my website backups handled for disaster recovery?</Accordion.Header>
                            <Accordion.Body>
                                We provide a robust and reliable backup solution. A full backup of your entire cPanel account is taken automatically every single day. For maximum data protection, these backups are then securely transferred and stored on the world-class Amazon Web Services (AWS) S3 infrastructure, completely independent of the hosting server. This ensures that in the unlikely event of a server issue, we have a safe and recent copy of your data ready for restoration.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>What does the "low-tenancy" environment mean for my site?</Accordion.Header>
                            <Accordion.Body>
                                "Low-tenancy" means we intentionally host only a handful of websites on this powerful VPS. In a typical shared hosting environment, hundreds or even thousands of sites compete for the same server resources. Here, your site shares a massive pool of resources with very few others, guaranteeing consistently high performance and ensuring that your website's speed is never affected by "noisy neighbours."
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Can I host a WordPress site on this platform?</Accordion.Header>
                            <Accordion.Body>
                                Yes, this platform is an exceptional choice for WordPress. LiteSpeed Web Server has a companion plugin, LSCache for WordPress, which is widely regarded as one of the fastest caching solutions available. The combination of our powerful hardware, the LiteSpeed server, and the LSCache plugin will make your WordPress or WooCommerce site perform at an elite level.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>Do I still get a cPanel control panel?</Accordion.Header>
                            <Accordion.Body>
                                Yes. Despite the advanced server architecture, you will have access to the familiar and industry-leading cPanel/WHM control panel. This allows you to manage your website's files, databases, cron jobs, and other settings with the same ease and intuitive interface you're used to, all while benefiting from the superior performance of the underlying hardware and software.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Who is this premium hosting package designed for?</Accordion.Header>
                            <Accordion.Body>
                                This package is designed for serious website owners where speed and reliability are critical. This includes high-traffic blogs, publishers, ambitious e-commerce stores, and businesses whose online presence is a direct reflection of their brand. If every second of loading time matters to your bottom line and user experience, this platform is built for you.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>
        </>
    );
};

export default LiteSpeedHosting;