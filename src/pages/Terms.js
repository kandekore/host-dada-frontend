// src/pages/Terms.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './Terms.css';

const Terms = () => {
  const pageTitle = 'Terms of Service & SLA | Host Dada';
  const pageDescription =
    'Host Dada Terms of Service covering Website Hosting, Domain Registration, Service Level Agreement (SLA), Support, Data Protection and Security.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <Container fluid className="section-container py-5 bg-white">
        <Container className="terms-container">
          <Row>
            <Col>
              <h1 className="text-center mb-5">Terms of Service & Service Level Agreement</h1>

              <p className="mb-4">
                <strong>Provider:</strong> Host Dada Ltd (Company No. 14514477), 124 City Road, London, United
                Kingdom, EC1V 2NX (“Host Dada”, “we”, “us”, “our”).
              </p>

              {/* Intro / Whereas */}
              <section id="intro" className="terms-section">
                <p>
                  These Terms govern the provision of our <strong>Website Hosting</strong> and <strong>Domain Name
                  Registration</strong> services to the customer (“Client”, “you”). By ordering or using our services,
                  you agree to these Terms, which include the <strong>Service Level Agreement (SLA)</strong>, Data
                  Protection, and Security obligations.
                </p>
              </section>

              {/* 1. Definitions */}
              <section id="definitions" className="terms-section">
                <h2>1. Definitions</h2>
                <ul>
                  <li><strong>Business Day:</strong> a day (other than Saturday or Sunday) on which banks are open in England.</li>
                  <li><strong>Commencement Date:</strong> the date your hosting service or domain is activated.</li>
                  <li><strong>Downtime:</strong> non-availability of the Hosting Services as measured in Clause 7.</li>
                  <li><strong>Fees:</strong> the amounts payable for services as set out at purchase and on invoices.</li>
                  <li><strong>Hosting Package:</strong> the plan chosen by you which specifies resources, features and pricing.</li>
                  <li><strong>Support Ticket:</strong> a request raised via our helpdesk or support email.</li>
                  <li><strong>Uptime:</strong> the fully functional availability of the Hosting Services.</li>
                  <li><strong>Data Protection Legislation:</strong> UK GDPR, Data Protection Act 2018, and related laws.</li>
                </ul>
                <p>Interpretation follows standard commercial rules and applies throughout these Terms.</p>
              </section>

              {/* 2. Term */}
              <section id="term" className="terms-section">
                <h2>2. Term</h2>
                <p>
                  The Agreement starts on the <strong>Commencement Date</strong> and continues for the initial minimum term
                  you select (e.g., 12/24/36 months), renewing for subsequent periods unless cancelled in accordance
                  with Clause 12.
                </p>
              </section>

              {/* 3. Our obligations */}
              <section id="provider-obligations" className="terms-section">
                <h2>3. Our Obligations</h2>
                <ul>
                  <li>Provide Hosting Services with reasonable skill and care, in line with your Hosting Package.</li>
                  <li>Provide Support during: <strong>Mon–Fri 09:00–17:00</strong> and <strong>Sat–Sun 09:00–13:00</strong>.</li>
                  <li>Support requests: <a href="mailto:support@hostdada.co.uk">support@hostdada.co.uk</a> or our website form.</li>
                  <li>Target urgent ticket first response within ~1 hour; all tickets within 1 Business Day.</li>
                </ul>
              </section>

              {/* 4. Client obligations */}
              <section id="client-obligations" className="terms-section">
                <h2>4. Client Obligations</h2>
                <ul>
                  <li>Provide accurate information and maintain account contact details and email address.</li>
                  <li>Comply with Acceptable Use (no unlawful content/activity; no abuse; fair usage of resources).</li>
                  <li>Keep your login credentials secure and use strong passwords; maintain your application security.</li>
                </ul>
              </section>

              {/* 5. Fees */}
              <section id="fees" className="terms-section">
                <h2>5. Fees & Payment</h2>
                <ul>
                  <li>Fees are due in advance per your billing cycle (monthly/annual/bi-annual/tri-annual).</li>
                  <li>We accept credit/debit card, bank transfer, and direct debit. Late balances may accrue interest as set out herein.</li>
                </ul>
              </section>

              {/* 6. Provision of Hosting */}
              <section id="hosting-services" className="terms-section">
                <h2>6. Hosting Services</h2>
                <ul>
                  <li>We’ll provide services per your Hosting Package (resources, features, limits, add-ons).</li>
                  <li>Backups (where included) are provided with reasonable care but are not a substitute for your own backups.</li>
                  <li>Migration assistance is provided on best-effort basis where included in your plan.</li>
                </ul>
                <p>Statutory and regulatory compliance is maintained as applicable.</p>
              </section>

              {/* 7. SLA */}
              <section id="sla" className="terms-section">
                <h2>7. Service Levels (SLA)</h2>
                <ul>
                  <li><strong>Uptime target:</strong> 99.9% monthly.</li>
                  <li><strong>Measurement window:</strong> Downtime is counted in whole 60-minute blocks beginning when you open a Support Ticket and we verify the incident.</li>
                  <li><strong>Credits:</strong> 5% of the monthly hosting fee per whole day of Downtime (max 50% credit for the affected month). Excludes scheduled maintenance, external network failures, your system/application faults, exceeding package limits, or events beyond our reasonable control.</li>
                </ul>
              </section>

              {/* 8. Maintenance */}
              <section id="maintenance" className="terms-section">
                <h2>8. Scheduled Maintenance</h2>
                <p>
                  We’ll strive to minimise impact and provide at least <strong>24 hours’ notice</strong> of Scheduled
                  Maintenance where possible. Emergency maintenance may occur without notice to protect platform stability.
                </p>
              </section>

              {/* 9. Monitoring */}
              <section id="monitoring" className="terms-section">
                <h2>9. Service & Performance Monitoring</h2>
                <p>We monitor and respond to incidents to maintain the Service Levels described above.</p>
              </section>

              {/* 10–11 Confidentiality & IPR */}
              <section id="confidentiality" className="terms-section">
                <h2>10. Confidentiality</h2>
                <p>We both keep each other’s confidential information secret, using it only as necessary to deliver the services.</p>
              </section>

              <section id="ipr" className="terms-section">
                <h2>11. Intellectual Property</h2>
                <p>You retain ownership of your content. You warrant you have rights to host your materials and indemnify us against third-party IP claims arising from your content.</p>
              </section>

              {/* 12. Termination */}
              <section id="termination" className="terms-section">
                <h2>12. Suspension & Termination</h2>
                <ul>
                  <li>Either party may terminate with 30 days’ notice (effective after any minimum term).</li>
                  <li>We may suspend/terminate for non-payment, material breach, abuse, or legal/regulatory requirement.</li>
                  <li>Your right to terminate for repeated SLA breach remains as set out in this SLA.</li>
                </ul>
              </section>

              {/* 13. Post-termination */}
              <section id="post-termination" className="terms-section">
                <h2>13. Post-Termination</h2>
                <p>All sums fall due; surviving clauses remain; we’ll remove your data from our systems after lawful retention periods and return or delete personal data per Data Protection.</p>
              </section>

              {/* 14. Liability */}
              <section id="liability" className="terms-section">
                <h2>14. Liability</h2>
                <ul>
                  <li>Nothing limits liability for death/personal injury due to negligence or for fraud.</li>
                  <li>No liability for indirect/consequential loss (e.g., lost profits, revenue, goodwill).</li>
                  <li>Aggregate liability cap applies as stated in your hosting order/plan for the affected period.</li>
                </ul>
              </section>

              {/* 15. Force majeure */}
              <section id="force-majeure" className="terms-section">
                <h2>15. Force Majeure</h2>
                <p>Neither party is liable for events beyond reasonable control (e.g., ISP failure, power outage, extreme weather).</p>
              </section>

              {/* 16–18 Data Protection & Security */}
              <section id="data-protection" className="terms-section">
                <h2>16. Data Protection</h2>
                <p>
                  Both parties will comply with applicable Data Protection Legislation. See our privacy policy for full
                  details of processing, legal bases, retention and your rights.
                </p>
              </section>

              <section id="data-processing" className="terms-section">
                <h2>17. Data Processing</h2>
                <p>
                  Where we process personal data as your processor, we will: act on your documented instructions; apply
                  appropriate security; ensure confidentiality; notify personal data breaches without undue delay; assist
                  with data subject requests; and delete/return personal data at contract end (unless retention is required
                  by law).
                </p>
              </section>

              <section id="security" className="terms-section">
                <h2>18. Network & Information Security</h2>
                <p>
                  We implement technical and organisational measures to protect our platform and will notify you of
                  security incidents that could affect you, co-operating as required to support your regulatory obligations.
                </p>
              </section>

              {/* 19. Domain Registration */}
              <section id="domains" className="terms-section">
                <h2>19. Domain Name Registration & Management</h2>
                <ul>
                  <li><strong>Registrar Relationship:</strong> We register, renew and manage domains via third-party registrars. Registration is subject to the relevant registry’s rules and any registrar terms that apply to the TLD.</li>
                  <li><strong>Accuracy:</strong> You must provide and maintain accurate WHOIS/contact data. Failure may lead to suspension or deletion by the registry/registrar.</li>
                  <li><strong>Privacy/Proxy:</strong> Where available, you may enable WHOIS privacy. Registry/ICANN rules may still require disclosure to authorities or in specific cases.</li>
                  <li><strong>Renewals & Expiry:</strong> We’ll attempt renewal when you have an active renewal order and successful payment before the expiry date. You are responsible for ensuring timely renewal. If a domain expires, associated services (DNS, email, website) may stop.</li>
                  <li><strong>Redemption & Restore:</strong> Expired domains may enter a Redemption/Restore period (where applicable) with additional registry fees. Restoration is not guaranteed.</li>
                  <li><strong>Transfers:</strong> You may request inbound/outbound transfers. Ensure the domain is unlocked, has a valid transfer code (EPP/Auth), and that registrant email can receive approval messages. Transfer completion times vary by TLD.</li>
                  <li><strong>DNS & Nameservers:</strong> DNS and nameserver changes can take up to 48 hours to propagate globally. You’re responsible for your DNS records unless you purchase managed DNS.</li>
                  <li><strong>Disputes/Abuse:</strong> You agree to abide by the applicable dispute policy for your TLD (e.g., UDRP-type processes) and not to use domains for abusive or unlawful purposes (malware, spam, phishing, IP infringement, or illegal content).</li>
                  <li><strong>Cancellation:</strong> Domain registrations are generally non-refundable once submitted to the registry.</li>
                </ul>
              </section>

              {/* 20–21 Boilerplate & Law */}
              <section id="boilerplate" className="terms-section">
                <h2>20. Nature of Agreement, Severance, Relationship, Notices</h2>
                <p>
                  Standard contractual boilerplate applies (entire agreement; no partnership; notice mechanics; severability; non-waiver).
                </p>
              </section>

              <section id="law" className="terms-section">
                <h2>21. Law & Jurisdiction</h2>
                <p>These Terms are governed by the laws of England and Wales, with exclusive jurisdiction of its courts.</p>
              </section>

              {/* Quick nav */}
              <hr className="my-5" />
              <nav aria-label="On-page navigation" className="small text-muted">
                <strong>Jump to:</strong>{' '}
                <a href="#hosting-services">Hosting</a> · <a href="#sla">SLA</a> · <a href="#domains">Domains</a> ·{' '}
                <a href="#data-protection">Data Protection</a> · <a href="#law">Law</a>
              </nav>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Terms;
