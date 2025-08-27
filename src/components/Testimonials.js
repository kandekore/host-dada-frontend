// src/components/Testimonials.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
    { name: 'John Doe', company: 'Tech Solutions', text: 'Host Dada has been a game-changer for our business. The speed and support are second to none!', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', company: 'Creative Designs', text: 'I migrated my clients to Host Dada and couldn\'t be happier. The performance is incredible.', image: 'https://via.placeholder.com/150' },
    { name: 'Sam Wilson', company: 'E-commerce Store', text: 'The 24/7 support team is fantastic. They helped me solve a complex issue in minutes.', image: 'https://via.placeholder.com/150' },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <Container>
                <h2 className="text-center section-title">What Our Customers Say</h2>
                <p className="text-center section-subtitle mb-5">We are proud to have the trust of our amazing clients.</p>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="testimonial-card">
                                <Card.Body>
                                    <div className="testimonial-quote">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <Card.Text>
                                        {testimonial.text}
                                    </Card.Text>
                                    <div className="d-flex align-items-center mt-4">
                                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                                        <div>
                                            <h5 className="testimonial-name">{testimonial.name}</h5>
                                            <p className="testimonial-company">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;