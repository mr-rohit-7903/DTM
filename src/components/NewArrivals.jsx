"use client"

import "./style/NewArrivals.css"

const NewArrivals = ({ addToCart }) => {
  const newProducts = [
    {
      id: 16,
      name: "Async/Await Tee",
      price: "₹649",
      image: "/placeholder.svg?height=300&width=250",
      isNew: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Purple"],
    },
    {
      id: 17,
      name: "Git Commit Hoodie",
      price: "₹899",
      image: "/placeholder.svg?height=300&width=250",
      isNew: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Grey", "Green"],
    },
    {
      id: 18,
      name: "Stack Overflow Savior",
      price: "₹599",
      image: "/placeholder.svg?height=300&width=250",
      isNew: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Orange", "White"],
    },
    {
      id: 19,
      name: "Merge Conflict Tee",
      price: "₹549",
      image: "/placeholder.svg?height=300&width=250",
      isNew: true,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Red", "Grey"],
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
                {product.isNew && <div className="new-badge">NEW</div>}
                <div className="arrival-overlay">
                  <div className="overlay-content">
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                    <button className="btn btn-secondary">View Details</button>
                  </div>
                </div>
              </div>

              <div className="arrival-info">
                <h3 className="arrival-name">{product.name}</h3>
                <p className="arrival-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
