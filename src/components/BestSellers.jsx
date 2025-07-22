"use client";

import { useState } from "react";
import "./style/BestSellers.css";

const BestSellers = ({ addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

  const products = [
    {
      id: 10,
      name: "Debugging Life Tee",
      price: "₹599",
      image: "/images/hero.png?height=300&width=250",
      description: "Perfect for those late-night coding sessions. Soft cotton blend with a witty debugging print.",
      badge: "Best Seller",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"],
    },
    {
      id: 11,
      name: "404 Not Found Hoodie",
      price: "₹899",
      image: "/images/hero.png?height=300&width=250",
      description: "Stay warm while staying geeky. Premium hoodie with kangaroo pocket and adjustable hood.",
      badge: "Hot",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Grey", "Maroon"],
    },
    {
      id: 12,
      name: "Ctrl+Alt+Delete Tee",
      price: "₹549",
      image: "/images/hero.png?height=300&width=250",
      description: "When life gets complicated, just restart. Comfortable fit with vintage-style print.",
      badge: "Popular",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Grey"],
    },
    {
      id: 13,
      name: "Infinite Loop Sweatshirt",
      price: "₹799",
      image: "/images/hero.png?height=300&width=250",
      description: "Cozy sweatshirt for endless coding marathons. Fleece-lined interior for maximum comfort.",
      badge: "Trending",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Forest Green"],
    },
    {
      id: 14,
      name: "Binary Dreams Tee",
      price: "₹599",
      image: "/images/hero.png?height=300&width=250",
      description: "Dream in binary, wake up in code. Soft fabric with glow-in-the-dark binary pattern.",
      badge: "New",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Blue", "Purple"],
    },
    {
      id: 15,
      name: "Code & Coffee Hoodie",
      price: "₹849",
      image: "/images/hero.png?height=300&width=250",
      description: "The perfect combination for productivity. Premium hoodie with coffee-themed coding humor.",
      badge: "Limited",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Brown", "Dark Grey"],
    },
  ];

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id] || "M";
    const selectedColor = selectedColors[product.id] || product.colors[0];

    addToCart(product, selectedSize, selectedColor);

    const button = document.querySelector(
      `[data-product-id="${product.id}"] .add-to-cart`
    );
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Added! ✓";
      button.style.background = "#28a745";
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
      }, 1500);
    }
  };

  return (
    <section className="best-sellers section">
      <div className="container">
        <h2 className="section-title">Best Sellers</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              data-product-id={product.id}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.image || "/images/hero.png"}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-badge">{product.badge}</div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-options">
                  <div className="size-options">
                    <span className="option-label">Sizes:</span>
                    <div className="size-list">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className={`size-option ${
                            selectedSizes[product.id] === size
                              ? "selected"
                              : ""
                          }`}
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
                          className={`color-option ${
                            selectedColors[product.id] === color
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleColorSelect(product.id, color)
                          }
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-pricing">
                  <span className="product-price">{product.price}</span>
                </div>

                <div className="product-actions">
                  <button
                    className="btn btn-primary add-to-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
