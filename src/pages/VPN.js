import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './VPN.css'; // New CSS for this page
import { API_BASE } from '../config';

const VPN = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 49 }), // NordVPN Product Group ID
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

    const pageTitle = "NordVPN | Secure High-Speed VPN | Host Dada";
    const pageDescription = "Get unlimited access to an internet free of privacy concerns and content restrictions. Secure your connection, hide your IP, and block malware with NordVPN.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Hero Section --- */}
            <div className="vpn-hero-section text-white text-center">
                <Container>
                    <h1>Cybersecurity, Built for Everyday</h1>
                    <p className="lead">
                        Secure your connection, hide your IP, and block malware, trackers, and ads with the world's leading VPN service.
                    </p>
                    <Button href="#pricing" variant="light" size="lg">Get NordVPN Now</Button>
                </Container>
            </div>

            <Container className="my-5">
                {/* --- Why Choose NordVPN Section --- */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2>Why Choose NordVPN?</h2>
                        <p className="lead text-muted">With NordVPN, you can browse, stream, and download with a secure and private connection.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6} className="mb-4">
                        <Card className="h-100 text-center feature-card-vpn">
                            <Card.Body>
                                <Card.Title>Ultimate Security</Card.Title>
                                <Card.Text>Safeguard your connection with next-generation encryption. Bank, shop, and browse safely, even on unprotected public Wi-Fi.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                         <Card className="h-100 text-center feature-card-vpn">
                            <Card.Body>
                                <Card.Title>Strict No-Logs Policy</Card.Title>
                                <Card.Text>Your online activity is your business. NordVPN does not track, collect, or share your private data, a policy verified by multiple independent audits.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                         <Card className="h-100 text-center feature-card-vpn">
                            <Card.Body>
                                <Card.Title>Blazing Fast Speeds</Card.Title>
                                <Card.Text>Enjoy your full-speed internet connection without throttling, powered by a global network of over 5500 servers.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                        <Card className="h-100 text-center feature-card-vpn">
                            <Card.Body>
                                <Card.Title>Works on All Devices</Card.Title>
                                <Card.Text>Protect up to 6 devices with a single account. NordVPN is compatible with Windows, macOS, Linux, Android, and iOS.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* --- Threat Protection Section --- */}
                <div className="threat-protection-section my-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                             <div className="placeholder-image-vpn">
                                <p>Image: Threat Protection Shield Graphic</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h4>More Than Just a VPN</h4>
                            <h2>Threat Protection</h2>
                            <p className="text-muted">NordVPN's Threat Protection feature is a game-changer, offering comprehensive security with a single click. It actively works to:</p>
                            <ul className="list-unstyled included-list-vpn">
                                <li>✓ Block intrusive ads and web trackers.</li>
                                <li>✓ Scan URLs and block malicious websites.</li>
                                <li>✓ Inspect downloaded files for malware and delete them if infected.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                {/* --- Pricing Section --- */}
                <div id="pricing" className="py-5">
                    <h2 className="text-center mb-4">Choose Your Plan</h2>
                     {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} groupSlug="nordvpn"/>
                    )}
                </div>

            </Container>
        </>
    );
};

export default VPN;