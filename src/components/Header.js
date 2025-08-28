// src/components/Header.js
import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import siteStructure from '../data/siteStructure';
import logo from '../assets/images/host-dada-logo.png';
import './Header.css';

const Header = ({ handleLoginShow }) => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [openMobileMenu, setOpenMobileMenu] = useState(null); // State for mobile accordion

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = (title) => {
    setOpenMobileMenu(openMobileMenu === title ? null : title);
  };

  const countries = [
    { code: 'GB', name: 'UK', flag: '🇬🇧' },
    { code: 'US', name: 'USA', flag: '🇺🇸' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  ];

  const handleSsoRedirect = async (destination = '') => {
    if (!user || !user.id) {
        alert('Could not verify user. Please log in again.');
        logout();
        return;
    }
    try {
        const response = await fetch('http://localhost:3001/api/sso', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id }),
        });
        const data = await response.json();
        if (response.ok) {
            const finalUrl = `${data.redirectTo}${destination ? `&rp=/${destination}` : ''}`;
            window.location.href = finalUrl;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        console.error('SSO Redirect failed:', error);
        alert('Could not automatically log you in. Please try again.');
    }
  };

  return (
    <header className="header-container">
      <Navbar bg="dark" variant="dark" className="action-bar py-0">
        <Container>
          <Nav>
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
            <Link to="/support" className="nav-link">Support</Link>
            <Link to="/knowledge-base" className="nav-link">Knowledge Base</Link>
            <Link to="/cart" className="nav-link cart-icon-link">
              <i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && 
                <Badge pill bg="primary" className="cart-badge">{cartItems.length}</Badge>
              }
            </Link>
            {isLoggedIn ? (
              <NavDropdown title={`Welcome, ${user?.firstName || ''}`} id="account-menu" className="account-menu" align="end">
                <NavDropdown.Item onClick={() => handleSsoRedirect('clientarea.php?action=dashboard')}>Dashboard</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleSsoRedirect('clientarea.php?action=services')}>My Services</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleSsoRedirect('clientarea.php?action=domains')}>My Domains</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleSsoRedirect('clientarea.php?action=invoices')}>My Invoices</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={handleLoginShow}>Login / Signup</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

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

                if (hasSubItems) {
                  if (isMobile) {
                    // Mobile: Render an accordion-style dropdown
                    const isOpen = openMobileMenu === item.title;
                    return (
                      <div key={item.title} className="mobile-nav-group">
                        <div className="mobile-nav-header" onClick={() => toggleMobileMenu(item.title)}>
                          {item.title}
                          <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} ms-2`}></i>
                        </div>
                        {isOpen && (
                          <div className="mobile-nav-links">
                            {item.subItems.map(subItem => (
                              <Nav.Link as={Link} to={subItem.url} key={subItem.title} className="mobile-nav-link">
                                {subItem.title}
                              </Nav.Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    // Desktop: Render the full mega menu
                    return (
                      <NavDropdown key={item.title} title={item.title} id={`megamenu-${item.title}`} className="mega-menu" active={isActive}>
                        <div className="mega-menu-content">
                          <Container>
                            <Row>
                              <Col md={3} className="mega-menu-description">
                                <h4>{item.title}</h4>
                                <p>{item.megaMenuDescription}</p>
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
                }
                return (
                  <Nav.Link as={Link} to={item.url} key={item.title} active={location.pathname === item.url}>
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