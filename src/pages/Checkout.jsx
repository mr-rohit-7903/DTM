"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./style/Checkout.css"

const Checkout = ({ cartItems, getTotalPrice, getTotalItems }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Shipping Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",

    // Payment Information
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Personal Information
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Phone number must be 10 digits"

    // Shipping Address
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state.trim()) newErrors.state = "State is required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required"

    // Payment Information
    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
        newErrors.cardNumber = "Card number must be 16 digits"

      if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required"
      else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) newErrors.expiryDate = "Format: MM/YY"

      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required"
      else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3-4 digits"

      if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsProcessing(true)

    // Simulate payment processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success - redirect to success page or show success message
      alert(`Order placed successfully! Total: ₹${getTotalPrice().toLocaleString()}`)
      navigate("/")
    } catch (error) {
      alert("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    setFormData((prev) => ({ ...prev, cardNumber: formatted }))
  }

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4)
    }
    setFormData((prev) => ({ ...prev, expiryDate: value }))
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-checkout">
            <h1>Your cart is empty</h1>
            <p>Add some items to your cart before checking out.</p>
            <button className="btn btn-primary" onClick={() => navigate("/shop")}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1 className="checkout-title">Checkout</h1>
          <div className="checkout-steps">
            <div className="step active">
              <span className="step-number">1</span>
              <span className="step-label">Information</span>
            </div>
            <div className="step active">
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <span className="step-label">Complete</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section">
              <h2 className="section-title">Personal Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Steve"
                    className={errors.firstName ? "error" : ""}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Rogers"
                    className={errors.lastName ? "error" : ""}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="form-section">
              <h2 className="section-title">Shipping Address</h2>
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address, apartment, suite, etc."
                  className={errors.address ? "error" : ""}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? "error" : ""}
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={errors.state ? "error" : ""}
                  />
                  {errors.state && <span className="error-message">{errors.state}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={errors.zipCode ? "error" : ""}
                  />
                  {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                </div>
              </div>
            </div>

            {/* Payment Information */}
            {/* <div className="form-section">
              <h2 className="section-title">Payment Information</h2>
              <div className="payment-methods">
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  <span className="payment-method-label">
                    <span className="payment-icon">💳</span>
                    Credit/Debit Card
                  </span>
                </label>
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={handleChange}
                  />
                  <span className="payment-method-label">
                    <span className="payment-icon">📱</span>
                    UPI
                  </span>
                </label>
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  <span className="payment-method-label">
                    <span className="payment-icon">💰</span>
                    Cash on Delivery
                  </span>
                </label>
              </div>

              {formData.paymentMethod === "card" && (
                <div className="card-details">
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      className={errors.cardNumber ? "error" : ""}
                    />
                    {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        className={errors.expiryDate ? "error" : ""}
                      />
                      {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength="4"
                        className={errors.cvv ? "error" : ""}
                      />
                      {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardName">Cardholder Name *</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Name as it appears on card"
                      className={errors.cardName ? "error" : ""}
                    />
                    {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                  </div>
                </div>
              )}

              {formData.paymentMethod === "upi" && (
                <div className="upi-details">
                  <p className="payment-info">You will be redirected to your UPI app to complete the payment.</p>
                </div>
              )}

              {formData.paymentMethod === "cod" && (
                <div className="cod-details">
                  <p className="payment-info">
                    Pay with cash when your order is delivered. Additional charges may apply.
                  </p>
                </div>
              )}
            </div> */}

            <button type="submit" className="btn btn-primary place-order-btn" disabled={isProcessing}>
              {isProcessing ? "Processing..." : `Place Order - ₹${getTotalPrice().toLocaleString()}`}
            </button>
          </form>

          {/* Order Summary */}
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>

            <div className="order-items">
              {cartItems.map((item) => (
                <div key={item.cartId} className="order-item">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <div className="item-options">
                      <span>Size: {item.size}</span>
                      <span>Color: {item.color}</span>
                      <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="item-price">
                    ₹{(Number.parseInt(item.price.replace("₹", "").replace(",", "")) * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              {/* <div className="total-row">
                <span>Tax</span>
                <span>₹{Math.round(getTotalPrice() * 0.18).toLocaleString()}</span>
              </div> */}
              <div className="total-row final-total">
                <span>Total</span>
                <span>₹{(getTotalPrice()).toLocaleString()}</span>
              </div>
            </div>

            <div className="security-badges">
              <div className="security-badge">
                <span className="badge-icon">🔒</span>
                <span>Secure Payment</span>
              </div>
              <div className="security-badge">
                <span className="badge-icon">🚚</span>
                <span>Free Shipping</span>
              </div>
              {/* <div className="security-badge">
                <span className="badge-icon">↩️</span>
                <span>Easy Returns</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
