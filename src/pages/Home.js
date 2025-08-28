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
import { Helmet } from 'react-helmet-async'; // Import the Helmet component


function Home() {
  const pageTitle = "Host Dada | Reliable Web Hosting & Domain Registration";
  const pageDescription = "Find affordable and reliable web hosting solutions with Host Dada. Register your perfect domain name and get started today with 24/7 support.";
  return (
    <div className="home-page">
     <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {/* Add your site's URL and a specific image for sharing */}
        <meta property="og:url" content="https://www.hostdada.uk/" /> 
        <meta property="og:image" content="https://www.hostdada.uk/path/to/your/social-image.png" />

        {/* You can also add Schema.org markup (structured data) here */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.hostdada.uk/",
              "name": "Host Dada"
            }
          `}
        </script>
      </Helmet>
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