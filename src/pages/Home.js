// src/pages/Home.js
import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
} from 'react-bootstrap';

function Home() {
  return (
    <div className="home-page">

      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-section bg-light py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Column: Text */}
            <Col md={6} className="mb-4">
              <h1 className="mb-3">Website &amp; Email Hosting You Can Rely On</h1>
              <h5 className="mb-3">Not All Hosting Is Created Equal</h5>
              <Button variant="primary" size="lg" className="mb-3">
                Get Started
              </Button>
              <h4 className="text-muted">Starting at $2.95/mo*</h4>
            </Col>

            {/* Right Column: Hero Image */}
            <Col md={6} className="text-center">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/hosting-server.png"
                alt="Hero Server"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== HOSTING ICONS SECTION ==================== */}
      <section className="hosting-icons-section py-5">
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h2 className="mb-4">Supported Platforms / Technologies</h2>
            </Col>

            {/* 5 icons: Linux, WordPress, Windows, AWS, GCP */}
            <Col xs={6} md={2} className="mb-4 offset-md-1">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/linux.svg"
                alt="Linux"
                fluid
              />
            </Col>
            <Col xs={6} md={2} className="mb-4">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/wordpress.svg"
                alt="WordPress"
                fluid
              />
            </Col>
            <Col xs={6} md={2} className="mb-4">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/windows.svg"
                alt="Windows"
                fluid
              />
            </Col>
            <Col xs={6} md={2} className="mb-4">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/aws.svg"
                alt="AWS"
                fluid
              />
            </Col>
            <Col xs={6} md={2} className="mb-4">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/gcp.svg"
                alt="Google Cloud"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== DOMAIN SEARCH SECTION ==================== */}
      <section className="domain-search-section position-relative bg-white py-5">
        <Container>
          <Row className="text-center justify-content-center">
            <Col md={8}>
              <h2 className="mb-3">Find Your Awesome Domain</h2>
              <h4 className="text-muted mb-4">
                Gravida per sem penatibus nascetur fusce porta rutrum litora vulputate nisl
              </h4>

              {/* Domain Search Box */}
              <Form className="d-flex mb-4">
                <Form.Control
                  type="search"
                  placeholder="Search domain..."
                  aria-label="Search domain"
                  className="me-2"
                />
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>

              {/* TLD icons: .com, .net, .org, .store */}
              <Row className="mt-4">
                <Col xs={6} md={3} className="mb-3">
                  <Image
                    src="https://hostdada.uk/wp-content/uploads/2024/07/com.png"
                    alt=".com"
                    fluid
                  />
                  <h5 className="mt-2">$ 8.99</h5>
                </Col>
                <Col xs={6} md={3} className="mb-3">
                  <Image
                    src="https://hostdada.uk/wp-content/uploads/2024/07/net.png"
                    alt=".net"
                    fluid
                  />
                  <h5 className="mt-2">$ 8.99</h5>
                </Col>
                <Col xs={6} md={3} className="mb-3">
                  <Image
                    src="https://hostdada.uk/wp-content/uploads/2024/07/org.png"
                    alt=".org"
                    fluid
                  />
                  <h5 className="mt-2">$ 8.99</h5>
                </Col>
                <Col xs={6} md={3} className="mb-3">
                  <Image
                    src="https://hostdada.uk/wp-content/uploads/2024/07/store.png"
                    alt=".store"
                    fluid
                  />
                  <h5 className="mt-2">$ 8.99</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== HOSTING PERFORMANCE SECTION ==================== */}
      <section className="hosting-performance-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/website-speed.png"
                alt="Performance"
                fluid
              />
            </Col>
            <Col md={6}>
              <h2>World Class Hosting Performance</h2>
              <p>
                If you have a resource heavy site with lots of visitors, our Autoscaling technology
                ensures your site loads fast for all your visitors...
              </p>
              <p>
                We host websites across multiple servers and resources are kept available to cope
                with a spike in traffic...
              </p>
              <p>
                We use a method called “load balancing” which shares traffic across several servers
                so if the server that your website is on goes down...
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== EMAIL HOSTING SECTION ==================== */}
      <section className="email-hosting-section bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <h2>Business-Class Email Hosting</h2>
              <p>
                Our email hosting service offers secure, business-class email with flexible
                mailbox limits. Enjoy easy, unlimited email migrations without paying extra...
              </p>
              <p>
                Make a professional impression with an email address that matches your domain.
                Manage email forwarding and autoresponders easily...
              </p>
              <p>
                Our service includes advanced antivirus and anti-spam protection, using three
                layers of inbound scanning...
              </p>
              <Button variant="primary">View All Review</Button>
            </Col>
            <Col md={6}>
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/hosted-email.png"
                alt="Hosted Email"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== VPS HOSTING SECTION ==================== */}
      <section className="vps-hosting-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2 mb-4">
              <h2>VPS Hosting Services</h2>
              <p>
                Experience the ultimate in VPS hosting with our state-of-the-art services.
                Our enterprise-level Samsung SSD storage ensures maximum speed...
              </p>
              <p>
                Easily scale your VPS from a single server to a load-balanced cluster as your
                business grows. Data protection is guaranteed with redundant hardware RAID...
              </p>
              <p>
                Deploy your choice of Windows or Linux in one click or install any OS needed.
                Our data centers in the UK and US are ISO 27001 and PCI compliant...
              </p>
            </Col>
            <Col md={6} className="order-md-1 mb-4">
              {/* You can use a different image if you like; here's a placeholder */}
              <Image
                src="https://hostdada.uk/wp-content/uploads/2024/07/Server.png"
                alt="VPS Hosting"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== CTA: READY TO GET STARTED ==================== */}
      <section className="cta-section bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Ready To Get Started?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Col>
            <Col md={6} className="text-md-end text-center">
              <Button variant="outline-light" size="lg">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
