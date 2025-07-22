"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./style/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const formRef = useRef()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_jjd2oy9",       // ✅ replace with your EmailJS service ID
        "template_fpxs5wf",      // ✅ replace with your EmailJS template ID
        formRef.current,
        "ku7dRlhbj6OD370Eg"        // ✅ replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text)
          alert("Thank you for your message! We'll get back to you soon.")
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          console.error("Error sending email:", error.text)
          alert("Oops! Something went wrong. Please try again later.")
        }
      )
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
                  <img src="/icons/email.svg" alt="Email" />
                </div>
                <h3>Email Us</h3>
                <p>darkmodethreads@gmail.com</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <span>💬</span>
                </div>
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">WhatsApp</a>
                </div>
              </div>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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
