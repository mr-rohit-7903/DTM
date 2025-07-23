import "./style/DesignOfTheWeek.css"

const DesignOfTheWeek = () => {

  // const handleAddToCart = (product) => {
  //   const selectedSize = selectedSizes[product.id] || "M";
  //   const selectedColor = selectedColors[product.id] || product.colors[0];

  //   addToCart(product, selectedSize, selectedColor);

  //   const button = document.querySelector(
  //     `[data-product-id="${product.id}"] .add-to-cart`
  //   );
  //   if (button) {
  //     const originalText = button.textContent;
  //     button.textContent = "Added! ✓";
  //     button.style.background = "#28a745";
  //     setTimeout(() => {
  //       button.textContent = originalText;
  //       button.style.background = "";
  //     }, 1500);
  //   }
  // };

  return (
    <section className="design-of-week section">
      <div className="container">
        <h2 className="section-title">Design of the Week</h2>

        <div className="featured-design">
          <div className="design-image-section">
            <div className="design-image-wrapper">
              <img src="/images/hero.png?height=500&width=400" alt="Featured Design" className="featured-image" />
              <div className="image-effects">
                <div className="glow-ring"></div>
                <div className="floating-particles">
                  <span className="particle"></span>
                  <span className="particle"></span>
                  <span className="particle"></span>
                  <span className="particle"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="design-content">
            <div className="week-badge">
              <span>Week #1</span>
            </div>

            <h3 className="design-title">"Semicolon Survivor"</h3>

            <div className="design-story">
              <p>
                Born from the late-night coding sessions and the eternal struggle with missing semicolons. This design
                speaks to every developer who's spent hours debugging only to find that one tiny punctuation mark was
                the culprit.
              </p>

              <p>
                Featuring a minimalist aesthetic with a touch of humor, this tee represents the resilience of coders
                everywhere. It's not just a t-shirt; it's a badge of honor for those who've survived the semicolon wars.
              </p>
            </div>

            <div className="design-stats">
              <div className="stat">
                <span className="stat-number">2.4K</span>
                <span className="stat-label">Likes</span>
              </div>
              <div className="stat">
                <span className="stat-number">847</span>
                <span className="stat-label">Shares</span>
              </div>
              <div className="stat">
                <span className="stat-number">156</span>
                <span className="stat-label">Comments</span>
              </div>
            </div>

            <div className="design-actions">
              <button className="btn btn-primary" >Get This Design - ₹649</button>
              <a href="/shop" className="btn btn-secondary">View All Designs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignOfTheWeek
