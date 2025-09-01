// src/pages/LinuxHosting.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Spinner, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import PricingTable from '../components/PricingTable';
import './LinuxHosting.css';

const LinuxHosting = () => {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ gid: 38 }),
                });
                const data = await response.json();
                if (!response.ok) throw new Error(data.error || 'Failed to fetch products.');
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const pageTitle = "Linux Hosting | True Autoscaling Cloud Platform | Host Dada";
    const pageDescription = "Discover our next-generation Linux Hosting platform, featuring true autoscaling technology, a free global CDN, and optimised PHP for maximum performance and reliability.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* --- Intro Section --- */}
            <Container fluid className="section-container py-5 bg-white">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h1>The Smarter Linux Hosting Platform</h1>
                            <p className="lead">Experience the future of web hosting with our proprietary autoscaling cloud, engineered for superior speed, security, and reliability.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Versatile by Nature, Powerful by Design</h2>
                            <p>Our Linux platform is the ultimate choice for almost any website. Built for speed and flexibility by our in-house experts, we've fine-tuned the Apache web server for peak performance. It's the perfect foundation for your project, offering a stable, secure, and highly customisable environment, complete with over 80 one-click installers for popular applications like Joomla!, Drupal, and Magento.</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <img src="https://hostdada.uk/wp-content/uploads/2024/07/linux.svg" alt="Linux Logo" style={{ width: '20rem' }} />
                        </Col>
                    </Row>
                </Container>
            </Container>

             {/* --- Core Pillars Section --- */}
            <Container fluid className="section-container py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2>The Host Dada Difference</h2>
                        <p className="lead text-muted">Our platform is built on six pillars of innovation that set us apart from traditional hosting.</p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Autoscaling Servers</Card.Title>
                                    <Card.Text>Our pioneering autoscaling technology ensures your site gets the power it needs, precisely when it needs it—however busy it gets.</Card.Text>
                                    <Button href="#autoscaling" variant="outline-primary" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Global CDN</Card.Title>
                                    <Card.Text>Our free Content Delivery Network caches your content in data centres across the world for a faster, global website.</Card.Text>
                                     <Button href="#cdn" variant="outline-primary" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Optimised PHP</Card.Title>
                                    <Card.Text>Our custom, in-house PHP code makes every website load faster because we aren’t constrained by the limits of old-school hosting.</Card.Text>
                                     <Button href="#performance" variant="outline-primary" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Intelligent Load Balancing</Card.Title>
                                    <Card.Text>Our reputation for rock-solid server uptime is built on innovative load balancing that keeps your site online and consistently fast.</Card.Text>
                                    <Button href="#autoscaling" variant="outline-primary" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Two Optimised Platforms</Card.Title>
                                    <Card.Text>Choose the perfect foundation. Both our Linux and WordPress platforms are individually optimised for stellar, specialised performance.</Card.Text>
                                     <Button href="#platforms" variant="outline-primary" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 text-center pillar-card">
                                <Card.Body>
                                    <Card.Title>Google-Based DNS</Card.Title>
                                    <Card.Text>Your site is always accessible thanks to the world-class technology from Google that we use to translate domain names at incredible speed.</Card.Text>
                                     <Button href="#performance" variant="outline-primary" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Pricing Section --- */}
            <Container fluid className="section-container py-5 bg-white" id="pricing">
                <Container>
                    <h2 className="text-center mb-4">Choose Your Linux Hosting Plan</h2>
                    {loading ? (
                        <div className="text-center"><Spinner animation="border" /></div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <PricingTable products={products} />
                    )}
                </Container>
            </Container>

            {/* --- Autoscaling & Load Balancing Section --- */}
            <Container fluid className="section-container py-5 bg-light" id="autoscaling">
                <Container>
                    <div className="text-center mb-5">
                        <h2>True Elastic Cloud: Autoscaling & Load Balancing</h2>
                        <p className="lead text-muted">Forget the limitations of a single server. Our proprietary technology gives your website access to an entire platform.</p>
                    </div>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h4>Always the Perfect Amount of Power</h4>
                            <p>Our proprietary autoscaling technology means that resources like bandwidth, memory, and processing power are scaled up or down instantly based on demand. If your website experiences a sudden surge in traffic, the platform automatically allocates more resources to ensure every visitor gets the same fast, reliable experience.</p>
                            <p>This is possible because your site isn't confined to one or two servers. Instead, it can draw from the resources of our entire multi-server platform. Crucially, this isolates your site from "noisy neighbours," a common problem with traditional cPanel hosts where a busy site can slow down all others on the same server.</p>
                        </Col>
                        <Col md={6}>
                            <img src="https://i.imgur.com/3Z3L1Yh.png" alt="Autoscaling server diagram" className="img-fluid rounded" />
                        </Col>
                    </Row>
                     <Row className="align-items-center mt-5 flex-row-reverse">
                        <Col md={6}>
                            <h4>Smarter Load Balancing for Unbeatable Uptime</h4>
                            <p>While other hosts use load balancing for simple failover (moving your site if a server fails), our system is far more advanced. Our global load balancing uses intelligent monitors that respond to traffic load in real-time, distributing requests across multiple servers *before* any single one becomes overwhelmed. This proactive approach means your site doesn't just stay online; it stays consistently fast, no matter the load on the platform.</p>
                        </Col>
                        <Col md={6}>
                             <img src="https://i.imgur.com/yV8Vj9k.png" alt="Load balancing diagram" className="img-fluid rounded" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Performance, Platforms & Hardware Section --- */}
            <Container fluid className="section-container py-5 bg-white" id="performance">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Engineered for Maximum Speed & Flexibility</h2>
                        <p className="lead text-muted">We custom-built our software and selected our hardware for one purpose: to be the fastest in the industry.</p>
                    </div>
                    <Row>
                        <Col md={6} className="mb-4">
                            <h4>Unleashed & Optimised PHP</h4>
                            <p>Standard speed-boosting products don't work with modern, autoscaling platforms. So, we wrote our own. Our developers have customised PHP-FPM and OPcache to guarantee your site gets the resources it needs, with significant speed improvements on all PHP versions 5.6 and above. Because we aren't constrained by outdated systems like CloudLinux, we don't need to impose artificial limits on cores, memory, or processes.</p>
                        </Col>
                        <Col md={6} className="mb-4">
                            <h4>Google-Powered DNS</h4>
                            <p>The Domain Name System (DNS) is the internet's phonebook, and its speed is critical. To ensure the fastest and most stable response times, we built our entire DNS platform on the same global fibre infrastructure that powers Google. This provides a rock-solid and rapid response for your visitors, no matter the traffic load.</p>
                        </Col>
                        <Col md={6} className="mb-4" id="platforms">
                             <h4>Two Specialised Platforms</h4>
                             <p>Choose the perfect foundation for your project. Our **Linux platform** is the versatile choice, ideal for most websites and fine-tuned for Apache performance with over 80 one-click app installers. For those using WordPress, our dedicated **WordPress platform** is performance-tuned to make sites load up to 48 times faster, featuring exclusive tools like our Host Dada Cache plugin and one-click staging.</p>
                        </Col>
                        <Col md={6} className="mb-4">
                            <h4>Enterprise-Grade Hardware</h4>
                            <p>Our platform runs on premium Dell servers, each equipped with dual Intel Xeon Scalable 12-core processors and 64 GB of blisteringly fast DDR4 RAM. We exclusively use Samsung Enterprise SSDs in our storage arrays, avoiding the cheap hardware used by hosts who prioritize low sticker prices over actual performance. Our platform is also built for the future, with full support for IPv6 and HTTP/2 as standard for faster, more efficient browsing.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            
            {/* --- CDN & Acceleration Section --- */}
            <Container fluid className="section-container py-5 bg-light" id="cdn">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Free Global Content Delivery Network</h2>
                        <p className="lead text-muted">Accelerate your website for visitors around the world with our advanced, free CDN and Website Acceleration Suite.</p>
                    </div>
                     <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-images"></i></div>
                                    <Card.Title as="h5">Automatic Image Optimisation</Card.Title>
                                    <Card.Text className="text-muted">
                                       Our CDN automatically scans, resizes, and compresses your images, converting them to next-gen formats like WebP with no visible loss in quality for faster loading.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-file-code"></i></div>
                                    <Card.Title as="h5">Code Minification</Card.Title>
                                    <Card.Text className="text-muted">
                                        To reduce browser processing time, our CDN can automatically minify your HTML, CSS, and JavaScript files by stripping out unnecessary whitespace and comments.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 feature-card">
                                <Card.Body>
                                    <div className="feature-icon-top"><i className="fas fa-layer-group"></i></div>
                                    <Card.Title as="h5">Edge Caching & Lazy Loading</Card.Title>
                                    <Card.Text className="text-muted">
                                        We cache your static content at our global edge nodes, closer to your visitors. Lazy loading defers off-screen images, ensuring the visible part of your page loads first.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* --- Security & Support Section --- */}
             <Container fluid className="section-container py-5 bg-white" id="security">
                <Container>
                    <div className="text-center mb-5">
                        <h2>Secure by Default, Supported by Experts</h2>
                    </div>
                    <Row>
                        <Col md={6} className="mb-4">
                             <h4>Comprehensive Data Security</h4>
                             <p>Security is baked into every layer of our platform. Our storage is so resilient that entire servers can fail with no downtime. We take daily, off-site backups for disaster recovery. Furthermore, we operate exclusively from state-of-the-art, ISO 27001 accredited data centres with exceptional uptime records and robust physical security.</p>
                        </Col>
                         <Col md={6} className="mb-4">
                            <h4>24x7 Expert Support</h4>
                            <p>Our award-winning support team is always ready to help. Available 24/7 via live chat and our ticket system, they are seasoned industry experts who provide fast, reliable, and friendly solutions. When you contact us, you're talking to someone who knows our platform inside and out and is dedicated to resolving your issue efficiently.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* --- FAQ Section --- */}
            <Container fluid className="section-container py-5 bg-white" id="faq">
                <Container>
                    <h2 className="text-center mb-4">Your Linux Hosting Questions Answered</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is "Autoscaling Hosting" and how does it work?</Accordion.Header>
                            <Accordion.Body>
                                Autoscaling is our proprietary technology that allows your website to access resources from our entire server platform, not just a single server. It means that resources like CPU power, memory, and bandwidth are automatically and instantly scaled up or down to meet real-time traffic demands. If your site suddenly becomes popular, it won't slow down or crash; our platform simply allocates more power to it, ensuring a consistently fast experience for every visitor.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How is your load balancing different from other hosts?</Accordion.Header>
                            <Accordion.Body>
                                Many hosts use load balancing for simple "failover," meaning if a server goes down, your site is moved to a backup. While we offer this as a baseline, our system is far more intelligent. Our global load balancing proactively monitors traffic across the platform and distributes it across multiple servers *before* any single machine becomes overloaded. This doesn't just keep your site online; it guarantees it remains fast and responsive at all times, which is a level of reliability most standard hosts can't provide.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>You mention "Optimised PHP." What does that mean for my site?</Accordion.Header>
                            <Accordion.Body>
                                Standard, off-the-shelf PHP configurations are not designed for a modern, autoscaling environment. We wrote our own. Our developers have customised PHP-FPM and OPcache, creating a unique version that works in harmony with our platform to deliver superior performance. Because we aren't constrained by older systems like CloudLinux, we don’t need to impose artificial limits on cores or processes. Your site gets the resources it needs to run as fast as possible, with significant speed improvements on all modern PHP versions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is the benefit of a Content Delivery Network (CDN)?</Accordion.Header>
                            <Accordion.Body>
                                Our free, fully-featured global CDN dramatically speeds up your website for visitors around the world. It works by caching copies of your content (like images, CSS, and JavaScript) in data centres across the globe. When a visitor comes to your site, the content is delivered from the server closest to them, drastically reducing latency and loading times. Our CDN also includes a full Website Acceleration Suite, which automatically optimises images and minifies code for even better performance.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Can I host applications other than WordPress on the Linux platform?</Accordion.Header>
                            <Accordion.Body>
                                Yes, absolutely. Our Linux platform is our most versatile and powerful option, designed to support a wide range of applications. It's the perfect choice for websites built with popular content management systems like Joomla! and Drupal, or e-commerce platforms like Magento. With over 80 one-click installers available, you can easily deploy your favourite open-source software.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What kind of hardware do you use for your servers?</Accordion.Header>
                            <Accordion.Body>
                                We believe that high performance starts with high-quality hardware. Our entire platform is built on premium Dell web servers, each featuring dual 12-core Intel Xeon Scalable processors for a total of 48 logical cores per machine. These are paired with 64 GB of fast 3200 MHz DDR4 RAM and enterprise-grade Samsung SSDs for storage. We don't cut corners with cheap hardware; we invest in a powerful foundation to ensure your website is consistently fast and reliable.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>How do you ensure my data is safe and backed up?</Accordion.Header>
                            <Accordion.Body>
                                Data security is integral to our platform. Our storage arrays are built with high-level resiliency, meaning entire servers and disks can fail with no downtime or data loss. For disaster recovery, we take automatic daily backups of all your files and databases and store them off-site in a secure location. This is complemented by the robust physical security at our ISO 27001 accredited data centres.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Is your hosting ready for modern web standards?</Accordion.Header>
                            <Accordion.Body>
                                Yes. Our hosting platform is built for the future. We provide full support for IPv6, the next generation of IP addresses. All our servers also use HTTP/2, a major revision of the web protocol that allows browsers to request and receive more data simultaneously. This results in faster page loads, a better user experience, and can provide a boost to your SEO rankings.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>What kind of support can I expect if I run into trouble?</Accordion.Header>
                            <Accordion.Body>
                                You can expect fast, friendly, and genuinely expert support, 24/7. Our award-winning team is based in-house and knows our platform inside and out. When you contact us via live chat or our ticket system, you're not getting a scripted response; you're getting a dedicated professional who will work to resolve your issue efficiently. Their wealth of industry experience means they can handle any challenge with ease.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Do I get a free SSL certificate with my hosting?</Accordion.Header>
                            <Accordion.Body>
                                Yes, every website hosted on our platform comes with a free SSL certificate. This enables the padlock in your visitors' browsers and encrypts all data sent to and from our servers, which is essential for security, visitor trust, and modern SEO. Our free CDN also includes full Wildcard SSL support, allowing you to secure all your subdomains with a single certificate.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>
        </>
    );
};

export default LinuxHosting;