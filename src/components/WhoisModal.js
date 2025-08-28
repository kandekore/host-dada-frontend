// src/components/WhoisModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Spinner, Alert } from 'react-bootstrap';

const WhoisModal = ({ domain, show, handleClose }) => {
  const [whoisData, setWhoisData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (show) {
      const fetchWhois = async () => {
        setIsLoading(true);
        setError('');
        try {
          const response = await fetch('http://localhost:3001/api/domain-check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ domain }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error);

          // --- THIS IS THE FIX ---
          // Clean the whois string by replacing <br> tags with newlines
          const cleanedData = data.whois.replace(/<br\s*\/?>/gi, '\n');
          setWhoisData(cleanedData);

        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchWhois();
    }
  }, [show, domain]);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>WHOIS Lookup for: {domain}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading && <div className="text-center"><Spinner animation="border" /></div>}
        {error && <Alert variant="danger">{error}</Alert>}
        {whoisData && <pre className="whois-data">{whoisData}</pre>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WhoisModal;