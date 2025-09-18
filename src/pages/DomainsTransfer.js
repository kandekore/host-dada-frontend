import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './DomainsTransfer.css'; 

const DomainsTransfer = () => {
    const pageTitle = "Transfer Your Domain | Host Dada";
    const pageDescription = "Transfer your domain to Host Dada easily. Enjoy competitive pricing, reliable DNS management, and expert UK support. Start your transfer today.";

    const [domainName, setDomainName] = useState('');
    const [error, setError] = useState('');

    const handleTransfer = (e) => {
        e.preventDefault();
        if (!domainName.trim()) {
            setError('Please enter the domain name you wish to transfer.');
            return;
        }
        setError('');

        // The base URL for your WHMCS installation
        const whmcsBaseUrl = 'https://my.hostdada.co.uk'; 

        // Construct the WHMCS cart URL for a domain transfer, without the EPP code
        const transferUrl = `${whmcsBaseUrl}/cart.php?a=add&domain=transfer&query=${encodeURIComponent(domainName)}`;

        // Redirect the user to WHMCS
        window.location.href = transferUrl;
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <Container className="my-5">
                {/* --- Hero Section --- */}
                <Row className="text-center mb-5">
                    <Col lg={8} className="mx-auto">
                        <h1>Transfer Your Domain to Host Dada</h1>
                        <p className="lead text-muted">
                            Consolidate your domains with an easy and secure transfer process. Enjoy competitive renewal rates and manage all your services in one place.
                        </p>
                    </Col>
                </Row>

                {/* --- Transfer Form Section --- */}
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="transfer-card shadow-sm">
                            <Card.Body>
                                <Card.Title as="h3" className="text-center mb-4">Start Your Transfer</Card.Title>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleTransfer}>
                                    <Form.Group className="mb-3" controlId="domainName">
                                        <Form.Label>Domain Name to Transfer</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g., mydomain.com"
                                            value={domainName}
                                            onChange={(e) => setDomainName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <div className="d-grid mt-4">
                                        <Button variant="primary" type="submit" size="lg">
                                            Check Availability & Transfer
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* --- Prerequisites Section --- */}
                <Row className="mt-5 pt-4 text-center">
                    <Col>
                        <h2>Before You Begin</h2>
                        <p className="text-muted">To ensure a smooth transfer, please complete the following steps with your current registrar:</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={{ span: 4, offset: 2 }} className="mb-4">
                        <Card className="h-100 text-center feature-card">
                             <Card.Body>
                                <div className="feature-icon mb-3">1</div>
                                <Card.Title as="h5">Unlock Your Domain</Card.Title>
                                <Card.Text>
                                    Log in to your current domain provider and disable the registrar lock or theft protection for the domain you wish to transfer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col md={4} className="mb-4">
                         <Card className="h-100 text-center feature-card">
                             <Card.Body>
                                <div className="feature-icon mb-3">2</div>
                                <Card.Title as="h5">Check Admin Email</Card.Title>
                                <Card.Text>
                                    Ensure you have access to the administrator email address listed on your domain's WHOIS record, as a confirmation email will be sent there.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DomainsTransfer;