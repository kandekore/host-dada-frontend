// src/pages/DomainExtensionPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import domainData from '../data/domains.json';
import './DomainExtensionPage.css';

const DomainExtensionPage = () => {
  const { extension } = useParams();

  // Find the domain data that matches the URL parameter
  const domain = domainData.find(d => d.title.rendered.toLowerCase() === extension.toLowerCase());

  if (!domain) {
    return (
      <Container className="my-5">
        <Alert variant="warning">
          Sorry, we couldn't find any information for the "{extension}" domain extension.
        </Alert>
      </Container>
    );
  }

  // The content from your JSON is HTML, so we need to render it as such
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <Container className="my-5 domains">
      <Row>
        <Col>
          <div className='domain-extension-container'><p className="domain-extension">.{domain.title.rendered}</p></div><h1>.{domain.title.rendered} Domain Extension</h1>
          <hr />
          <div dangerouslySetInnerHTML={createMarkup(domain.content.rendered)} />
        </Col>
      </Row>
    </Container>
  );
};

export default DomainExtensionPage;