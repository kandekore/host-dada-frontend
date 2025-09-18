import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Spinner, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './EmailMicrosoft365.css'; // New CSS for this page
import { API_BASE } from '../config';
import msPartnerLogo from '../assets/images/microsoft-partner.png'; // Add the partner logo to your assets

const EmailMicrosoft365 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 32 }), // Fetching Microsoft 365 products
                });

                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(`Failed to fetch products: ${errorText}`);
                }
                
                const data = await res.json();
                setProducts(data.products);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const pageTitle = "Microsoft 365 Business Plans | Host Dada";
    const pageDescription = "As a Microsoft Partner, Host Dada offers Microsoft 365 Business Basic, Standard, and Premium plans. Get industry-leading apps like Word, Excel, Teams, and advanced security.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Intro Section --- */}
            <Container fluid className="m365-hero-section py-5 text-white">
                <Container>
                    <Row className="align-items-center text-center text-md-start">
                        <Col md={7}>
                            <h1>Microsoft 365 for Business</h1>
                            <p className="lead">
                                Empower your team with the ultimate productivity suite. Get industry-leading business apps, cloud services, and advanced security, all managed by your trusted Microsoft Partner, Host Dada.
                            </p>
                        </Col>
                        <Col md={5} className="text-center">
                            <img src={msPartnerLogo} alt="Microsoft Partner Network Logo" className="img-fluid" style={{ maxHeight: '150px' }} />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Pricing Section --- */}
            <Container fluid className="section-container py-5 bg-light" id="pricing">
                <Container>
                    <h2 className="text-center mb-4">Choose Your Microsoft 365 Plan</h2>
                    {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} groupSlug="microsoft365"/>
                    )}
                </Container>
            </Container>

            {/* --- Why Choose Host Dada Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                     <div className="text-center mb-5">
                        <h2>Why Buy Microsoft 365 from Host Dada?</h2>
                        <p className="lead text-muted">Get more than just a license. Get a dedicated partner.</p>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 text-center feature-card-m365">
                                <Card.Body>
                                    <Card.Title>Expert UK Support</Card.Title>
                                    <Card.Text>Our certified experts are here to help you choose the right plan, handle the setup, and provide ongoing technical support whenever you need it.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                             <Card className="h-100 text-center feature-card-m365">
                                <Card.Body>
                                    <Card.Title>Seamless Integration</Card.Title>
                                    <Card.Text>We ensure your Microsoft 365 services work perfectly with your hosting and domains, providing a single point of contact for all your business needs.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                             <Card className="h-100 text-center feature-card-m365">
                                <Card.Body>
                                    <Card.Title>Customised Solutions</Card.Title>
                                    <Card.Text>As your partner, we understand your business and can help you leverage the full power of Microsoft 365 to meet your specific goals.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Included Apps Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>The World's Leading Productivity Apps</h2>
                        <p className="lead text-muted">Discover the powerful tools included in your Microsoft 365 subscription.</p>
                    </div>
                    <Row>
                        {/* Add details for each app here */}
                        <Col lg={4} md={6} className="mb-4"><h5>Word</h5><p className="text-muted">Create, polish, and share beautiful documents. Real-time co-authoring and smart tools make collaboration effortless.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Excel</h5><p className="text-muted">Organise and analyse data with the world's most powerful spreadsheet software. Turn numbers into insights with charts and AI-driven features.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>PowerPoint</h5><p className="text-muted">Design and deliver stunning presentations that captivate your audience, with rich animations, cinematic motion, and 3D models.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Outlook</h5><p className="text-muted">Manage your professional email and calendar in one secure hub. A 50GB mailbox and advanced security keep you connected and protected.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Teams</h5><p className="text-muted">The ultimate hub for teamwork. Chat, meet, call, and collaborate in a shared workspace, keeping all your conversations and files in one place.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>OneDrive</h5><p className="text-muted">Store, access, and share your files securely from anywhere with 1TB of cloud storage per user. Work on documents across all your devices.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>SharePoint</h5><p className="text-muted">Create intelligent intranets and team sites to share and manage content, knowledge, and applications across your organisation.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Exchange</h5><p className="text-muted">The engine behind your business-class email, providing reliability, security, and compliance features for your Outlook inbox.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Clipchamp</h5><p className="text-muted">An easy-to-use video editor that allows you to create and share professional-looking videos for your business quickly.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Microsoft Loop</h5><p className="text-muted">A transformative co-creation app that allows teams to think, plan, and create together in one flexible canvas with portable components.</p></Col>
                    </Row>
                    <div className="text-center my-4">
                        <h4>Plus, Advanced Security & Management with Business Premium:</h4>
                    </div>
                     <Row className="justify-content-center">
                        <Col lg={4} md={6} className="mb-4"><h5>Microsoft Defender</h5><p className="text-muted">Enterprise-grade endpoint security to protect your devices from ransomware, malware, phishing, and other cyberthreats.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Microsoft Intune</h5><p className="text-muted">A cloud-based solution for mobile device and application management, ensuring your company data is protected on all devices.</p></Col>
                        <Col lg={4} md={6} className="mb-4"><h5>Microsoft Entra ID</h5><p className="text-muted">Secure your identities and manage access to apps and resources for your employees, partners, and customers.</p></Col>
                         <Col lg={4} md={6} className="mb-4"><h5>Microsoft Purview</h5><p className="text-muted">A unified data governance solution to manage and protect your sensitive data across your entire digital estate.</p></Col>
                    </Row>
                </Container>
            </Container>

        </>
    );
};

export default EmailMicrosoft365;