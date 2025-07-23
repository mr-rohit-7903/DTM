import "./style/PolicyPages.css"

const RefundPolicy = () => {
  const refundScenarios = [
    {
      scenario: "Product Defect",
      timeline: "Full refund within 7 days",
      process: "Contact support with photos of the defect",
      icon: "🔍",
    },
    {
      scenario: "Wrong Item Received",
      timeline: "Full refund + return shipping covered",
      process: "Report within 48 hours of delivery",
      icon: "📦",
    },
    {
      scenario: "Size/Fit Issues",
      timeline: "Full refund within 7 days",
      process: "Item must be unworn with tags attached",
      icon: "📏",
    },
    {
      scenario: "Damaged in Transit",
      timeline: "Full refund + replacement option",
      process: "Report immediately upon delivery",
      icon: "💔",
    },
    {
      scenario: "Order Cancellation",
      timeline: "Full refund within 24 hours",
      process: "Cancel before order is dispatched",
      icon: "❌",
    },
    {
      scenario: "Payment Issues",
      timeline: "Refund within 5-7 business days",
      process: "Automatic refund for failed transactions",
      icon: "💳",
    },
  ]

  const refundMethods = [
    {
      method: "Credit/Debit Card",
      timeline: "5-7 business days",
      description: "Refunded to the original card used for payment",
      icon: "💳",
    },
    {
      method: "UPI",
      timeline: "1-2 business days",
      description: "Instant refund to your UPI account",
      icon: "📱",
    },
    {
      method: "Net Banking",
      timeline: "3-5 business days",
      description: "Refunded to your bank account",
      icon: "🏦",
    },
    {
      method: "Cash on Delivery",
      timeline: "5-7 business days",
      description: "Bank transfer to your provided account details",
      icon: "💰",
    },
    {
      method: "Store Credit",
      timeline: "Instant",
      description: "Credit added to your account for future purchases",
      icon: "🎁",
    },
  ]

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Refund Policy</h1>
          <p className="policy-subtitle">Comprehensive refund policy for all purchase scenarios</p>
          <p className="last-updated">Last updated: January 2024</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Refund Eligibility</h2>
            <div className="refund-eligibility">
              <div className="eligible-section">
                <h3>✅ Eligible for Full Refund</h3>
                <ul>
                  <li>Product defects or manufacturing issues</li>
                  <li>Wrong item received</li>
                  <li>Damaged during shipping</li>
                  <li>Size/fit issues (within 7 days)</li>
                  <li>Order cancellation before dispatch</li>
                  <li>Failed delivery attempts (after 3 tries)</li>
                </ul>
              </div>
              <div className="ineligible-section">
                <h3>❌ Not Eligible for Refund</h3>
                <ul>
                  <li>Items worn, washed, or damaged by customer</li>
                  <li>Products without original tags</li>
                  <li>Customized or personalized items</li>
                  <li>Items returned after 7 days</li>
                  <li>Change of mind after 7 days</li>
                  <li>Items damaged due to misuse</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>2. Refund Scenarios</h2>
            <div className="refund-scenarios">
              {refundScenarios.map((scenario, index) => (
                <div key={index} className="scenario-card">
                  <div className="scenario-header">
                    <span className="scenario-icon">{scenario.icon}</span>
                    <h3>{scenario.scenario}</h3>
                  </div>
                  <div className="scenario-details">
                    <p>
                      <strong>Timeline:</strong> {scenario.timeline}
                    </p>
                    <p>
                      <strong>Process:</strong> {scenario.process}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>3. Refund Methods & Timeline</h2>
            <div className="refund-methods">
              {refundMethods.map((method, index) => (
                <div key={index} className="refund-method-card">
                  <div className="method-header">
                    <span className="method-icon">{method.icon}</span>
                    <h3>{method.method}</h3>
                    <span className="method-timeline">{method.timeline}</span>
                  </div>
                  <p>{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>4. Refund Process</h2>
            <div className="refund-process">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Initiate Refund Request</h3>
                  <p>
                    Contact our customer support within the eligible timeframe with your order details and reason for
                    refund.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Request Review</h3>
                  <p>Our team will review your request and may ask for additional information or photos if needed.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Return Authorization</h3>
                  <p>If approved, we'll provide return instructions and a prepaid shipping label (if applicable).</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Item Inspection</h3>
                  <p>Once we receive the returned item, we'll inspect it to ensure it meets our return conditions.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Refund Processing</h3>
                  <p>
                    After approval, your refund will be processed according to the timeline for your payment method.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>5. Partial Refunds</h2>
            <p>In certain circumstances, we may issue partial refunds:</p>
            <div className="partial-refunds">
              <div className="partial-scenario">
                <h3>🔧 Minor Defects</h3>
                <p>
                  For minor cosmetic defects that don't affect functionality, we may offer a partial refund instead of a
                  full return.
                </p>
              </div>
              <div className="partial-scenario">
                <h3>📦 Missing Accessories</h3>
                <p>If original packaging or accessories are missing, a partial refund may be applied.</p>
              </div>
              <div className="partial-scenario">
                <h3>⏰ Late Returns</h3>
                <p>Items returned after the 7-day window may be eligible for partial refunds at our discretion.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. Refund Exceptions</h2>
            <div className="refund-exceptions">
              <div className="exception">
                <h3>🎨 Custom Orders</h3>
                <p>
                  Personalized or custom-made items are generally not eligible for refunds unless there's a
                  manufacturing defect.
                </p>
              </div>
              <div className="exception">
                <h3>🏷️ Sale Items</h3>
                <p>
                  Items purchased during clearance sales may have different return policies as specified at the time of
                  purchase.
                </p>
              </div>
              <div className="exception">
                <h3>🎁 Gift Cards</h3>
                <p>Gift cards and store credits are non-refundable but can be used for future purchases.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>7. International Orders</h2>
            <p>For international orders, additional considerations apply:</p>
            <ul>
              <li>Customer is responsible for return shipping costs</li>
              <li>Customs duties and taxes are non-refundable</li>
              <li>Refund processing may take longer due to international banking</li>
              <li>Currency conversion rates may affect refund amounts</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Refund Tracking</h2>
            <div className="refund-tracking">
              <h3>📧 Email Notifications</h3>
              <p>You'll receive email updates at each stage of the refund process</p>

              <h3>📱 SMS Updates</h3>
              <p>Important refund status updates will be sent via SMS</p>

              <h3>💻 Account Dashboard</h3>
              <p>Track your refund status in your account dashboard</p>

              <h3>📞 Customer Support</h3>
              <p>Contact our support team for real-time refund status updates</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>9. Dispute Resolution</h2>
            <p>If you're not satisfied with our refund decision:</p>
            <div className="dispute-process">
              <div className="dispute-step">
                <h3>Step 1: Internal Review</h3>
                <p>Request a review of the refund decision by our senior customer service team</p>
              </div>
              <div className="dispute-step">
                <h3>Step 2: Management Escalation</h3>
                <p>Escalate the matter to our management team for further review</p>
              </div>
              <div className="dispute-step">
                <h3>Step 3: External Mediation</h3>
                <p>As a last resort, disputes may be resolved through consumer protection agencies</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>10. Contact Information</h2>
            <p>For refund requests and inquiries, contact us through:</p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:refunds@darkmodethreads.com">refunds@darkmodethreads.com</a>
                </p>
                <p>Response time: Within 24 hours</p>
              </div>
              <div className="contact-method">
                <h3>📞 Phone</h3>
                <p>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
                <p>Available: Mon-Sat, 9 AM - 6 PM IST</p>
              </div>
              <div className="contact-method">
                <h3>💬 WhatsApp</h3>
                <p>Message us for quick refund assistance</p>
                <p>Available: 24/7 automated responses</p>
              </div>
              <div className="contact-method">
                <h3>📍 Address</h3>
                <p>
                  IIT Kharagpur Campus
                  <br />
                  West Bengal, India - 721302
                </p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>11. Policy Updates</h2>
            <p>
              This refund policy may be updated from time to time. We will notify customers of any significant changes
              via email and by posting the updated policy on our website. Continued use of our services after policy
              updates constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy
