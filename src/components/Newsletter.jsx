"use client"

import { useState } from "react"
import "./style/Newsletter.css"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setIsSubscribed(true)
    setEmail("")

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false)
    }, 3000)
  }

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-visual">
            <div className="newsletter-icon">
              <span>📬</span>
            </div>
            <div className="floating-emails">
              <div className="email-icon email-1">✉️</div>
              <div className="email-icon email-2">📧</div>
              <div className="email-icon email-3">💌</div>
            </div>
          </div>

          <div className="newsletter-info">
            <h2 className="newsletter-title">Stay in the Loop</h2>
            <p className="newsletter-subtitle">No spam. Just fire fits.</p>
            <p className="newsletter-description">
              Get the latest drops, exclusive deals, and meme-worthy content delivered straight to your inbox. Join the
              Darkmode community!
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  Subscribe
                </button>
              </div>

              {isSubscribed && (
                <div className="success-message">🎉 Welcome to the Darkmode family! Check your inbox.</div>
              )}
            </form>

            <div className="newsletter-benefits">
              <div className="benefit">
                <span className="benefit-icon">🎯</span>
                <span>Exclusive early access</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">💰</span>
                <span>Subscriber-only discounts</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🔥</span>
                <span>Latest design drops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
