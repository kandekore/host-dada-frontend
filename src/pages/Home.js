// src/pages/Home.js
import React from 'react';
import DomainSearch from '../components/DomainSearch';
import HeroSlider from '../components/HeroSlider';

function Home() {
  return (
    <div className="home-page">
      <DomainSearch />
      <HeroSlider />
      
      {/* We will add the rest of the page sections below the slider later */}
      <div className="container my-5">
        <h2>More content will go here...</h2>
      </div>
    </div>
  );
}

export default Home;