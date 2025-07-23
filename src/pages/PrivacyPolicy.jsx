import "./style/PolicyPages.css"

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">How we collect, use, and protect your personal information</p>
          <p className="last-updated">Last updated: January 2024</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <div className="info-types">
              <div className="info-type">
                <h3>Personal Information</h3>
                <ul>
                  <li>Name, email address, phone number</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Account credentials and preferences</li>
                </ul>
              </div>
              <div className="info-type">
                <h3>Usage Information</h3>
                <ul>
                  <li>Pages visited, products viewed, and purchase history</li>
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <div className="usage-purposes">
              <div className="purpose">
                <h3>🛒 Order Processing</h3>
                <p>To process your orders, handle payments, and arrange delivery</p>
              </div>
              <div className="purpose">
                <h3>📞 Customer Service</h3>
                <p>To respond to your inquiries and provide customer support</p>
              </div>
              <div className="purpose">
                <h3>📧 Marketing Communications</h3>
                <p>To send you promotional emails and updates (with your consent)</p>
              </div>
              <div className="purpose">
                <h3>🔍 Website Improvement</h3>
                <p>To analyze usage patterns and improve our website and services</p>
              </div>
              <div className="purpose">
                <h3>🛡️ Security</h3>
                <p>To prevent fraud and ensure the security of our platform</p>
              </div>
              <div className="purpose">
                <h3>⚖️ Legal Compliance</h3>
                <p>To comply with applicable laws and regulations</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              in the following circumstances:
            </p>
            <div className="sharing-scenarios">
              <div className="scenario">
                <h3>Service Providers</h3>
                <p>
                  With trusted third-party service providers who help us operate our business (payment processors,
                  shipping companies, email service providers)
                </p>
              </div>
              <div className="scenario">
                <h3>Legal Requirements</h3>
                <p>When required by law, court order, or government regulation</p>
              </div>
              <div className="scenario">
                <h3>Business Transfers</h3>
                <p>In connection with a merger, acquisition, or sale of business assets</p>
              </div>
              <div className="scenario">
                <h3>Consent</h3>
                <p>With your explicit consent for specific purposes</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
            <div className="security-measures">
              <div className="measure">
                <h3>🔒 Encryption</h3>
                <p>All sensitive data is encrypted in transit and at rest</p>
              </div>
              <div className="measure">
                <h3>🛡️ Access Controls</h3>
                <p>Limited access to personal information on a need-to-know basis</p>
              </div>
              <div className="measure">
                <h3>🔍 Regular Audits</h3>
                <p>Regular security assessments and vulnerability testing</p>
              </div>
              <div className="measure">
                <h3>📚 Staff Training</h3>
                <p>Regular privacy and security training for our employees</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>5. Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <div className="user-rights">
              <div className="right">
                <h3>Access</h3>
                <p>Request a copy of the personal information we hold about you</p>
              </div>
              <div className="right">
                <h3>Correction</h3>
                <p>Request correction of inaccurate or incomplete information</p>
              </div>
              <div className="right">
                <h3>Deletion</h3>
                <p>Request deletion of your personal information (subject to legal requirements)</p>
              </div>
              <div className="right">
                <h3>Portability</h3>
                <p>Request transfer of your data to another service provider</p>
              </div>
              <div className="right">
                <h3>Opt-out</h3>
                <p>Unsubscribe from marketing communications at any time</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience:</p>
            <div className="cookie-types">
              <div className="cookie-type">
                <h3>Essential Cookies</h3>
                <p>Required for basic website functionality and security</p>
              </div>
              <div className="cookie-type">
                <h3>Performance Cookies</h3>
                <p>Help us understand how visitors interact with our website</p>
              </div>
              <div className="cookie-type">
                <h3>Marketing Cookies</h3>
                <p>Used to deliver relevant advertisements and track campaign effectiveness</p>
              </div>
            </div>
            <p>You can manage your cookie preferences through your browser settings or our cookie consent tool.</p>
          </section>

          <section className="policy-section">
            <h2>7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services and fulfill transactions</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services and customer experience</li>
            </ul>
            <p>
              Account information is typically retained for 3 years after account closure, unless longer retention is
              required by law.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If we become aware that we have collected such information, we will
              take steps to delete it promptly.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place to protect your information in accordance with applicable data
              protection laws.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending an email notification to registered users</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@darkmodethreads.com">privacy@darkmodethreads.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
              <p>
                <strong>Address:</strong> IIT Kharagpur Campus, West Bengal, India - 721302
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
