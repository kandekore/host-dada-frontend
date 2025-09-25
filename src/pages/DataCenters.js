// src/pages/DataCenters.js
import React from 'react';
import './DataCenters.css';
import dataCenterMap from '../assets/images/data-center-map.jpg'; 
import DataCenterrMap from '../components/DataCenterMap';

const DataCenters = () => (
  <div className="data-centers-container">
    <h2 className="main-title">Data Centres & CDN</h2>
    <h3 className="sub-title">Deploy faster websites with Edge Caching</h3>
    <div className="content-section">
      <p>
        Speed and reliability are key to a great online experience. Our free Content Delivery Network (CDN) is proven to boost website load times by delivering your content from a server closest to your visitors, no matter where they are in the world. This not only improves user experience but also leads to higher search engine rankings and more conversions.
      </p>
      <DataCenterrMap />
      <div className="image-container">
      </div>
      <p>
        The CDN is free for all Host Dada customers, with unlimited traffic and no throttling. It is fully integrated into our platform for easy management and includes advanced features to optimize your site's performance:
      </p>
      <ul>
        <li>
          <strong>Image Optimization:</strong> Our CDN automatically scans and optimizes your images, resizing and converting them to fast-loading formats like WebP with no visible loss in quality.
        </li>
        <li>
          <strong>Edge Caching:</strong> Website files are cached on our network of edge servers, making your content available to visitors much faster.
        </li>
        <li>
          <strong>Code Minification:</strong> We automatically compress HTML, CSS, and JavaScript files to reduce their size and improve loading times.
        </li>
        <li>
          <strong>Enhanced Security:</strong> The CDN provides enterprise-level security, including DDoS protection and the ability to block IPs and geolocations to keep your websites secure.
        </li>
      </ul>
    </div>
  </div>
);

export default DataCenters;