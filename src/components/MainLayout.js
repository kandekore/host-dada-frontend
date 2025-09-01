// src/components/MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import SubMenuTabs from './SubMenuTabs';
import siteStructure from '../data/siteStructure';

const MainLayout = ({ handleLoginShow }) => {
  const location = useLocation();

  const currentCategory = siteStructure.find(
    (menuItem) =>
      location.pathname.startsWith(menuItem.url + '/')
  );

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header handleLoginShow={handleLoginShow} />
      
      {currentCategory &&
        currentCategory.subItems &&
        currentCategory.subItems.length > 0 && (
          <Container className="sub-menu-tabs my-3">
            <SubMenuTabs items={currentCategory.subItems} />
          </Container>
        )}

      {/* This <main> section no longer adds a container, allowing all pages to be full-width */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;