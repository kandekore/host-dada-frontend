// src/pages/DomainsWhois.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
import { API_BASE } from '../config';

const DomainsWhois = () => {
    const [domain, setDomain] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const pageTitle = "WHOIS Domain Lookup | Host Dada";
    const pageDescription = "Use our free WHOIS tool to look up registration and contact information for any domain name. Check ownership details and expiration dates instantly.";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult('');

        try {
            const response = await fetch(`${API_BASE}/whois`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ domain }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch WHOIS data.');
            }
            setResult(data.whoisData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
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
                            <h1>WHOIS Domain Lookup</h1>
                            <p className="lead text-muted">Check the registration details, status, and expiration of any domain name.</p>
                        </div>

                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit} className="d-flex">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter a domain name (e.g., google.com)"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        required
                                        className="me-2"
                                    />
                                    <Button variant="primary" type="submit" disabled={loading} style={{ minWidth: '100px' }}>
                                        {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Search'}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>

                        {error && <Alert variant="danger" className="mt-4">{error}</Alert>}
                        
                        {result && (
                            <Card className="mt-4">
                                <Card.Header as="h5">WHOIS Results for: {domain}</Card.Header>
                                <Card.Body>
                                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                                        <code>{result}</code>
                                    </pre>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DomainsWhois;