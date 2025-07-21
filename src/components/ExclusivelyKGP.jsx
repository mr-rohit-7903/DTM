"use client"

import "./style/ExclusivelyKGP.css"

const ExclusivelyKGP = ({ addToCart }) => {
  const kgpProducts = [
    {
      id: 20,
      name: "KGP Legends Tee",
      image: "/placeholder.svg?height=300&width=250",
      price: "₹699",
      description: "Celebrate the legacy of IIT Kharagpur with this premium tee. Designed for the campus legends.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Maroon"],
    },
    {
      id: 21,
      name: "Technology Hoodie",
      image: "/placeholder.svg?height=300&width=250",
      price: "₹999",
      description: "Premium hoodie celebrating the spirit of innovation and technology at IIT KGP.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Navy"],
    },
    {
      id: 22,
      name: "Campus Pride Sweatshirt",
      image: "/placeholder.svg?height=300&width=250",
      price: "₹849",
      description: "Show your campus pride with this comfortable sweatshirt. Perfect for KGP alumni and students.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Maroon", "White"],
    },
  ]

  const handleAddToCart = (product) => {
    addToCart(product, "M", product.colors[0])
  }

  return (
    <section className="exclusively-kgp section">
      <div className="container">
        <div className="kgp-header">
          <div className="kgp-badge">
            <span>🎓 EXCLUSIVELY FOR KGPians</span>
          </div>

          <h2 className="section-title kgp-title">For the Campus Legends</h2>

          <p className="kgp-description">
            Crafted for the campus legends of IIT KGP — because your style deserves its own badge. Wear your pride, show
            your spirit.
          </p>
        </div>

        <div className="kgp-products-grid">
          {kgpProducts.map((product) => (
            <div key={product.id} className="kgp-product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="kgp-product-image" />
                <div className="kgp-exclusive-badge">KGP EXCLUSIVE</div>
              </div>

              <div className="kgp-product-info">
                <h3 className="kgp-product-name">{product.name}</h3>
                <p className="kgp-product-description">{product.description}</p>

                <div className="product-options">
                  <div className="size-options">
                    <span className="option-label">Sizes:</span>
                    <div className="size-list">
                      {product.sizes.map((size) => (
                        <span key={size} className="size-option">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="color-options">
                    <span className="option-label">Colors:</span>
                    <div className="color-list">
                      {product.colors.map((color) => (
                        <span key={color} className="color-option">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="kgp-product-pricing">
                  <span className="kgp-product-price">{product.price}</span>
                </div>

                <div className="kgp-product-actions">
                  <button className="btn btn-primary add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="btn btn-secondary like-btn">🤍</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="kgp-cta-section">
          <button className="btn btn-primary kgp-cta">Explore KGP Collection</button>
          <p className="kgp-note">*Available only for verified IIT Kharagpur students and alumni</p>
        </div>
      </div>
    </section>
  )
}

export default ExclusivelyKGP
