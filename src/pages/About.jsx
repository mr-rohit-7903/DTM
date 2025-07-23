import "./style/About.css"

const About = () => {
  const founders = [
    {
      name: "Chirag Janbandhu",
      role: "Co-founder",
      quote: "The world will know us—one tee at a time.",
      image: "/images/chirag.webp?height=200&width=200",
    },
    {
      name: "Rohit Bej",
      role: "Founder",
      quote: "Turning memes into moods. Designing your everyday vibe.",
      image: "/images/Rohit.jpg?height=200&width=200",
    },
    {
      name: "Sambit Barik",
      role: "Co-founder",
      quote: "From clicks to cloth—we keep it running.",
      image: "/images/sambit.webp?height=200&width=200",
    },
  ]

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">About Darkmode Threads</h1>
            <p className="about-subtitle">Where memes meet fashion and comfort meets cool</p>
            <div className="about-description">
              <p>
                Born from the late-night coding sessions and endless meme scrolling, Darkmode Threads represents the
                intersection of technology culture and fashion. We're not just another clothing brand – we're a
                community of digital natives who understand that your style should reflect your passion for technology.
              </p>
              <p>
                Founded by three tech enthusiasts, our mission is to create apparel that speaks the language of
                developers, designers, and digital creators. Every design tells a story, every thread carries the spirit
                of innovation, and every piece is crafted for those who live and breathe technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="founders-section section">
        <div className="container">
          <h2 className="section-title">Meet the Minds Behind the Threads</h2>

          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-image-wrapper">
                  <img src={founder.image || "/placeholder.svg"} alt={founder.name} className="founder-image" />
                  <div className="image-overlay"></div>
                </div>

                <div className="founder-info">
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-role">{founder.role}</p>
                  <blockquote className="founder-quote">"{founder.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-description">
                To bridge the gap between technology culture and fashion, creating apparel that celebrates the digital
                generation. We believe that what you wear should reflect who you are – passionate, innovative, and
                unapologetically geeky.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <span className="value-icon">💡</span>
                  <div>
                    <h4>Innovation</h4>
                    <p>Constantly pushing boundaries in design and comfort</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <div>
                    <h4>Quality</h4>
                    <p>Premium materials and attention to every detail</p>
                  </div>
                </div>
                <div className="value-item">
                  <span className="value-icon">🌟</span>
                  <div>
                    <h4>Community</h4>
                    <p>Building a tribe of tech enthusiasts and creators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-graphic">
                <div className="code-lines">
                  <div className="code-line">{"<DarkmodeThreads>"}</div>
                  <div className="code-line">{'  passion = "technology"'}</div>
                  <div className="code-line">{'  style = "authentic"'}</div>
                  <div className="code-line">{'  community = "global"'}</div>
                  <div className="code-line">{"</DarkmodeThreads>"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
