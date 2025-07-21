"use client"

import { useState } from "react"
import "./style/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <span>📧</span>
                </div>
                <h3>Email Us</h3>
                <p>hello@darkmodethreads.com</p>
                <p>support@darkmodethreads.com</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <span>📱</span>
                </div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p>Mon-Fri: 9AM-6PM IST</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <span>📍</span>
                </div>
                <h3>Visit Us</h3>
                <p>
                  IIT Kharagpur Campus
                  <br />
                  West Bengal, India - 721302
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <span>💬</span>
                </div>
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    Instagram
                  </a>
                  <a href="#" className="social-link">
                    LinkedIn
                  </a>
                  <a href="#" className="social-link">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your awesome name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@domain.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
