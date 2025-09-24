// src/pages/CookiePolicy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './CookiePolicy.css';

const CookiePolicy = () => {
    const pageTitle = "Cookie Policy | Host Dada";
    const pageDescription = "This policy explains how Host Dada uses cookies on our website to improve your experience.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <Container fluid className="section-container py-5 bg-white">
                <Container className="cookie-policy-container">
                    <Row>
                        <Col>
                            <h1 className="text-center mb-5">Cookie Policy</h1>

                            <p>This website https://hostdada.co.uk ("Our Site") uses Cookies and similar technologies in order to distinguish you from other users. By using Cookies, We are able to provide you with a better experience and to improve Our Site by better understanding how you use it. Please read this Cookie Policy carefully and ensure that you understand it. Your acceptance of Our Cookie Policy is deemed to occur if you continue using Our Site OR when you press the accept button on Our Cookie prompt. If you do not agree to Our Cookie Policy, please stop using Our Site immediately.</p>

                            <h2 id="definitions">1. Definitions and Interpretation</h2>
                            <p>In this Cookie Policy, unless the context otherwise requires, the following expressions have the following meanings:</p>
                            <ul>
                                <li><strong>"Cookie"</strong> means a small file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site;</li>
                                <li><strong>"Cookie Law"</strong> means the relevant parts of the Privacy and Electronic Communications (EC Directive) Regulations 2003 and of EU Regulation 2016/679 General Data Protection Regulation ("GDPR");</li>
                                <li><strong>"personal data"</strong> means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data, as defined by EU Regulation 2016/679 General Data Protection Regulation ("GDPR"); and</li>
                                <li><strong>"We/Us/Our"</strong> means Host Dada, a limited company registered in England.</li>
                            </ul>

                            <h2 id="how-we-use-cookies">2. How We Use Cookies</h2>
                            <p>Our Site may place and access certain first party Cookies on your computer or device. First party Cookies are those placed directly by Us and are used only by Us. We use Cookies to facilitate and improve your experience of Our Site and to provide and improve Our products and services. We have carefully chosen these Cookies and have taken steps to ensure that your privacy and personal data are protected and respected at all times.</p>

                            <h2 id="types-of-cookies">3. Types of Cookies</h2>
                            <p>The following Cookies may be placed on your computer or device:</p>
                            <ul>
                                <li><strong>Strictly Necessary Cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</li>
                                <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
                                <li><strong>Functionality Cookies:</strong> These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
                            </ul>

                            <h2 id="consent-and-control">4. Consent and Control</h2>
                            <p>Before Cookies are placed on your computer or device, you will be shown a prompt requesting your consent to set those Cookies. By giving your consent to the placing of Cookies you are enabling Us to provide the best possible experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of Our Site may not function fully or as intended.</p>

                            <h2 id="managing-cookies">5. How to Manage Cookies</h2>
                            <p>You can choose to enable or disable Cookies in your internet browser. Most internet browsers also enable you to choose whether you wish to disable all Cookies or only third party Cookies. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser or the documentation that came with your device.</p>

                            <h2 id="changes-to-policy">6. Changes to this Cookie Policy</h2>
                            <p>We may alter this Cookie Policy at any time. Any such changes will become binding on you on your first use of Our Site after the changes have been made. You are therefore advised to check this page from time to time.</p>

                            <h2 id="further-information">7. Further Information</h2>
                            <p>If you would like to know more about how We use Cookies, please contact Us at <a href="mailto:admin@hostdada.co.uk">admin@hostdada.co.uk</a>, by telephone on 0203 519 9310, or by post at 124 City Road, London, United Kingdom, EC1V 2NX.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default CookiePolicy;