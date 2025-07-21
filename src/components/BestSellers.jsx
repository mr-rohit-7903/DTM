"use client"

import "./style/BestSellers.css"

const BestSellers = ({ addToCart }) => {
  const products = [
    {
      id: 10,
      name: "Debugging Life Tee",
      price: "₹599",
      image: "/placeholder.svg?height=300&width=250",
      badge: "Best Seller",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"],
    },
    {
      id: 11,
      name: "404 Not Found Hoodie",
      price: "₹899",
      image: "/placeholder.svg?height=300&width=250",
      badge: "Hot",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Grey", "Maroon"],
    },
    {
      id: 12,
      name: "Ctrl+Alt+Delete Tee",
      price: "₹549",
      image: "/placeholder.svg?height=300&width=250",
      badge: "Popular",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Grey"],
    },
    {
      id: 13,
      name: "Infinite Loop Sweatshirt",
      price: "₹799",
      image: "/placeholder.svg?height=300&width=250",
      badge: "Trending",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Forest Green"],
    },
    {
      id: 14,
      name: "Binary Dreams Tee",
      price: "₹599",
      image: "/placeholder.svg?height=300&width=250",
      badge: "New",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Blue", "Purple"],
    },
    {
      id: 15,
      name: "Code & Coffee Hoodie",
      price: "₹849",
      image: "/placeholder.svg?height=300&width=250",
      badge: "Limited",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Brown", "Dark Grey"],
    },
  ]

  const handleAddToCart = (product) => {
    addToCart(product, "M", product.colors[0])
  }

  return (
    <section className="best-sellers section">
      <div className="container">
        <h2 className="section-title">Best Sellers</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                <div className="product-badge">{product.badge}</div>
                <div className="product-overlay">
                  <button className="btn btn-primary">Quick View</button>
                </div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="btn btn-secondary product-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers
