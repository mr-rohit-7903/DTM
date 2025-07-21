"use client"

import { useState } from "react"
import "./style/Shop.css"

const Shop = ({ addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({})
  const [selectedColors, setSelectedColors] = useState({})
  const [likedProducts, setLikedProducts] = useState(new Set())

  const products = [
    {
      id: 1,
      name: "Debugging Life Tee",
      price: "₹599",
      originalPrice: "₹799",
      image: "/placeholder.svg?height=400&width=300",
      description: "Perfect for those late-night coding sessions. Soft cotton blend with a witty debugging print.",
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
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Yellow", "Navy"],
      badge: "Trending",
    },
  ]

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

  const handleLike = (productId) => {
    setLikedProducts((prev) => {
      const newLiked = new Set(prev)
      if (newLiked.has(productId)) {
        newLiked.delete(productId)
      } else {
        newLiked.add(productId)
      }
      return newLiked
    })
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
    <div className="shop-page">
      <section className="shop-hero section">
        <div className="container">
          <h1 className="shop-title">Our Collection</h1>
          <p className="shop-subtitle">Discover the perfect blend of comfort, style, and geek culture</p>
        </div>
      </section>

      <section className="products-section section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card" data-product-id={product.id}>
                <div className="product-image-container">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                </div>

                <div className="product-details">
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
                    <button
                      className={`btn btn-secondary like-btn ${likedProducts.has(product.id) ? "liked" : ""}`}
                      onClick={() => handleLike(product.id)}
                    >
                      {likedProducts.has(product.id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
