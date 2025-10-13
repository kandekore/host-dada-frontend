import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { API_BASE } from '../config';

const DomainsWhois = () => {
    const [domain, setDomain] = useState('');
    const [whoisData, setWhoisData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchParams] = useSearchParams();

    // Define the submit handler using useCallback to prevent it from being recreated on every render
    const handleSearch = useCallback(async (domainToSearch) => {
        if (!domainToSearch || !domainToSearch.trim()) {
            setError('Please enter a domain name.');
            return;
        }

        setIsLoading(true);
        setError('');
        setWhoisData(null);

        try {
            const response = await fetch(`${API_BASE}/whois`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ domain: domainToSearch }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch WHOIS data.');
            }
            setWhoisData(data.whoisData);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []); // Empty dependency array means this function is created only once

    // This effect runs when the component loads or searchParams change
    useEffect(() => {
        const domainFromUrl = searchParams.get('domain');
        if (domainFromUrl) {
            setDomain(domainFromUrl);
            // Automatically trigger the search with the domain from the URL
            handleSearch(domainFromUrl);
        }
    }, [searchParams, handleSearch]);

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(domain);
    };

    return (
        <>
            <Helmet>
                <title>WHOIS Lookup | Find Domain Ownership Information | Host Dada</title>
                <meta name="description" content="Use our free WHOIS tool to look up the registration and ownership details of any domain name. Check domain availability and owner information instantly." />
            </Helmet>

            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <h1>WHOIS Domain Lookup</h1>
                            <p className="lead">
                                Find out who owns a domain name. Enter a domain below to look up its registration data.
                            </p>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form className="d-flex" onSubmit={handleSubmit}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter a domain name (e.g., google.com)"
                                            value={domain}
                                            onChange={(e) => setDomain(e.target.value)}
                                            required
                                            className="me-2"
                                        />
                                        <Button type="submit" variant="primary" style={{ minWidth: '100px' }}>
                                            {isLoading ? <Spinner as="span" animation="border" size="sm" /> : 'Search'}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {error && (
                        <Row className="justify-content-center mt-4">
                            <Col lg={8}>
                                <Alert variant="danger">{error}</Alert>
                            </Col>
                        </Row>
                    )}
                    {whoisData && (
                        <Row className="justify-content-center mt-4">
                            <Col lg={8}>
                                <Card>
                                    <Card.Header as="h5">WHOIS Information for: {domain}</Card.Header>
                                    <Card.Body>
                                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                                            <code>{whoisData}</code>
                                        </pre>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </Container>
            </Container>
        </>
    );
};

export default DomainsWhois;