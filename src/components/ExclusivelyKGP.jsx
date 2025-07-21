"use client"

import "./style/ExclusivelyKGP.css"

const ExclusivelyKGP = ({ addToCart }) => {
  const kgpProducts = [
    {
      id: 20,
      name: "KGP Legends Tee",
      image: "/placeholder.svg?height=300&width=250",
      price: "₹699",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Maroon"],
    },
    {
      id: 21,
      name: "Technology Hoodie",
      image: "/placeholder.svg?height=300&width=250",
      price: "₹999",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Navy"],
    },
    {
      id: 22,
      name: "Campus Pride Sweatshirt",
      image: "/placeholder.svg?height=300&width=250",
      price: "₹849",
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

        <div className="kgp-showcase">
          <div className="kgp-visual">
            <div className="campus-illustration">
              <div className="building-silhouette">
                <div className="building building-1"></div>
                <div className="building building-2"></div>
                <div className="building building-3"></div>
              </div>
              <div className="kgp-emblem">
                <div className="emblem-circle">
                  <span>IIT KGP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="kgp-products">
            {kgpProducts.map((product) => (
              <div key={product.id} className="kgp-product-card">
                <div className="product-image-container">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="kgp-product-image" />
                  <div className="kgp-overlay">
                    <span className="kgp-exclusive">KGP EXCLUSIVE</span>
                  </div>
                </div>
                <div className="kgp-product-info">
                  <h3 className="kgp-product-name">{product.name}</h3>
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
                  <p className="kgp-product-price">{product.price}</p>
                  <button className="btn btn-primary add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
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
