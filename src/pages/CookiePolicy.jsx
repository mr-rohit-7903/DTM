import "./style/PolicyPages.css"

const CookiePolicy = () => {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      purpose: "Required for basic website functionality",
      examples: "Login sessions, shopping cart, security features",
      canDisable: false,
      icon: "🔒",
    },
    {
      type: "Performance Cookies",
      purpose: "Help us understand how visitors use our website",
      examples: "Google Analytics, page load times, error tracking",
      canDisable: true,
      icon: "📊",
    },
    {
      type: "Functional Cookies",
      purpose: "Remember your preferences and settings",
      examples: "Language preferences, theme settings, location",
      canDisable: true,
      icon: "⚙️",
    },
    {
      type: "Marketing Cookies",
      purpose: "Deliver relevant advertisements and track campaigns",
      examples: "Facebook Pixel, Google Ads, retargeting pixels",
      canDisable: true,
      icon: "📢",
    },
  ]

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Cookie Policy</h1>
          <p className="policy-subtitle">How we use cookies and similar technologies on our website</p>
          <p className="last-updated">Last updated: January 2024</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. They help us
              provide you with a better browsing experience by remembering your preferences and understanding how you
              use our site.
            </p>
            <div className="cookie-explanation">
              <div className="cookie-benefit">
                <h3>🍪 How Cookies Help</h3>
                <ul>
                  <li>Remember your login status and preferences</li>
                  <li>Keep items in your shopping cart</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Analyze website performance and user behavior</li>
                  <li>Deliver relevant advertisements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>2. Types of Cookies We Use</h2>
            <div className="cookie-types">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="cookie-type-card">
                  <div className="cookie-header">
                    <span className="cookie-icon">{cookie.icon}</span>
                    <h3>{cookie.type}</h3>
                    <span className={`disable-status ${cookie.canDisable ? "can-disable" : "cannot-disable"}`}>
                      {cookie.canDisable ? "Can be disabled" : "Always active"}
                    </span>
                  </div>
                  <div className="cookie-details">
                    <p>
                      <strong>Purpose:</strong> {cookie.purpose}
                    </p>
                    <p>
                      <strong>Examples:</strong> {cookie.examples}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>3. First-Party vs Third-Party Cookies</h2>
            <div className="cookie-parties">
              <div className="cookie-party">
                <h3>🏠 First-Party Cookies</h3>
                <p>Set directly by Darkmode Threads to enhance your experience on our website.</p>
                <ul>
                  <li>Shopping cart functionality</li>
                  <li>User authentication</li>
                  <li>Website preferences</li>
                  <li>Basic analytics</li>
                </ul>
              </div>
              <div className="cookie-party">
                <h3>🌐 Third-Party Cookies</h3>
                <p>Set by external services we use to provide additional functionality.</p>
                <ul>
                  <li>Google Analytics for website analytics</li>
                  <li>Facebook Pixel for advertising</li>
                  <li>Payment processor cookies</li>
                  <li>Social media integration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>4. Session vs Persistent Cookies</h2>
            <div className="cookie-duration">
              <div className="duration-type">
                <h3>⏱️ Session Cookies</h3>
                <p>Temporary cookies that are deleted when you close your browser.</p>
                <ul>
                  <li>Shopping cart contents</li>
                  <li>Login sessions</li>
                  <li>Form data</li>
                </ul>
              </div>
              <div className="duration-type">
                <h3>💾 Persistent Cookies</h3>
                <p>Remain on your device for a set period or until manually deleted.</p>
                <ul>
                  <li>User preferences</li>
                  <li>Remember me functionality</li>
                  <li>Analytics data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>5. Managing Your Cookie Preferences</h2>
            <div className="cookie-management">
              <div className="management-method">
                <h3>🎛️ Cookie Consent Tool</h3>
                <p>
                  Use our cookie consent banner to accept or reject non-essential cookies when you first visit our site.
                </p>
              </div>
              <div className="management-method">
                <h3>🌐 Browser Settings</h3>
                <p>Configure your browser to block or delete cookies:</p>
                <ul>
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and Security → Cookies
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security → Cookies
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Cookies
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and Site Permissions
                  </li>
                </ul>
              </div>
              <div className="management-method">
                <h3>📱 Mobile Browsers</h3>
                <p>Access cookie settings through your mobile browser's privacy or settings menu.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. Impact of Disabling Cookies</h2>
            <div className="cookie-impact">
              <div className="impact-warning">
                <h3>⚠️ What Happens When You Disable Cookies</h3>
                <ul>
                  <li>You may need to log in repeatedly</li>
                  <li>Shopping cart may not work properly</li>
                  <li>Personalized content and recommendations may not be available</li>
                  <li>Some website features may not function correctly</li>
                  <li>We cannot remember your preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>7. Other Tracking Technologies</h2>
            <p>In addition to cookies, we may use other tracking technologies:</p>
            <div className="tracking-technologies">
              <div className="technology">
                <h3>🖼️ Web Beacons (Pixels)</h3>
                <p>Small transparent images used to track email opens and website visits</p>
              </div>
              <div className="technology">
                <h3>📱 Mobile SDKs</h3>
                <p>Software development kits that collect data from mobile apps</p>
              </div>
              <div className="technology">
                <h3>🔍 Local Storage</h3>
                <p>Browser storage that persists data locally on your device</p>
              </div>
              <div className="technology">
                <h3>👆 Fingerprinting</h3>
                <p>Techniques that identify devices based on their unique characteristics</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>8. Third-Party Services</h2>
            <p>We use the following third-party services that may set cookies:</p>
            <div className="third-party-services">
              <div className="service">
                <h3>Google Analytics</h3>
                <p>Website analytics and performance tracking</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </div>
              <div className="service">
                <h3>Facebook Pixel</h3>
                <p>Advertising and conversion tracking</p>
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </div>
              <div className="service">
                <h3>Payment Processors</h3>
                <p>Secure payment processing (Razorpay, Stripe, etc.)</p>
                <p>Each processor has its own privacy policy</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>9. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws.
              We will notify you of any material changes by posting the updated policy on our website and updating the
              "Last updated" date.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
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

export default CookiePolicy
