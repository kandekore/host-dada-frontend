// src/pages/NotFound.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Host Dada</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>
            <Container fluid className="not-found-container text-center">
                <Row>
                    <Col>
                        <h1 className="not-found-title">404</h1>
                        <h2 className="not-found-subtitle">Oops! Page Not Found.</h2>
                        <p className="not-found-text">
                            We can't seem to find the page you're looking for. It might have been moved, deleted, or maybe it never existed.
                        </p>
                        <Button as={Link} to="/" variant="primary" size="lg">
                            Go to Homepage
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NotFound;