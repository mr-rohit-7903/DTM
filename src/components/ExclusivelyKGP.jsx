"use client"

import { useState } from "react"
import "./style/ExclusivelyKGP.css"

const ExclusivelyKGP = ({ addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({})
  const [selectedColors, setSelectedColors] = useState({})

  const kgpProducts = [
    {
      id: 20,
      name: "KGP Legends Tee",
      image: "/images/hero.png?height=300&width=250",
      price: "₹699",
      description: "Celebrate the legacy of IIT Kharagpur with this premium tee.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Maroon"],
    },
    {
      id: 21,
      name: "Technology Hoodie",
      image: "/images/hero.png?height=300&width=250",
      price: "₹999",
      description: "Premium hoodie celebrating the spirit of IIT KGP.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Navy"],
    },
    {
      id: 22,
      name: "Campus Pride Sweatshirt",
      image: "/images/hero.png?height=300&width=250",
      price: "₹849",
      description: "Comfortable sweatshirt for KGP alumni and students.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Maroon", "White"],
    },
  ]

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }))
  }

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }))
  }

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id] || product.sizes[0]
    const color = selectedColors[product.id] || product.colors[0]
    addToCart(product, size, color)

    const button = document.querySelector(`[data-product-id="${product.id}"] .add-to-cart`)
    if (button) {
      const originalText = button.textContent
      button.textContent = "Added! ✓"
      button.style.background = "#28a745"
      setTimeout(() => {
        button.textContent = originalText
        button.style.background = ""
      }, 1500)
    }
  }

  return (
    <section className="exclusively-kgp section">
      <div className="container">
        <div className="kgp-header">
          <div className="kgp-badge"><span>EXCLUSIVELY FOR KGPians</span></div>
          <h2 className="section-title kgp-title">For the Campus Legends</h2>
          <p className="kgp-description">Crafted for the legends of IIT KGP — wear your pride.</p>
          <p className="kgp-description">All the T-shirts labeled as "KGP Exclusive" has IIT Kharagpur written in the back and have custom name</p>
        </div>

        <div className="kgp-products-grid">
          {kgpProducts.map((product) => (
            <div key={product.id} className="kgp-product-card" data-product-id={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="kgp-product-image" />
                <div className="kgp-exclusive-badge">KGP EXCLUSIVE</div>
              </div>

              <div className="kgp-product-info">
                <h3 className="kgp-product-name">{product.name}</h3>
                <p>{product.description}</p>

                <div className="product-options">
                  <div className="size-options">
                    <span className="option-label">Sizes:</span>
                    <div className="size-list">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className={`size-option ${selectedSizes[product.id] === size ? "selected" : ""}`}
                          onClick={() => handleSizeSelect(product.id, size)}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="color-options">
                    <span className="option-label">Colors:</span>
                    <div className="color-list">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className={`color-option ${selectedColors[product.id] === color ? "selected" : ""}`}
                          onClick={() => handleColorSelect(product.id, color)}
                        >
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
