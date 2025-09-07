// src/pages/AboutWhoWeAre.js
import React from 'react';
import './AboutWhoWeAre.css';
import aboutImage from '../assets/images/who-we-are-web-design-hosting-team.jpg'; // Correctly import the image

const AboutWhoWeAre = () => (
  <div className="who-we-are-container">
    <h2>Who We Are</h2>
    <p>
      Initially created by a web design team, Kandeshop, in 2009, Host Dada began as a dedicated platform to support their own user base. As our community and services grew, we strategically expanded, evolving from a simple tool into a comprehensive registrar and hosting provider. Today, we are proud to be a Nominet Accredited Channel Partner and a Microsoft Channel Partner.
    </p>
    <img src={aboutImage} alt="A team of professionals working together at Host Dada" className="about-image" />
    <p>
      As a Nominet Accredited Channel Partner, Host Dada offers a full suite of essential web services. Our core specialities are secure and reliable domain name registration and website hosting, but we also provide a range of additional services, including SSL certificates and a variety of Microsoft products.
    </p>
    <p>
      Our journey from a support platform to a full-fledged brand was fueled by a focus on sustainable, high-quality services. By providing reliable solutions that our clients can depend on, Host Dada has become a trusted name in web hosting and domain registration, with a growing clientele that values our commitment to quality.
    </p>
  </div>
);

export default AboutWhoWeAre;