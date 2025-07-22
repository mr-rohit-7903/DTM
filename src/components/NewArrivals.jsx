"use client"

import { useState } from "react"
import "./style/NewArrivals.css"

const NewArrivals = ({ addToCart }) => {
  const newProducts = [
    {
      id: 16,
      name: "Async/Await Tee",
      price: "₹649",
      image: "/images/hero.png",
      description: "Wait for it... Premium tee celebrating modern JavaScript. Soft and stylish.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Purple"],
      badge: "New",
    },
    {
      id: 17,
      name: "Git Commit Hoodie",
      price: "₹899",
      image: "/images/hero.png",
      description: "Commit to style with this Git-themed hoodie. Perfect for version control enthusiasts.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Green"],
      badge: "New",
    },
    {
      id: 18,
      name: "Stack Overflow Savior",
      price: "₹599",
      image: "/images/hero.png",
      description: "For those who live by Stack Overflow. Tribute tee to every developer's best friend.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Orange", "White"],
      badge: "New",
    },
    {
      id: 19,
      name: "Merge Conflict Tee",
      price: "₹549",
      image: "/images/hero.png",
      description: "When branches collide. Comfortable fit with developer humor that hits different.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Red", "Grey"],
      badge: "New",
    },
  ]

  const [selectedOptions, setSelectedOptions] = useState({})

  const handleOptionChange = (productId, type, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type]: value,
      },
    }))
  }

  const handleAddToCart = (product) => {
    const selectedSize = selectedOptions[product.id]?.size || "M"
    const selectedColor = selectedOptions[product.id]?.color || product.colors[0]
    addToCart(product, selectedSize, selectedColor)

    // Show success feedback
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
    <section className="new-arrivals section">
      <div className="container">
        <h2 className="section-title">Fresh Drops</h2>
        <p className="section-subtitle">Latest designs straight from our creative lab</p>

        <div className="arrivals-grid">
          {newProducts.map((product) => (
            <div key={product.id} className="arrival-card" data-product-id={product.id}>
              <div className="arrival-image-wrapper">
                <img src={product.image || "/images/hero.png"} alt={product.name} className="arrival-image" />
                <div className="product-badge">{product.badge}</div>
              </div>

              <div className="arrival-info">
                <h3 className="arrival-name">{product.name}</h3>
                <p className="arrival-description">{product.description}</p>

                <div className="product-options">
                  <div className="size-options">
                    <span className="option-label">Size:</span>
                    <div className="size-list">
                      {product.sizes.map((size) => (
                        <label key={size} className={`size-option ${selectedOptions[product.id]?.size === size ? "selected" : ""}` }>
                          <input
                            type="radio"
                            name={`size-${product.id}`}
                            value={size}
                            checked={selectedOptions[product.id]?.size === size}
                            onChange={() => handleOptionChange(product.id, "size", size)}
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="color-options">
                    <span className="option-label">Color:</span>
                    <div className="color-list">
                      {product.colors.map((color) => (
                        <label key={color} className={`color-option ${selectedOptions[product.id]?.color === color ? "selected" : ""}`}>
                          <input
                            type="radio"
                            name={`color-${product.id}`}
                            value={color}
                            checked={selectedOptions[product.id]?.color === color}
                            onChange={() => handleOptionChange(product.id, "color", color)}
                          />
                          {color}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="arrival-pricing">
                  <span className="arrival-price">{product.price}</span>
                </div>

                <div className="arrival-actions">
                  <button className="btn btn-primary add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
