// src/pages/Privacy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './Privacy.css';

const Privacy = () => {
    const pageTitle = "Privacy Policy | Host Dada";
    const pageDescription = "Host Dada is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal data.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <Container fluid className="section-container py-5 bg-white">
                <Container className="privacy-policy-container">
                    <Row>
                        <Col>
                            <h1 className="text-center mb-5">Privacy Policy</h1>

                            <p>Host Dada acknowledges how important it is to respect and protect the Data of everyone who uses our services, whether that be as a customer or a visitor to our website - <a href="https://hostdada.co.uk">https://hostdada.co.uk</a>. We value and care about your rights and privacy and will never use your Data unless you have given us permission to do so, or there is another lawful purpose that allows us to. We will always be transparent about anything we do with your Data.</p>

                            <h2 id="info-about-us">1. Information About us</h2>
                            <p>Our site is owned and operated by Host Dada, a Private Limited Company registered in England under company number 14514477.</p>
                            <p>
                                <strong>Registered address:</strong><br />
                                124 City Road<br />
                                London<br />
                                United Kingdom<br />
                                EC1V 2NX
                            </p>
                            <p><strong>Data Protection Officer:</strong> Darren Kandekore</p>
                            <p><strong>Email address:</strong> <a href="mailto:admin@hostdada.co.uk">admin@hostdada.co.uk</a></p>
                            <p><strong>Telephone number:</strong> 0203 519 9310</p>
                            <p>
                                <strong>Postal address:</strong><br />
                                124 City Road<br />
                                London<br />
                                United Kingdom<br />
                                EC1V 2NX
                            </p>

                            <h2 id="what-policy-covers">2. What Does This Policy Cover?</h2>
                            <p>This privacy notice tells you how we, Host Dada, will collect and use your personal data when you contact us or use our website. It will also advise that there may be links to other websites and that we cannot control your browsing experience or risks when visiting these or give any guarantee how those sites collect, record, use, store or distribute your Data, once you give them control. We would always advise to check the Privacy Policy of every website you visit to ensure that you minimise the risk to yourself.</p>

                            <h2 id="your-rights">3. Your Rights</h2>
                            <p>You have the following rights under GDPR, which this policy and our use of personal data have been designed to uphold:</p>
                            <ul>
                                <li>The right to be informed about our collection and use of personal data;</li>
                                <li>The right of access to the personal data we hold about you;</li>
                                <li>The right to rectification if any personal data we hold about you is inaccurate or incomplete;</li>
                                <li>The right to be forgotten – i.e. the right to ask us to delete any personal data we hold about you;</li>
                                <li>The right to restrict (i.e. prevent) the processing of your personal data;</li>
                                <li>The right to data portability (obtaining a copy of your personal data to re-use with another service or organisation);</li>
                                <li>The right to object to us using your personal data for particular purposes;</li>
                                <li>Rights with respect to automated decision making and profiling.</li>
                            </ul>

                            <h2 id="data-collected">4. What Data Do We Collect?</h2>
                            <p>We may collect the following information about you:</p>
                            <ul>
                                <li>Name</li>
                                <li>Contact information including email address and telephone number</li>
                                <li>Demographic information such as postcode, preferences and interests</li>
                                <li>IP address</li>
                                <li>Web browser type and version</li>
                                <li>Operating system</li>
                                <li>A list of URLs starting with a referring site, your activity on our site, and the site you exit to</li>
                            </ul>

                            <h2 id="how-we-use-data">5. How We Use Your Data</h2>
                            <p>All personal data is processed and stored securely, for no longer than is necessary in light of the reason(s) for which it was first collected. We will comply with our obligations and safeguard your rights under the GDPR at all times. Our use of your personal data will always have a lawful basis, either because it is necessary for our performance of a contract with you, because you have consented to our use of your personal data (e.g. by subscribing to emails), or because it is in our legitimate interests.</p>

                            <h2 id="storage-and-security">6. Data Storage and Security</h2>
                            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online. We do not store your personal data for any longer than is necessary in light of the reason(s) for which it was first collected.</p>

                            <h2 id="sharing-data">7. Do We Share Your Data?</h2>
                            <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>

                            <h2 id="accessing-data">8. How Can You Access Your Data?</h2>
                            <p>You have the right to ask for a copy of any of your personal data held by us (where such data is held). Under the GDPR, no fee is payable and we will provide any and all information in response to your request free of charge. Please contact us for more details at <a href="mailto:admin@hostdada.co.uk">admin@hostdada.co.uk</a>.</p>

                            <h2 id="contacting-us">9. Contacting Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us by email at <a href="mailto:admin@hostdada.co.uk">admin@hostdada.co.uk</a>, by telephone on 0203 519 9310, or by post at 124 City Road, London, United Kingdom, EC1V 2NX.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Privacy;