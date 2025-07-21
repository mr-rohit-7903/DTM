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
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <h3>Email Us</h3>
              <p>hello@darkmodethreads.com</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <span>📱</span>
              </div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <h3>Visit Us</h3>
              <p>
                IIT Kharagpur Campus
                <br />
                West Bengal, India
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
                rows="5"
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
  )
}

export default Contact
