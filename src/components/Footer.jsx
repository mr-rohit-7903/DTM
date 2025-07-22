import "./style/Footer.css"

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
      links: ["Best Sellers", "New Arrivals", "KGP Collection", "Limited Offers"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Story", "Careers", "Press"],
    },
    {
      title: "Support",
      links: ["Contact Us", "Size Guide", "Shipping Info", "Returns"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
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
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="social-icon-img"
                    width="32"
                    height="32"
                  />
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
                      <a href="#" className="footer-link">
                        {link}
                      </a>
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
              <a href="#" className="footer-bottom-link">
                Privacy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms
              </a>
              <a href="#" className="footer-bottom-link">
                Cookies
              </a>
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
