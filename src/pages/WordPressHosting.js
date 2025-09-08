// src/pages/WordPressHosting.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Accordion, Spinner, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTableThreeCol';
import './WordPressHosting.css';
import { API_BASE } from '../config'; // or wherever
console.log('API_BASE =', API_BASE);

const WordPressHosting = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ gid: 62 }),
});

const ct = res.headers.get('content-type') || '';
if (!ct.includes('application/json')) {
  const text = await res.text();
  throw new Error(`Non-JSON response (${res.status}) from ${API_BASE}/products: ${text.slice(0,200)}`);
}

const data = await res.json();
if (!res.ok) throw new Error(data.error || `Failed to fetch products (status ${res.status})`);

setProducts(data.products);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const pageTitle = "Managed WordPress Hosting | Host Dada";
    const pageDescription = "Experience a superior, fully-managed WordPress hosting platform. Our service includes autoscaling resources, one-click staging, a global CDN, and comprehensive security to ensure your website excels.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
            </Helmet>

            {/* --- Hero & Intro Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h1>The WordPress Hosting Platform Built for Growth</h1>
                            <p className="lead">Give your WordPress website the elite performance, ironclad security, and effortless scalability it deserves with our market-leading managed hosting platform.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Optimised for Excellence</h2>
                            <p>WordPress is the undisputed champion of the web, a versatile and powerful tool for creators. However, standard hosting can often limit its true potential. At Host Dada, we've built a platform that is not just compatible with WordPress but is meticulously engineered and fine-tuned for it. Our hosting scales effortlessly to meet the demands of your site, whether you're a small business, a growing e-commerce store, or a high-traffic publisher.</p>
                            <p>From our autoscaling architecture that handles traffic spikes without breaking a sweat, to our integrated toolset that simplifies management, every aspect of our service is designed to let you focus on what you do best: creating incredible online experiences.</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <i className="fab fa-wordpress-simple" style={{ fontSize: '12rem', color: '#00729B' }}></i>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Pricing Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-4">Find Your Perfect WordPress Plan</h2>
                    <p className="text-center text-muted mb-4">Every plan is packed with premium features, offering unbeatable value and performance.</p>
                    {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} />
                    )}
                </Container>
            </Container>

            {/* --- Core Platform Features --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <h2>A Feature-Rich Platform as Standard</h2>
                        <p className="lead text-muted">Go beyond basic hosting with a suite of premium features included in every plan.</p>
                    </div>
                    <Row>
                        <Col md={4} className="mb-4">
                            <div className="feature-item-alt">
                                <i className="fas fa-server fa-2x text-primary mb-3"></i>
                                <h5>Autoscaling Platform</h5>
                                <p>Our hosting dynamically scales resources like CPU and RAM to meet your site's demands in real-time. Say goodbye to LVE limits and slowdowns during traffic surges; your site remains fast and responsive, always.</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="feature-item-alt">
                                <i className="fas fa-leaf fa-2x text-primary mb-3"></i>
                                <h5>100% Green Hosting</h5>
                                <p>Perform at your peak while protecting the planet. Our entire hosting infrastructure is powered by 100% renewable energy, so you can run your website sustainably without compromising on speed or reliability.</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="feature-item-alt">
                                <i className="fas fa-shipping-fast fa-2x text-primary mb-3"></i>
                                <h5>One-Click Migrations</h5>
                                <p>Moving your site to Host Dada is effortless. Our free, automated Migration Centre handles the entire transfer of your files, databases, and emails with zero downtime and complete accuracy.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- WordPress Tools Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Powerful Tools, Simplified Workflow</h2>
                        <p className="lead text-muted">Our integrated toolset gives you unparalleled control and simplifies complex tasks, saving you valuable time.</p>
                    </div>
                    <Row className="align-items-center mb-5">
                        <Col md={7}>
                            <h4>Safe Updates with One-Click Staging</h4>
                            <p>Confidently test changes in a secure environment. With a single click, create a complete replica of your live site. Experiment with new plugins, update your theme, or revise content without any risk. When your changes are perfect, deploy them to the live site instantly and seamlessly. It's the professional, risk-free way to manage your website's evolution.</p>
                        </Col>
                        <Col md={5} className="text-center">
                            <i className="fas fa-clone fa-6x text-primary"></i>
                        </Col>
                    </Row>
                    <Row className="align-items-center flex-row-reverse">
                        <Col md={7}>
                            <h4>Centralised WordPress Manager</h4>
                            <p>Take command of all your WordPress sites from one powerful dashboard. Activate, deactivate, or update plugins and themes across multiple sites simultaneously. Manage user accounts, run security checks, and ensure the integrity of your core files with our automated WordPress Checksum Report. This tool is a game-changer for agencies, developers, and anyone managing more than one site.</p>
                        </Col>
                        <Col md={5} className="text-center">
                            <i className="fas fa-tasks fa-6x text-primary"></i>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Performance Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Engineered for Unmatched Speed</h2>
                        <p className="lead text-muted">We obsess over performance so your pages load faster, rank higher, and convert better.</p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center feature-card">
                                <Card.Body>
                                    <i className="fas fa-tachometer-alt fa-2x text-primary mb-3"></i>
                                    <Card.Title>StackCache Optimisation</Card.Title>
                                    <Card.Text>Our proprietary caching technology works out of the box to dramatically speed up page loading for all your visitors. For fine-grained control, you can manage settings directly from the StackCache plugin within your WordPress admin area.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center feature-card">
                                <Card.Body>
                                    <i className="fas fa-globe-americas fa-2x text-primary mb-3"></i>
                                    <Card.Title>Global CDN & Edge Caching</Card.Title>
                                    <Card.Text>This isn’t a basic, stripped-down service. You get a fully-featured, unlimited global Content Delivery Network (CDN) that serves your images, CSS, and JavaScript from servers around the world, ensuring rapid delivery no matter where your audience is located.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center feature-card">
                                <Card.Body>
                                    <i className="fas fa-code fa-2x text-primary mb-3"></i>
                                    <Card.Title>Optimised Tech Stack</Card.Title>
                                    <Card.Text>We provide customised PHP-FPM and OPcache to ensure your site has the resources it needs. With full support for PHP versions 5.6 through 8.x and tools like WP-CLI and SSH access, developers have the power and flexibility they need.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            
           {/* --- Powerful WordPress Tools Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Your WordPress Command Centre</h2>
                        <p className="lead text-muted">Go beyond standard hosting with a suite of integrated tools designed to streamline your workflow and enhance your site's integrity.</p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-clone"></i></div>
                                    <Card.Title as="h5">One-Click Staging</Card.Title>
                                    <Card.Text className="text-muted">
                                        Safely test any changes before they go live. Create a complete, private replica of your site with a single click. Experiment with new plugins, update your theme, or revise content in a secure environment without affecting your visitors. When you're ready, deploy your changes to the live site seamlessly.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-tasks"></i></div>
                                    <Card.Title as="h5">Central WordPress Manager</Card.Title>
                                    <Card.Text className="text-muted">
                                        Manage all your WordPress sites from a single, powerful dashboard. Activate, deactivate, and update themes or plugins across multiple installations in bulk. This centralized control panel is a massive time-saver for anyone managing more than one website.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-tachometer-alt"></i></div>
                                    <Card.Title as="h5">StackCache Optimisation</Card.Title>
                                    <Card.Text className="text-muted">
                                        Our proprietary caching technology is engineered to make your pages fly. It works automatically from the moment your site is live to speed up loading times significantly for all your users. For those who like to tinker, advanced settings can be managed directly from the StackCache plugin.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-sync-alt"></i></div>
                                    <Card.Title as="h5">Automatic Core Updates</Card.Title>
                                    <Card.Text className="text-muted">
                                        We handle the core maintenance so you don't have to. Your WordPress website will always be kept on the latest version, with all critical security patches applied automatically by our system, ensuring your site remains secure and up-to-date.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-file-code"></i></div>
                                    <Card.Title as="h5">WordPress Checksum Report</Card.Title>
                                    <Card.Text className="text-muted">
                                        Maintain the integrity of your installation. Our system automatically checks your core WordPress files against the official repository. If any file has been modified or appears suspicious, we'll alert you immediately so you can take action.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-terminal"></i></div>
                                    <Card.Title as="h5">Developer Tools</Card.Title>
                                    <Card.Text className="text-muted">
                                        We provide a full suite of tools for advanced users and developers. Get direct access to WP-CLI, SSH, and SFTP. Manage your environment with PHP version control, phpMyAdmin for databases, and set up scheduled scripts (cron jobs).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Security Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>A Fortress for Your Website</h2>
                        <p className="lead text-muted">Our multi-layered security strategy proactively protects your website from a wide range of digital threats, 24/7.</p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="security-feature-item">
                                <div className="security-feature-icon"><i className="fas fa-network-wired"></i></div>
                                <h5>Enterprise-Grade DDoS Defence</h5>
                                <p className="text-muted">
                                    Our network is shielded by a massive 1 Tbps+ DDoS mitigation capacity. This system automatically detects and routes malicious attack traffic away from your site, ensuring that your genuine users can always get through, even during a large-scale attack.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="security-feature-item">
                                <div className="security-feature-icon"><i className="fas fa-shield-alt"></i></div>
                                <h5>Intelligent Web Application Firewall (WAF)</h5>
                                <p className="text-muted">
                                    The Host Dada WAF proactively protects your data and software by intelligently blocking suspicious activity. It defends against common WordPress exploits like SQL injection and cross-site scripting, neutralizing threats before they can reach your website.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="security-feature-item">
                                <div className="security-feature-icon"><i className="fas fa-lock"></i></div>
                                <h5>Universal SSL Encryption</h5>
                                <p className="text-muted">
                                    Boost customer confidence and improve your SEO with free, automatically-renewing SSL certificates for every website you host with us. This ensures all data transferred between your site and its visitors is fully encrypted and secure.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="security-feature-item">
                                <div className="security-feature-icon"><i className="fas fa-bug"></i></div>
                                <h5>Automatic & On-Demand Malware Scans</h5>
                                <p className="text-muted">
                                    We automatically scan your website's files for malware every day and provide a detailed report of any issues found. After you've cleaned any files, you can initiate a re-scan instantly from your control panel to confirm your site is clean.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="security-feature-item">
                                <div className="security-feature-icon"><i className="fas fa-user-lock"></i></div>
                                <h5>Comprehensive Login Security</h5>
                                <p className="text-muted">
                                    We provide multiple layers of access control to prevent unauthorized entry. This includes two-factor authentication (2FA), an FTP security lock, brute-force login protection, and the ability to block access from specific IP addresses or entire countries.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="security-feature-item">
                                <div className="security-feature-icon"><i className="fas fa-credit-card"></i></div>
                                <h5>PCI Compliant Servers</h5>
                                <p className="text-muted">
                                    For e-commerce sites, security is paramount. Our servers are fully compliant with the Payment Card Industry Data Security Standard (PCI DSS), providing the safe and secure environment required to process online payments and handle sensitive customer data.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

         {/* --- The Ideal Hosting Partner For... Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <h2 className="text-center mb-5">The Ideal Hosting Partner For...</h2>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="use-case-item">
                                <i className="fas fa-users fa-2x mb-3"></i>
                                <h5>Agencies & Developers</h5>
                                <p>Deliver exceptional results for your clients with a platform you can rely on. Our WordPress Manager and one-click staging tools dramatically accelerate your workflow, making it simple to manage hundreds of client sites as efficiently as one.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="use-case-item">
                                <i className="fas fa-store fa-2x mb-3"></i>
                                <h5>WooCommerce Stores</h5>
                                <p>Power your e-commerce ambitions with hosting built for conversions. Our PCI-compliant servers, optimised PHP, and lightning-fast load times create a seamless and secure shopping experience, helping you boost revenue and build customer trust.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="use-case-item">
                                <i className="fas fa-briefcase fa-2x mb-3"></i>
                                <h5>Small Businesses</h5>
                                <p>Get high-performance, dependable WordPress hosting that works as hard as you do. We handle the technical complexities so you can focus on what truly matters: serving your customers and growing your business.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="use-case-item">
                                <i className="fas fa-newspaper fa-2x mb-3"></i>
                                <h5>Publishers & Bloggers</h5>
                                <p>Never lose a reader to downtime. Our "viral-proof" autoscaling platform is ready for any traffic spike, ensuring your content is always available. With our global CDN, your articles will load instantly for fans all over the world.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="use-case-item">
                                <i className="fas fa-user-friends fa-2x mb-3"></i>
                                <h5>Membership Sites</h5>
                                <p>Cultivate a thriving community on a platform built for stability and speed. Our hosting ensures your members have a consistently fast and reliable experience, allowing you to grow your community without ever worrying about uptime or performance.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="use-case-item">
                                <i className="fas fa-graduation-cap fa-2x mb-3"></i>
                                <h5>Education & LMS</h5>
                                <p>Whether you're running online courses or a coaching business, our platform provides the fast, flexible, and secure foundation you need to share your knowledge with the world, ensuring a smooth learning experience for all your students.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

          {/* --- FAQ Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-4">Your WordPress Hosting Questions Answered</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What makes your WordPress Hosting different from regular web hosting?</Accordion.Header>
                            <Accordion.Body>
                                While our regular hosting is excellent, our WordPress Hosting is a specialised environment meticulously engineered for a single purpose: to run WordPress at peak performance. The entire server stack, from our customised PHP-FPM and OPcache configurations to our proprietary StackCache plugin, is fine-tuned to boost WordPress speed and efficiency. You also get a suite of powerful, integrated tools like one-click staging and a central WordPress Manager that you won't find on standard plans. It’s a fully managed, all-inclusive solution designed to make your WordPress experience seamless and powerful.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do you handle website migrations?</Accordion.Header>
                            <Accordion.Body>
                                We believe moving to a better host should be painless. That’s why we offer a free, unlimited, and automated Migration Centre. Simply provide the FTP details of your old hosting account, and our system will securely transfer all your WordPress files, databases, and even emails to our platform with precision. The process is designed to ensure zero downtime for your live site. Should you have any questions, our expert, in-house support team is on standby to assist you every step of the way.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>My website gets traffic spikes. How does your platform handle that?</Accordion.Header>
                            <Accordion.Body>
                                Our platform is built for exactly this scenario. We use advanced autoscaling technology that automatically and instantly allocates more server resources (like CPU and RAM) to your website the moment a traffic surge begins. Unlike hosts that impose restrictive LVE limits, our platform ensures your site remains fast and responsive without slowdowns or errors. Best of all, since bandwidth is unlimited on our plans, you won't face surprise charges for your success. You only need to consider a plan upgrade when you consistently need a higher baseline of resources.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is WordPress Staging and how does it work?</Accordion.Header>
                            <Accordion.Body>
                                Our WordPress Staging tool is a professional feature that eliminates the risk of making changes to your live site. With a single click, you can create a complete, private clone of your entire website. On this "staging" site, you can safely test new plugins, experiment with theme updates, or add new content without your visitors seeing a thing. Once you are completely happy with the results, you can "push" those changes to your live site seamlessly. It’s the safest way to manage and develop your website.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Can I use any theme or plugin I want?</Accordion.Header>
                            <Accordion.Body>
                                Yes, you have complete freedom to install and use any WordPress themes and plugins from reputable sources. However, you'll find that many premium plugins you might have paid for previously are no longer necessary. Our platform includes server-level caching, a global CDN, image optimisation, and robust security features out of the box. By relying on our integrated solutions, you can often reduce the number of plugins you use, which typically leads to a faster and more secure website.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How do you protect my website from security threats?</Accordion.Header>
                            <Accordion.Body>
                                We employ a multi-layered, proactive security strategy. Your site is protected by a massive 1 Tbps+ DDoS shield, an intelligent Web Application Firewall (WAF) that blocks threats, and automatic daily malware scanning. We also provide free Wildcard SSL certificates, brute-force login protection, and two-factor authentication. Furthermore, our WordPress Checksum Report regularly verifies your core files to ensure they haven't been tampered with, giving you comprehensive peace of mind.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Is this platform suitable for a WooCommerce online store?</Accordion.Header>
                            <Accordion.Body>
                                Absolutely. Our Managed WordPress Hosting is the ideal environment for WooCommerce. The high-performance architecture and StackCache optimisation ensure fast page loads, which is crucial for reducing cart abandonment and improving SEO. Furthermore, our servers are fully PCI Compliant, providing the secure foundation required to handle sensitive payment data and build trust with your customers.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>How do I access my site's files and database?</Accordion.Header>
                            <Accordion.Body>
                                You have full control. Our feature-packed File Manager in the Host Dada control panel provides an intuitive interface to upload, download, edit, and manage your WordPress files. For your database, we provide direct access via phpMyAdmin, the industry-standard tool for database management. For advanced users, we also include WP-CLI and secure SSH access.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>What happens if I have a technical problem?</Accordion.Header>
                            <Accordion.Body>
                                Your first point of contact should be our in-house, expert support team, available 24/7. They are genuine WordPress enthusiasts and are trained to solve complex problems quickly and efficiently, even if they aren't strictly related to hosting. We don't use canned responses; we investigate your issue until it's resolved. For self-help, we also provide an extensive Knowledge Base and a safe staging environment where you can troubleshoot without affecting your live site.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>What does "100% Green Hosting" mean?</Accordion.Header>
                            <Accordion.Body>
                                It means that our entire hosting platform, from the servers to the network infrastructure, is powered by 100% renewable energy sources. We are committed to sustainability and ensuring that your website's carbon footprint is kept to an absolute minimum, allowing you to run a high-performance website that is also kind to the planet.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>
        </>
    );
};

export default WordPressHosting;