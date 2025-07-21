import { Link } from "react-router-dom"
import "./style/Hero.css"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your campus style is <span className="highlight">that good.</span>
            </h1>
            <p className="hero-subtitle">
              Darkmode Threads - Where memes meet fashion and comfort meets cool. Designed for the digital generation.
            </p>
            <Link to="/shop" className="btn btn-primary hero-cta">
              Shop Now
            </Link>
          </div>

          <div className="hero-visual">
            <div className="tshirt-showcase">
              <img src="/placeholder.svg?height=400&width=300" alt="Featured T-shirt" className="hero-tshirt" />
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
