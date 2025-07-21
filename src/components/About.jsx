import "./style/About.css"

const About = () => {
  const founders = [
    {
      name: "Rohit Bej",
      role: "Founder & Creative Head",
      quote: "Turning memes into moods. Designing your everyday vibe.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Chirag Janbandhu",
      role: "Co-founder & Marketing Lead",
      quote: "The world will know us—one tee at a time.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sambit Barik",
      role: "Co-founder & Operations Head",
      quote: "From clicks to cloth—we keep it running.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="about section" id="about">
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
  )
}

export default About
