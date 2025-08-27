// src/components/HostingFeatures.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HostingFeatures.css';

const items = [
    { icon: 'fas fa-server', title: '99.9% Uptime', description: 'Reliable hosting that keeps your website online.' },
    { icon: 'fas fa-tachometer-alt', title: 'Blazing Fast Speeds', description: 'Optimized servers for maximum performance.' },
    { icon: 'fas fa-cpanel', title: 'cPanel Included', description: 'Easy-to-use control panel for managing your site.' },
    { icon: 'fas fa-lock', title: 'Free SSL Certificates', description: 'Secure your website and build trust with visitors.' },
    { icon: 'fas fa-database', title: 'MySQL Databases', description: 'Unlimited databases for your applications.' },
    { icon: 'fas fa-life-ring', title: '24/7 Support', description: 'Expert help is always available when you need it.' },
];

const HostingFeatures = () => {
    return (
        <section className="hosting-features-section">
            <Container>
                <h2 className="text-center section-title">All Our Hosting Plans Include</h2>
                <p className="text-center section-subtitle mb-5">Everything you need to get your website up and running.</p>
                <Row>
                    {items.map((item, index) => (
                        <Col md={4} sm={6} key={index} className="mb-4">
                            <div className="plan-item">
                                <i className={item.icon}></i>
                                <div className="item-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default HostingFeatures;