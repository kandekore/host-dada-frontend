// src/pages/DomainsTransfer.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from 'react-bootstrap';

const DomainsTransfer = () => {
    const [step, setStep] = useState(1);
    const [domain, setDomain] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [isUkDomain, setIsUkDomain] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const pageTitle = "Transfer Your Domain | Host Dada";
    const pageDescription = "Transfer your domain to Host Dada for simple management, competitive pricing, and expert support. Get started with our easy transfer process.";

    const UK_TLDS = ['.uk', '.co.uk', '.org.uk', '.me.uk'];

    const handleDomainCheck = (e) => {
        e.preventDefault();
        if (!domain) {
            setError('Please enter a domain name to begin.');
            return;
        }
        setError('');

        const isUk = UK_TLDS.some(tld => domain.toLowerCase().endsWith(tld));
        setIsUkDomain(isUk);
        setStep(2); // Move to the next step
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        // This is a placeholder for your actual API call to WHMCS
        // You would pass the domain and, if not a UK domain, the authCode
        try {
            // const response = await fetch('/api/initiate-transfer', { 
            //     method: 'POST',
            //     body: JSON.stringify({ domain, eppCode: isUkDomain ? null : authCode }) 
            // });
            // const data = await response.json();

            // Simulate API call success
            setTimeout(() => {
                setResult(`Transfer for ${domain} has been initiated successfully! Please check your email for verification.`);
                setLoading(false);
            }, 1500);

        } catch (err) {
            setError('There was an error initiating the transfer. Please check the details and try again.');
            setLoading(false);
        }
    };

    const handleBack = () => {
        setStep(1);
        setError('');
        setResult(null);
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h1>Transfer Your Domain to Host Dada</h1>
                            <p className="lead text-muted">Consolidate your domains with our easy-to-use management tools, competitive renewal prices, and expert support.</p>
                        </div>

                        <Card>
                            <Card.Header as="h5">Start Your Transfer</Card.Header>
                            <Card.Body>
                                {step === 1 && (
                                    <Form onSubmit={handleDomainCheck}>
                                        <Form.Group className="mb-3" controlId="domainToTransfer">
                                            <Form.Label>Enter the Domain Name You Wish to Transfer</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="e.g., mydomain.com"
                                                value={domain}
                                                onChange={(e) => setDomain(e.target.value)}
                                                required 
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">Check Domain</Button>
                                    </Form>
                                )}

                                {step === 2 && (
                                    <Form onSubmit={handleSubmit}>
                                        <h5>Transferring: <strong>{domain}</strong></h5>
                                        
                                        {isUkDomain ? (
                                            <Alert variant="info" className="mt-4">
                                                <Alert.Heading><i className="fas fa-info-circle"></i> Action Required for .UK Domains</Alert.Heading>
                                                <p>
                                                    To transfer a <strong>.uk</strong> domain, you do not need an EPP code. Instead, you must log in to your current domain registrar and change the **IPS Tag** to:
                                                </p>
                                                <h4 className="text-center my-3"><code>HOSTDADA</code></h4>
                                                <p className="mb-0">
                                                    Once you have done this, the transfer will proceed automatically. Click the button below once you have updated the IPS Tag.
                                                </p>
                                            </Alert>
                                        ) : (
                                            <Form.Group className="my-4" controlId="authCode">
                                                <Form.Label>Authorization (EPP) Code</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder="Get this from your current registrar"
                                                    value={authCode}
                                                    onChange={(e) => setAuthCode(e.target.value)}
                                                    required 
                                                />
                                                <Form.Text className="text-muted">
                                                    Before you proceed, please ensure your domain is unlocked at your current registrar.
                                                </Form.Text>
                                            </Form.Group>
                                        )}
                                        
                                        <div className="d-flex justify-content-between">
                                            <Button variant="secondary" onClick={handleBack}>Back</Button>
                                            <Button variant="primary" type="submit" disabled={loading}>
                                                {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Initiate Transfer'}
                                            </Button>
                                        </div>
                                    </Form>
                                )}

                                {error && <Alert variant="danger" className="mt-4">{error}</Alert>}
                                {result && <Alert variant="success" className="mt-4">{result}</Alert>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DomainsTransfer;