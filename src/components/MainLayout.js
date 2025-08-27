// src/components/MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer'; // Import the new Footer component
import SubMenuTabs from './SubMenuTabs';
import siteStructure from '../data/siteStructure';

const MainLayout = ({ handleLoginShow }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const currentCategory = siteStructure.find(
    (menuItem) =>
      !isHomePage &&
      (location.pathname === menuItem.url ||
      location.pathname.startsWith(menuItem.url + '/'))
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

      <main className="flex-grow-1">
        {isHomePage ? (
          <Outlet />
        ) : (
          <Container className="mt-4">
            <Outlet />
          </Container>
        )}
      </main>

      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default MainLayout;