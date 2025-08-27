// src/components/MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import SubMenuTabs from './SubMenuTabs';
import siteStructure from '../data/siteStructure';

const MainLayout = () => {
  const location = useLocation();

  // Determine the current main category by matching the URL.
  const currentCategory = siteStructure.find(menuItem =>
    location.pathname === menuItem.url ||
    location.pathname.startsWith(menuItem.url + '/')
  );

  return (
    <div>
      <MegaMenu />
      {currentCategory &&
        currentCategory.subItems &&
        currentCategory.subItems.length > 0 && (
          <div className="sub-menu-tabs">
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
