"use client"

import { useState } from "react"
import "./style/Shop.css"

const Shop = ({ addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({})
  const [selectedColors, setSelectedColors] = useState({})

  const products = [
    {
      id: 1,
      name: "Debugging Life Tee",
      price: "₹599",
      originalPrice: "₹799",
      image: "/placeholder.svg?height=400&width=300",
      description: "Perfect for those late-night coding sessions. Soft cotton blend with a witty debugging print.",
      category: "T-Shirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"],
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "404 Not Found Hoodie",
      price: "₹899",
      originalPrice: "₹1199",
      image: "/placeholder.svg?height=400&width=300",
      description: "Stay warm while staying geeky. Premium hoodie with kangaroo pocket and adjustable hood.",
      category: "Hoodies",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Grey", "Maroon"],
      badge: "Hot",
    },
    {
      id: 3,
      name: "Ctrl+Alt+Delete Tee",
      price: "₹549",
      originalPrice: "₹699",
      image: "/placeholder.svg?height=400&width=300",
      description: "When life gets complicated, just restart. Comfortable fit with vintage-style print.",
      category: "T-Shirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Grey"],
      badge: "Popular",
    },
    {
      id: 4,
      name: "Infinite Loop Sweatshirt",
      price: "₹799",
      originalPrice: "₹999",
      image: "/placeholder.svg?height=400&width=300",
      description: "Cozy sweatshirt for endless coding marathons. Fleece-lined interior for maximum comfort.",
      category: "Sweatshirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Forest Green"],
      badge: "Trending",
    },
    {
      id: 5,
      name: "Binary Dreams Tee",
      price: "₹599",
      originalPrice: "₹749",
      image: "/placeholder.svg?height=400&width=300",
      description: "Dream in binary, wake up in code. Soft fabric with glow-in-the-dark binary pattern.",
      category: "T-Shirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Blue", "Purple"],
      badge: "New",
    },
    {
      id: 6,
      name: "Code & Coffee Hoodie",
      price: "₹849",
      originalPrice: "₹1099",
      image: "/placeholder.svg?height=400&width=300",
      description: "The perfect combination for productivity. Premium hoodie with coffee-themed coding humor.",
      category: "Hoodies",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Brown", "Dark Grey"],
      badge: "Limited",
    },
    {
      id: 7,
      name: "Git Commit Tee",
      price: "₹579",
      originalPrice: "₹729",
      image: "/placeholder.svg?height=400&width=300",
      description: "Commit to style with this Git-themed tee. Perfect for version control enthusiasts.",
      category: "T-Shirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Olive"],
      badge: "New",
    },
    {
      id: 8,
      name: "Stack Overflow Savior",
      price: "₹629",
      originalPrice: "₹799",
      image: "/placeholder.svg?height=400&width=300",
      description: "For those who live by Stack Overflow. Tribute tee to every developer's best friend.",
      category: "T-Shirts",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Orange", "Grey"],
      badge: "Popular",
    },
    {
      id: 9,
      name: "Async/Await Hoodie",
      price: "₹899",
      originalPrice: "₹1149",
      image: "/placeholder.svg?height=400&width=300",
      description: "Wait for it... Premium hoodie celebrating modern JavaScript. Soft and stylish.",
      category: "Hoodies",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Yellow", "Navy"],
      badge: "Trending",
    },
  ]

  const categories = ["All", "T-Shirts", "Hoodies", "Sweatshirts"]

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }))
  }

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }))
  }

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id] || product.sizes[0]
    const selectedColor = selectedColors[product.id] || product.colors[0]
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
    <section className="shop section">
      <div className="container">
        <div className="shop-header">
          <h2 className="section-title">Our Collection</h2>
          <p className="shop-subtitle">Discover the perfect blend of comfort, style, and geek culture</p>
        </div>

        <div className="shop-filters">
          <div className="filter-categories">
            {categories.map((category) => (
              <button key={category} className="filter-btn active">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="shop-product-card" data-product-id={product.id}>
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="shop-product-image" />
                {product.badge && <div className="product-badge">{product.badge}</div>}

                <div className="product-overlay">
                  <div className="overlay-actions">
                    <button className="btn btn-primary quick-add" onClick={() => handleAddToCart(product)}>
                      Quick Add
                    </button>
                    <button className="btn btn-secondary view-details">View Details</button>
                  </div>
                </div>
              </div>

              <div className="product-details">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

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

                <div className="product-pricing">
                  <span className="current-price">{product.price}</span>
                  {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                </div>

                <div className="product-actions">
                  <button className="btn btn-primary add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="btn btn-secondary wishlist">♡</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop-cta">
          <p className="cta-text">Can't find what you're looking for?</p>
          <button className="btn btn-secondary">Request Custom Design</button>
        </div>
      </div>
    </section>
  )
}

export default Shop
