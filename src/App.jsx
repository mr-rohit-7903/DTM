"use client"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import SizeGuide from "./pages/SizeGuide"
import ShippingInfo from "./pages/ShippingInfo"
import Returns from "./pages/Returns"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import CookiePolicy from "./pages/CookiePolicy"
import RefundPolicy from "./pages/RefundPolicy"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, selectedSize = "M", selectedColor = "Black") => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === selectedSize && item.color === selectedColor,
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === selectedSize && item.color === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      } else {
        return [
          ...prevItems,
          {
            ...product,
            size: selectedSize,
            color: selectedColor,
            quantity: 1,
            cartId: `${product.id}-${selectedSize}-${selectedColor}`,
          },
        ]
      }
    })
  }

  const removeFromCart = (cartId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(cartId)
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.cartId === cartId ? { ...item, quantity: newQuantity } : item)),
      )
    }
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = Number.parseInt(item.price.replace("₹", "").replace(",", ""))
      return total + price * item.quantity
    }, 0)
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar
        cartItems={cartItems}
        totalItems={getTotalItems()}
        totalPrice={getTotalPrice()}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} getTotalPrice={getTotalPrice} getTotalItems={getTotalItems} />}
        />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
