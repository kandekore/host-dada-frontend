// src/pages/Home.js
import React from 'react';
import DomainSearch from '../components/DomainSearch';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import HostingFeatures from '../components/HostingFeatures';
import EmailHosting from '../components/EmailHosting'; // Import new component
import VpsHosting from '../components/VpsHosting';     // Import new component
import SupportedTech from '../components/SupportedTech'; // Import new component
import Testimonials from '../components/Testimonials';
import FooterPromo from '../components/FooterPromo';

function Home() {
  return (
    <div className="home-page">
      <DomainSearch />
      <Hero />
      <WhyChooseUs />
      <HostingFeatures />
      <EmailHosting />
      <VpsHosting />
      <SupportedTech />
      <Testimonials />
      <FooterPromo />
    </div>
  );
}

export default Home;