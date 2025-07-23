import "./style/PolicyPages.css"

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Terms of Service</h1>
          <p className="policy-subtitle">Terms and conditions for using Darkmode Threads</p>
          <p className="last-updated">Last updated: January 2024</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Darkmode Threads website and services, you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Darkmode Threads' website for
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>
                use the materials for any commercial purpose or for any public display (commercial or non-commercial)
              </li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Account Registration</h2>
            <div className="account-terms">
              <div className="term-item">
                <h3>Account Creation</h3>
                <p>You must provide accurate and complete information when creating an account</p>
              </div>
              <div className="term-item">
                <h3>Account Security</h3>
                <p>You are responsible for maintaining the confidentiality of your account credentials</p>
              </div>
              <div className="term-item">
                <h3>Account Usage</h3>
                <p>You are responsible for all activities that occur under your account</p>
              </div>
              <div className="term-item">
                <h3>Age Requirement</h3>
                <p>You must be at least 18 years old to create an account and make purchases</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>4. Product Information and Pricing</h2>
            <div className="pricing-terms">
              <h3>Product Descriptions</h3>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not warrant that product
                descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>

              <h3>Pricing</h3>
              <p>
                All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve the
                right to modify prices at any time.
              </p>

              <h3>Availability</h3>
              <p>
                Product availability is subject to change. We reserve the right to limit quantities or discontinue
                products at any time.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2>5. Orders and Payment</h2>
            <div className="order-terms">
              <div className="term-group">
                <h3>Order Acceptance</h3>
                <ul>
                  <li>All orders are subject to acceptance and availability</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Order confirmation does not guarantee product availability</li>
                </ul>
              </div>
              <div className="term-group">
                <h3>Payment Terms</h3>
                <ul>
                  <li>Payment must be made at the time of order placement</li>
                  <li>We accept credit cards, debit cards, UPI, and cash on delivery</li>
                  <li>All payments are processed securely through our payment partners</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. Shipping and Delivery</h2>
            <p>Shipping and delivery terms are outlined in our Shipping Information page. Key points include:</p>
            <ul>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss passes to you upon delivery</li>
              <li>You must provide accurate delivery information</li>
              <li>Additional charges may apply for remote locations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Returns and Refunds</h2>
            <p>
              Our return and refund policy is detailed in our Returns page. By making a purchase, you agree to our
              return terms and conditions.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Intellectual Property</h2>
            <div className="ip-terms">
              <h3>Our Content</h3>
              <p>
                All content on this website, including designs, logos, text, and images, is owned by Darkmode Threads
                and protected by intellectual property laws.
              </p>

              <h3>User Content</h3>
              <p>
                By submitting content (reviews, comments, photos), you grant us a non-exclusive, royalty-free license to
                use, modify, and display such content.
              </p>

              <h3>Trademark</h3>
              <p>"Darkmode Threads" and our logo are trademarks of our company. Unauthorized use is prohibited.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>9. Prohibited Uses</h2>
            <p>You may not use our service:</p>
            <div className="prohibited-uses">
              <div className="prohibited-item">
                <h3>🚫 Illegal Activities</h3>
                <p>For any unlawful purpose or to solicit others to perform unlawful acts</p>
              </div>
              <div className="prohibited-item">
                <h3>🚫 Harassment</h3>
                <p>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</p>
              </div>
              <div className="prohibited-item">
                <h3>🚫 False Information</h3>
                <p>To submit false or misleading information</p>
              </div>
              <div className="prohibited-item">
                <h3>🚫 System Interference</h3>
                <p>To interfere with or circumvent the security features of the service</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>10. Disclaimer</h2>
            <p>
              The materials on Darkmode Threads' website are provided on an 'as is' basis. Darkmode Threads makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Limitations</h2>
            <p>
              In no event shall Darkmode Threads or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Darkmode Threads' website, even if Darkmode Threads or an authorized
              representative has been notified orally or in writing of the possibility of such damage. Because some
              jurisdictions do not allow limitations on implied warranties, or limitations of liability for
              consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="policy-section">
            <h2>12. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you
              irrevocably submit to the exclusive jurisdiction of the courts in West Bengal, India.
            </p>
          </section>

          <section className="policy-section">
            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to revise these terms of service at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="policy-section">
            <h2>14. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> <a href="mailto:legal@darkmodethreads.com">legal@darkmodethreads.com</a>
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

export default TermsOfService
