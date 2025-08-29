// src/pages/AllTldsSearch.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Spinner, Alert, ListGroup } from 'react-bootstrap';
import CartContext from '../context/CartContext';

const AllTldsSearch = () => {
  const { searchTerm: initialSearchTerm } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (initialSearchTerm) {
      performSearch(initialSearchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSearchTerm]);

  const performSearch = async (term) => {
    setIsLoading(true);
    setResults([]);
    setError('');
    try {
      const tldRes = await fetch('http://localhost:3001/api/get-all-tlds');
      const tldData = await tldRes.json();
      if (!tldRes.ok) throw new Error('Could not fetch TLD list.');

      const searchRes = await fetch('http://localhost:3001/api/full-domain-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchTerm: term, tlds: tldData.tlds }),
      });
      const searchData = await searchRes.json();
      if (!searchRes.ok) throw new Error(searchData.error);
      
      setResults(searchData.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (term) {
      // --- THIS IS THE FIX ---
      // Remove any potential TLD before navigating to the new URL
      const baseName = term.split('.')[0];
      navigate(`/domains/all-tlds-search/${baseName}`);
      // ----------------------
    }
  };

  return (
    <Container className="my-5">
      <h2>Full Domain Extension Search</h2>
      <p>Check the availability of your domain name across all our TLDs.</p>
      <Form onSubmit={handleFormSubmit} className="d-flex mb-4">
        <Form.Control
          type="search"
          placeholder="e.g., myawesomeidea"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" disabled={isLoading} className="ms-2">
          {isLoading ? <Spinner size="sm" /> : 'Search'}
        </Button>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}
      
      {results.length > 0 && (
        <ListGroup>
          {results.filter(res => res.status === 'available').map(res => (
            <ListGroup.Item key={res.domain} variant="success" className="d-flex justify-content-between align-items-center">
              <span><strong>{res.domain}</strong> is available!</span>
              <Button size="sm" onClick={() => addToCart(res)}>Add to Cart</Button>
            </ListGroup.Item>
          ))}
          {results.filter(res => res.status !== 'available').map(res => (
            <ListGroup.Item key={res.domain} variant="danger">
              <strong>{res.domain}</strong> is unavailable.
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default AllTldsSearch;