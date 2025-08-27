// src/components/SubMenuTabs.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const SubMenuTabs = ({ items }) => {
  const location = useLocation();

  return (
    <Nav fill variant="tabs">
      {items.map((item, idx) => (
        <Nav.Item key={idx}>
          <Nav.Link
            as={Link}
            to={item.url}
            active={location.pathname === item.url}
          >
            {item.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SubMenuTabs;
