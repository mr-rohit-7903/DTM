import "./style/PolicyPages.css"

const Returns = () => {
  const returnReasons = [
    { reason: "Size doesn't fit", icon: "📏" },
    { reason: "Product defect", icon: "🔍" },
    { reason: "Wrong item received", icon: "📦" },
    { reason: "Damaged during shipping", icon: "💔" },
    { reason: "Not as described", icon: "❌" },
    { reason: "Changed mind", icon: "🤔" },
  ]

  const returnSteps = [
    {
      step: "1",
      title: "Initiate Return",
      description: "Contact us within 7 days of delivery via email or phone",
    },
    {
      step: "2",
      title: "Return Approval",
      description: "We'll review your request and provide return instructions",
    },
    {
      step: "3",
      title: "Package & Ship",
      description: "Pack the item securely and ship using our prepaid return label",
    },
    {
      step: "4",
      title: "Processing",
      description: "We'll inspect the item and process your refund within 5-7 business days",
    },
  ]

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Returns & Exchanges</h1>
          <p className="policy-subtitle">Easy returns and exchanges for your peace of mind</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Return Policy Overview</h2>
            <div className="policy-highlighteds">
              <div className="highlighted">
                <h3>🕐 7-Day Return Window</h3>
                <p>Return items within 7 days of delivery for a full refund</p>
              </div>
              <div className="highlighted">
                <h3>📦 Free Return Shipping</h3>
                <p>We provide prepaid return labels for all eligible returns</p>
              </div>
              <div className="highlighted">
                <h3>💰 Full Refund</h3>
                <p>Get 100% refund for items returned in original condition</p>
              </div>
              <div className="highlighted">
                <h3>🔄 Easy Exchange</h3>
                <p>Exchange for different size or color at no extra cost</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Eligible Return Reasons</h2>
            <div className="return-reasons">
              {returnReasons.map((item, index) => (
                <div key={index} className="return-reason">
                  <span className="reason-icon">{item.icon}</span>
                  <span className="reason-text">{item.reason}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>Return Process</h2>
            <div className="return-steps">
              {returnSteps.map((step, index) => (
                <div key={index} className="return-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>Return Conditions</h2>
            <div className="return-conditions">
              <div className="condition-group">
                <h3>✅ Items We Accept</h3>
                <ul>
                  <li>Items in original condition with tags attached</li>
                  <li>Unworn and unwashed garments</li>
                  <li>Items in original packaging</li>
                  <li>Products returned within 7 days of delivery</li>
                </ul>
              </div>
              <div className="condition-group">
                <h3>❌ Items We Don't Accept</h3>
                <ul>
                  <li>Items worn, washed, or damaged by customer</li>
                  <li>Products without original tags</li>
                  <li>Items returned after 7 days</li>
                  <li>Customized or personalized products</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Exchanges</h2>
            <p>
              Want a different size or color? We offer free exchanges within 7 days of delivery. The exchange process is
              similar to returns, but we'll send you the new item once we receive the original.
            </p>
            <div className="exchange-info">
              <h3>Exchange Timeline</h3>
              <ul>
                <li>Initiate exchange within 7 days of delivery</li>
                <li>Ship the original item back to us</li>
                <li>New item ships within 2-3 business days of receiving the return</li>
                <li>Receive your exchanged item in 5-7 business days</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>Refund Information</h2>
            <div className="refund-info">
              <div className="refund-method">
                <h3>💳 Refund Methods</h3>
                <ul>
                  <li>Original payment method (Credit/Debit Card, UPI)</li>
                  <li>Bank transfer for Cash on Delivery orders</li>
                  <li>Store credit (if preferred)</li>
                </ul>
              </div>
              <div className="refund-timeline">
                <h3>⏰ Refund Timeline</h3>
                <ul>
                  <li>Processing: 2-3 business days after we receive the item</li>
                  <li>Credit/Debit Card: 5-7 business days</li>
                  <li>UPI: 1-2 business days</li>
                  <li>Bank Transfer: 3-5 business days</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>How to Initiate a Return</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>
                  Send us an email at <a href="mailto:returns@darkmodethreads.com">returns@darkmodethreads.com</a> with
                  your order number and reason for return.
                </p>
              </div>
              <div className="contact-method">
                <h3>📞 Phone</h3>
                <p>
                  Call our customer support at <a href="tel:+919876543210">+91 98765 43210</a> (Mon-Sat, 9 AM - 6 PM)
                </p>
              </div>
              <div className="contact-method">
                <h3>💬 WhatsApp</h3>
                <p>Message us on WhatsApp for quick assistance with your return request.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Returns
