import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './Webmail.css'; // New CSS for this page

const Webmail = () => {
    const pageTitle = "Webmail | Host Dada";
    const pageDescription = "Access your Host Dada webmail account securely from any browser.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>
            <div className="webmail-container">
                <iframe
                    src="https://webmail.hostdada.uk"
                    title="Host Dada Webmail"
                    className="webmail-iframe"
                />
            </div>
        </>
    );
};

export default Webmail;