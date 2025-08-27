// src/components/MegaMenu.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import siteStructure from '../data/siteStructure';

const MegaMenu = () => {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Host Dada</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          {siteStructure.map((menuItem, idx) => {
            // Mark active if the current URL matches or starts with the menu item's URL.
            const isActive =
              location.pathname === menuItem.url ||
              location.pathname.startsWith(menuItem.url + '/');

            if (menuItem.subItems && menuItem.subItems.length > 0) {
              return (
                <NavDropdown
                  key={idx}
                  title={menuItem.title}
                  id={`nav-dropdown-${idx}`}
                  active={isActive}
                >
                  {menuItem.subItems.map((subItem, subIdx) => (
                    <NavDropdown.Item as={Link} to={subItem.url} key={subIdx}>
                      <span style={{ fontSize: '18px', marginRight: '8px' }}>
                        {subItem.icon}
                      </span>
                      <strong>{subItem.title}</strong>
                      <br />
                      <small>{subItem.description}</small>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              );
            } else {
              return (
                <Nav.Link as={Link} to={menuItem.url} key={idx} active={isActive}>
                  {menuItem.title}
                </Nav.Link>
              );
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MegaMenu;
