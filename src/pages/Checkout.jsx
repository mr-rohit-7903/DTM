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
    const missingFields = []

    // Personal Information
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      missingFields.push("First Name")
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      missingFields.push("Last Name")
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      missingFields.push("Email")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      missingFields.push("Valid Email")
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      missingFields.push("Phone Number")
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits"
      missingFields.push("Valid Phone Number (10 digits)")
    }

    // Shipping Address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
      missingFields.push("Address")
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required"
      missingFields.push("City")
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required"
      missingFields.push("State")
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required"
      missingFields.push("ZIP Code")
    }

    setErrors(newErrors)

    // Show single alert for all missing fields
    if (missingFields.length > 0) {
      if (missingFields.length === 1) {
        alert(`Please fill in the ${missingFields[0]} field.`)
      } else if (missingFields.length === 2) {
        alert(`Please fill in the ${missingFields[0]} and ${missingFields[1]} fields.`)
      } else {
        const lastField = missingFields.pop()
        alert(`Please fill in the following fields: ${missingFields.join(", ")}, and ${lastField}.`)
      }
    }

    return Object.keys(newErrors).length === 0
  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      // Check if Razorpay is already loaded
      if (window.Razorpay) {
        resolve(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => {
        console.log("Razorpay script loaded successfully")
        resolve(true)
      }
      script.onerror = () => {
        console.error("Failed to load Razorpay script")
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Form submitted")

    if (!validateForm()) {
      console.log("Form validation failed")
      return
    }

    setIsProcessing(true)

    try {
      // Load Razorpay script
      console.log("Loading Razorpay script...")
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        alert("Failed to load Razorpay SDK. Please check your internet connection.")
        setIsProcessing(false)
        return
      }

      console.log("Creating order...")

      // Calculate total with tax
      const subtotal = getTotalPrice()
      const total = subtotal

      // Create order on backend
      const response = await fetch("http://localhost:5000/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total, // Total amount including tax
          currency: "INR",
          customerInfo: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
          },
          shippingAddress: {
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            country: formData.country,
          },
          cartItems: cartItems,
        }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Server response error:", errorText)
        throw new Error(`Server error: ${response.status}`)
      }

      const data = await response.json()
      console.log("Order created:", data)

      if (!data.success) {
        throw new Error(data.error || "Failed to create order")
      }

      const { order } = data

      // Configure Razorpay options
      const options = {
        key: "rzp_test_kKhkXD2e6LLagV", // Your Razorpay key ID
        amount: order.amount,
        currency: order.currency,
        name: "Darkmode Threads",
        description: "T-shirt Order Payment",
        image: "/placeholder.svg?height=52&width=178",
        order_id: order.id,
        handler: async (response) => {
          console.log("Payment successful:", response)
          try {
            // Verify payment on backend
            const verifyResponse = await fetch("http://localhost:5000/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                customerInfo: {
                  name: `${formData.firstName} ${formData.lastName}`,
                  email: formData.email,
                  phone: formData.phone,
                },
                shippingAddress: {
                  address: formData.address,
                  city: formData.city,
                  state: formData.state,
                  zipCode: formData.zipCode,
                  country: formData.country,
                },
                cartItems: cartItems,
                totalAmount: total,
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyResponse.ok && verifyData.success) {
              // Payment successful
              console.log("Payment verified successfully")
              navigate("/order-success", {
                state: {
                  orderId: verifyData.orderId,
                  paymentId: response.razorpay_payment_id,
                },
              })
            } else {
              throw new Error(verifyData.error || "Payment verification failed")
            }
          } catch (error) {
            console.error("Payment verification error:", error)
            alert("Payment verification failed. Please contact support.")
          } finally {
            setIsProcessing(false)
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
        },
        theme: {
          color: "#ff6b6b",
        },
        modal: {
          ondismiss: () => {
            console.log("Payment modal dismissed")
            setIsProcessing(false)
          },
        },
      }

      console.log("Opening Razorpay checkout with options:", options)

      // Open Razorpay checkout
      const rzp = new window.Razorpay(options)

      rzp.on("payment.failed", (response) => {
        console.error("Payment failed:", response.error)
        alert(`Payment failed: ${response.error.description}`)
        setIsProcessing(false)
      })

      rzp.open()
    } catch (error) {
      console.error("Payment initiation error:", error)
      alert(`Failed to initiate payment: ${error.message}`)
      setIsProcessing(false)
    }
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
                    placeholder="Steve (name on t-shirt for KGP Exclusive)"
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

            <button type="submit" className="btn btn-primary place-order-btn" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <span className="loading-spinner"></span>
                  Processing...
                </>
              ) : (
                `Pay ₹${(getTotalPrice()).toLocaleString()} - Place Order`
              )}
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
              <div className="total-row final-total">
                <span>Total</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
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
              <div className="security-badge">
                <span className="badge-icon">↩️</span>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
