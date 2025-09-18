// src/pages/DomainsSearchRegister.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import DomainsSearchRegisterComponent from '../components/DomainsSearchRegisterComponent'; 
const DomainsSearchRegister = () => {
    const pageTitle = "Domain Name Search & Registration | Host Dada";
    const pageDescription = "Find and register your perfect domain name today. Use our powerful search tool to check availability across hundreds of TLDs.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* We don't need a full-width container here as MainLayout handles it */}
            <div className="py-5 text-center">
               <DomainsSearchRegisterComponent /> 
            </div>
            
           
        </>
    );
};

export default DomainsSearchRegister;