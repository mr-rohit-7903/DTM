"use client";

import { useState } from "react";
import "./style/BestSellers.css";

const BestSellers = ({ addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

  const products = [
    {
      id: 16,
      name: "IDGAF",
      price: "₹349",
      image: "/kgp/idgaf.png",
      description: "Wait for it... Premium tee celebrating modern JavaScript. Soft and stylish.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      badge: "New",
    },
    {
      id: 21,
      name: "KGP Lingo",
      image: "/kgp/lingo-mockup.png?height=300&width=250",
      price: "₹499",
      description: "Premium hoodie celebrating the spirit of IIT KGP.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      badge: "KGP EXCLUSIVE",
    },
    {
      id: 18,
      name: "Sombody Cares",
      price: "₹349",
      image: "/kgp/cares.png",
      description: "For those who live by Stack Overflow. Tribute tee to every developer's best friend.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black"],
      badge: "New",
    },
    {
      id: 19,
      name: "Future-Past",
      price: "₹349",
      image: "/kgp/past.png",
      description: "When branches collide. Comfortable fit with developer humor that hits different.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White"],
      badge: "New",
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
