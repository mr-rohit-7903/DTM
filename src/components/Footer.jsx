import "./style/Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      url: "https://www.instagram.com/darkmodethreads/",
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      url: "https://www.linkedin.com/company/darkmodethreads/",
      color: "#0077B5",
    },
    {
      name: "WhatsApp",
      icon: "/icons/whatsapp.svg",
      url: "#",
      color: "#25D366",
    },
    {
      name: "Email",
      icon: "/icons/email.svg",
      url: "mailto:darkmodethreads@gmail.com",
      color: "#ff6b6b",
    },
  ]

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Best Sellers", path: "/shop" },
        { name: "New Arrivals", path: "/shop" },
        { name: "KGP Collection", path: "/shop" },
        { name: "Limited Offers", path: "/shop" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Story", path: "/about" },
        { name: "Careers", path: "/about" },
        { name: "Press", path: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Size Guide", path: "/size-guide" },
        { name: "Shipping Info", path: "/shipping-info" },
        { name: "Returns", path: "/returns" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
        { name: "Refund Policy", path: "/refund-policy" },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/DARKMODE.png?height=52&width=178" alt="Darkmode Threads" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Where memes meet fashion. Designed for the digital generation.</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  style={{ "--social-color": social.color }}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={social.icon} alt={social.name} className="social-icon-img" width="32" height="32" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="footer-section-title">{section.title}</h3>
                <ul className="footer-section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© {new Date().getFullYear()} Darkmode Threads. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy" className="footer-bottom-link">Privacy</Link>
              <Link to="/terms-of-service" className="footer-bottom-link">Terms</Link>
              <Link to="/cookie-policy" className="footer-bottom-link">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
