// src/components/Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import siteStructure from '../data/siteStructure';
import logo from '../assets/images/host-dada-logo.png';
import './Header.css';

const Header = ({ handleLoginShow }) => {
  const location = useLocation();

  const countries = [
    { code: 'GB', name: 'UK', flag: '🇬🇧' },
    { code: 'US', name: 'USA', flag: '🇺🇸' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  ];

  return (
    <header className="header-container">
      {/* ====== ACTION BAR ====== */}
      <Navbar bg="dark" variant="dark" className="action-bar py-0">
        <Container>
          <Nav className="me-auto">
            <NavDropdown title={<span>🇬🇧 United Kingdom</span>} id="country-selector" className="country-selector">
              {countries.map(country => (
                <NavDropdown.Item key={country.code} href="#">
                  <span className="pe-2">{country.flag}</span>{country.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="tel:+441215555555">+44 121 555 5555</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Support</Nav.Link>
            <Nav.Link href="#">Knowledge Base</Nav.Link>
            <Nav.Link onClick={handleLoginShow}>Login / Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* ====== MAIN NAVIGATION ====== */}
      <Navbar bg="light" expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} alt="Host Dada Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav>
              {siteStructure.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isActive = location.pathname.startsWith(item.url) && item.url !== '/';
                
                if (item.title === 'Home') {
                  return (
                     <Nav.Link as={Link} to={item.url} key={item.title} active={location.pathname === '/'}>
                      {item.title}
                    </Nav.Link>
                  )
                }
                
                if (hasSubItems) {
                  return (
                    <NavDropdown
                      key={item.title}
                      title={item.title}
                      id={`megamenu-${item.title}`}
                      className="mega-menu"
                      active={isActive}
                    >
                      <div className="mega-menu-content">
                        <Container>
                          <Row>
                            <Col md={3} className="mega-menu-description">
                              <h4>{item.title}</h4>
                              <p>
                                Here is a brief overview of our {item.title.toLowerCase()} services. Find the perfect solution for your needs.
                              </p>
                            </Col>
                            <Col md={9}>
                              <Row>
                                {item.subItems.map((subItem) => (
                                  <Col md={4} key={subItem.title}>
                                    <NavDropdown.Item as={Link} to={subItem.url} className="mega-menu-item">
                                      <div className="icon">{subItem.icon}</div>
                                      <div className="item-content">
                                        <strong>{subItem.title}</strong>
                                        <small>{subItem.description}</small>
                                      </div>
                                    </NavDropdown.Item>
                                  </Col>
                                ))}
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </NavDropdown>
                  );
                }

                return (
                  <Nav.Link as={Link} to={item.url} key={item.title} active={isActive}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;