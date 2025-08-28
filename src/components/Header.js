// src/components/Header.js
import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import siteStructure from '../data/siteStructure';
import logo from '../assets/images/host-dada-logo.png';
import './Header.css';

const Header = ({ handleLoginShow }) => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const location = useLocation();

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
            <Link to="/support" className="nav-link">Support</Link>
            <Link to="/knowledge-base" className="nav-link">Knowledge Base</Link>
            
            {/* === USER MENU MOVED HERE === */}
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
                if (item.subItems && item.subItems.length > 0) {
                  const isActive = location.pathname.startsWith(item.url) && item.url !== '/';
                  return (
                    <NavDropdown key={item.title} title={item.title} id={`megamenu-${item.title}`} className="mega-menu" active={isActive}>
                      {/* Mega Menu Content would be here */}
                    </NavDropdown>
                  );
                }
                return (
                  <Nav.Link as={Link} to={item.url} key={item.title} active={location.pathname === item.url}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            {/* The user menu logic has been removed from here */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;