"use client"

import "./style/NewArrivals.css"

const NewArrivals = ({ addToCart }) => {
  const newProducts = [
    {
      id: 16,
      name: "Async/Await Tee",
      price: "₹649",
      image: "/placeholder.svg?height=300&width=250",
      description: "Wait for it... Premium tee celebrating modern JavaScript. Soft and stylish.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Purple"],
      badge: "New",
    },
    {
      id: 17,
      name: "Git Commit Hoodie",
      price: "₹899",
      image: "/placeholder.svg?height=300&width=250",
      description: "Commit to style with this Git-themed hoodie. Perfect for version control enthusiasts.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Green"],
      badge: "New",
    },
    {
      id: 18,
      name: "Stack Overflow Savior",
      price: "₹599",
      image: "/placeholder.svg?height=300&width=250",
      description: "For those who live by Stack Overflow. Tribute tee to every developer's best friend.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Orange", "White"],
      badge: "New",
    },
    {
      id: 19,
      name: "Merge Conflict Tee",
      price: "₹549",
      image: "/placeholder.svg?height=300&width=250",
      description: "When branches collide. Comfortable fit with developer humor that hits different.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Red", "Grey"],
      badge: "New",
    },
  ]

  const handleAddToCart = (product) => {
    addToCart(product, "M", product.colors[0])
  }

  return (
    <section className="new-arrivals section">
      <div className="container">
        <h2 className="section-title">Fresh Drops</h2>
        <p className="section-subtitle">Latest designs straight from our creative lab</p>

        <div className="arrivals-grid">
          {newProducts.map((product) => (
            <div key={product.id} className="arrival-card">
              <div className="arrival-image-wrapper">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="arrival-image" />
                <div className="product-badge">{product.badge}</div>
              </div>

              <div className="arrival-info">
                <h3 className="arrival-name">{product.name}</h3>
                <p className="arrival-description">{product.description}</p>

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

                <div className="arrival-pricing">
                  <span className="arrival-price">{product.price}</span>
                </div>

                <div className="arrival-actions">
                  <button className="btn btn-primary add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="btn btn-secondary like-btn">🤍</button>
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
