// src/pages/WordPressHosting.js
import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './WordPressHosting.css';

const WordPressHosting = () => {
  const pageTitle = "WordPress Hosting | Host Dada";
  const pageDescription = "Get super-fast, secure, and reliable WordPress hosting with cPanel tools, daily backups, and free SSL. Perfect for blogs, businesses, and e-commerce stores.";

  const standardFeatures = [
    { icon: 'fas fa-gift', title: 'FREE Domain Name', description: 'We offer a free .uk or .com domain name for the first year on all annual hosting plans.' },
    { icon: 'fas fa-lock', title: 'Free SSL Certificate', description: 'All plans come with SSL Certificates to enable the browser padlock and build customer confidence.' },
    { icon: 'fas fa-tachometer-alt', title: 'Page Speed Optimisation', description: 'A built-in Content Delivery Network (CDN) ensures your website loads fast anywhere on the planet.' },
    { icon: 'fas fa-envelope', title: 'POP3/IMAP email accounts', description: 'Create professional email addresses that match your domain, accessible via WebMail, IMAP, or POP3.' },
    { icon: 'fas fa-th-large', title: 'FULL cPanel Access', description: 'Manage all aspects of your hosting account from our industry-standard cPanel control panel.' },
    { icon: 'fas fa-headset', title: '365 Friendly UK Support', description: 'Get help and support via telephone, email, and our dedicated ticketing system.' },
  ];
  
  const wpTools = [
    "Theme Management", "Plugin Management", "User Management",
    "Checksum Report", "WordPress Settings", "Reinstall WordPress",
    "Site Staging & Cloning", "Database Management", "On-Demand Malware Scan"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      
      <Container className="my-5">
        {/* --- Hero Section --- */}
        <Row className="text-center mb-5">
          <Col>
            <h1>WordPress Website Hosting</h1>
            <p className="lead">Super-fast & secure WordPress hosting, packed with features to make managing your site a breeze.</p>
          </Col>
        </Row>
        
        {/* --- What is WordPress? --- */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2>What is WordPress?</h2>
            <p>Powering over 35% of the internet, WordPress is the world's most dominant content management system. Its flexibility allows it to power everything from small personal blogs and business websites to huge brands like Sony Music.</p>
            <p>While often known for blogging, you can create any kind of website with WordPress. E-commerce sites, galleries, and much more can be built quickly and easily. With tens of thousands of free themes and plugins, you can create a site that stands out, even if you can't code.</p>
          </Col>
          <Col md={6} className="text-center">
             <i className="fab fa-wordpress-simple" style={{ fontSize: '12rem', color: '#21759B' }}></i>
          </Col>
        </Row>

        {/* --- Pricing Table Placeholder --- */}
        <Row className="text-center mb-5">
            <Col>
                <h2>WordPress Hosting Prices</h2>
                <p className="text-muted">We will not be beaten on quality or value for money so sign up now!</p>
                <Alert variant="info">
                    <Alert.Heading>Live Pricing Coming Soon!</Alert.Heading>
                    <p>
                        Our hosting packages and live pricing will be pulled directly from WHMCS in an upcoming step. Stay tuned!
                    </p>
                </Alert>
            </Col>
        </Row>
        
        {/* --- WordPress Tools --- */}
        <Row className="align-items-center mb-5 bg-light p-4 rounded">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <i className="fas fa-tools" style={{ fontSize: '10rem', color: '#6c757d' }}></i>
          </Col>
          <Col md={6}>
            <h2>WordPress Hosting Tools</h2>
            <p>Each WordPress Hosting package comes with tools built directly into cPanel, giving you the flexibility to manage functions like changing themes, updating plugins, and adding users right from your control panel.</p>
            <Row>
                {wpTools.map(tool => (
                    <Col sm={6} key={tool}>
                        <p><i className="fas fa-check text-success me-2"></i>{tool}</p>
                    </Col>
                ))}
            </Row>
          </Col>
        </Row>

        {/* --- Standard Features --- */}
        <Row className="mb-4">
          <Col className="text-center">
            <h2>Standard Features of All Hosting Packages</h2>
          </Col>
        </Row>
        <Row className="feature-grid">
          {standardFeatures.map(feature => (
            <Col md={6} key={feature.title}>
              <div className="feature-item">
                <div className="feature-icon"><i className={feature.icon}></i></div>
                <div>
                  <h5>{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WordPressHosting;