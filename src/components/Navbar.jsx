"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./style/Navbar.css"

const Navbar = ({ cartItems, totalItems, totalPrice, removeFromCart, updateQuantity }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const handleCheckout = () => {
    // alert(`Proceeding to checkout with ${totalItems} items worth ₹${totalPrice.toLocaleString()}`)
    setIsCartOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <Link to="/">
              <img src="/images/DARKMODE.png?height=52&width=178" alt="Darkmode Threads" className="logo-img" />
            </Link>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "nav-links-mobile" : ""}`}>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" className={isActive("/shop") ? "active" : ""}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <div className="cart-container">
              <button className="cart-button" onClick={toggleCart}>
                <span className="cart-icon">🛒</span>
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </button>

              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="cart-header">
                    <h3>Shopping Cart</h3>
                    <button className="close-cart" onClick={toggleCart}>
                      ×
                    </button>
                  </div>

                  <div className="cart-items">
                    {cartItems.length === 0 ? (
                      <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <span className="empty-cart-icon">🛒</span>
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.cartId} className="cart-item">
                          <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />

                          <div className="cart-item-details">
                            <h4 className="cart-item-name">{item.name}</h4>
                            <div className="cart-item-options">
                              <span>Size: {item.size}</span>
                              <span>Color: {item.color}</span>
                            </div>
                            <div className="cart-item-price">{item.price}</div>
                          </div>

                          <div className="cart-item-controls">
                            <div className="quantity-controls">
                              <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="quantity">{item.quantity}</span>
                              <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <button className="remove-btn" onClick={() => removeFromCart(item.cartId)}>
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    <div className="cart-footer">
                      <div className="cart-total">
                        <div className="total-items">Total Items: {totalItems}</div>
                        <div className="total-price">Total: ₹{totalPrice.toLocaleString()}</div>
                      </div>
                      <Link to="/checkout">
                        <button className="checkout-btn" onClick={handleCheckout}>
                          Proceed to Checkout
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </nav>
  )
}

export default Navbar
