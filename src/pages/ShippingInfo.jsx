import "./style/PolicyPages.css"

const ShippingInfo = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      time: "5-7 business days",
      cost: "Free",
      description: "Free shipping on all orders above ₹999",
      icon: "📦",
    },
    {
      name: "Express Shipping",
      time: "2-3 business days",
      cost: "₹99",
      description: "Faster delivery for urgent orders",
      icon: "⚡",
    },
    {
      name: "Same Day Delivery",
      time: "Within 24 hours",
      cost: "₹199",
      description: "Available in select cities only",
      icon: "🚀",
    },
  ]

  const deliveryZones = [
    { zone: "Metro Cities", time: "2-4 days", cities: "Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad" },
    { zone: "Tier 1 Cities", time: "3-5 days", cities: "Pune, Ahmedabad, Jaipur, Lucknow, Kanpur, Nagpur" },
    { zone: "Tier 2 Cities", time: "4-6 days", cities: "Indore, Bhopal, Patna, Vadodara, Coimbatore" },
    { zone: "Other Areas", time: "5-7 days", cities: "All other serviceable locations" },
  ]

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Shipping Information</h1>
          <p className="policy-subtitle">Everything you need to know about our shipping and delivery</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Shipping Options</h2>
            <div className="shipping-options">
              {shippingOptions.map((option, index) => (
                <div key={index} className="shipping-option">
                  <div className="option-icon">{option.icon}</div>
                  <div className="option-content">
                    <h3>{option.name}</h3>
                    <div className="option-details">
                      <span className="delivery-time">{option.time}</span>
                      <span className="shipping-cost">{option.cost}</span>
                    </div>
                    <p>{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>Delivery Timeline by Location</h2>
            <div className="delivery-zones">
              {deliveryZones.map((zone, index) => (
                <div key={index} className="delivery-zone">
                  <div className="zone-header">
                    <h3>{zone.zone}</h3>
                    <span className="zone-time">{zone.time}</span>
                  </div>
                  <p className="zone-cities">{zone.cities}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>Order Processing</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Order Confirmation</h3>
                  <p>You'll receive an email confirmation within 30 minutes of placing your order.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Processing</h3>
                  <p>Orders are processed within 1-2 business days (excluding weekends and holidays).</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Dispatch</h3>
                  <p>Once dispatched, you'll receive tracking information via email and SMS.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Delivery</h3>
                  <p>Your order will be delivered to your doorstep by our trusted delivery partners.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Important Notes</h2>
            <div className="important-notes">
              <div className="note">
                <h3>📍 Address Accuracy</h3>
                <p>
                  Please ensure your delivery address is complete and accurate. We are not responsible for delays due to
                  incorrect addresses.
                </p>
              </div>
              <div className="note">
                <h3>📞 Contact Information</h3>
                <p>
                  Provide a valid phone number as our delivery partner may need to contact you for successful delivery.
                </p>
              </div>
              <div className="note">
                <h3>🏠 Delivery Attempts</h3>
                <p>
                  We make up to 3 delivery attempts. If unsuccessful, the package will be returned to our warehouse.
                </p>
              </div>
              <div className="note">
                <h3>🎉 Festivals & Holidays</h3>
                <p>Delivery times may be extended during festival seasons and public holidays.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Tracking Your Order</h2>
            <p>
              Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your
              order status on our website or directly on the courier partner's website.
            </p>
            <div className="tracking-info">
              <h3>Need Help with Tracking?</h3>
              <p>
                Contact our customer support at{" "}
                <a href="mailto:support@darkmodethreads.com">support@darkmodethreads.com</a> or call us at{" "}
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ShippingInfo
