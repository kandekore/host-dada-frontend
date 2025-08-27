// src/components/MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header'; // Import the new Header component
import SubMenuTabs from './SubMenuTabs';
import siteStructure from '../data/siteStructure';

const MainLayout = ({ handleLoginShow }) => {
  const location = useLocation();

  const currentCategory = siteStructure.find(
    (menuItem) =>
      location.pathname === menuItem.url ||
      location.pathname.startsWith(menuItem.url + '/')
  );

  return (
    <div>
      {/* Use the new Header component and pass the prop down */}
      <Header handleLoginShow={handleLoginShow} />
      
      {currentCategory &&
        currentCategory.subItems &&
        currentCategory.subItems.length > 0 && (
          <div className="container sub-menu-tabs my-3">
            <SubMenuTabs items={currentCategory.subItems} />
          </div>
        )}
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;