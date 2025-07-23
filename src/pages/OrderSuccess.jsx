"use client"

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./style/OrderSuccess.css"

const OrderSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { orderId, paymentId } = location.state || {}

  useEffect(() => {
    // If no order data, redirect to home
    if (!orderId || !paymentId) {
      navigate("/")
    }
  }, [orderId, paymentId, navigate])

  const handleContinueShopping = () => {
    navigate("/shop")
  }

  const handleViewOrders = () => {
    navigate("/orders") // You can create this page later
  }

  if (!orderId || !paymentId) {
    return null
  }

  return (
    <div className="order-success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-animation">
            <div className="checkmark-circle">
              <div className="checkmark">✓</div>
            </div>
          </div>

          <div className="success-message">
            <h1 className="success-title">Order Placed Successfully!</h1>
            <p className="success-subtitle">
              Thank you for your purchase. Your order has been confirmed and will be processed shortly.
            </p>
          </div>

          <div className="order-details">
            <div className="detail-card">
              <h3>Order ID</h3>
              <p>{orderId}</p>
            </div>
            <div className="detail-card">
              <h3>Payment ID</h3>
              <p>{paymentId}</p>
            </div>
          </div>

          <div className="next-steps">
            <h3>What's Next?</h3>
            <div className="steps-grid">
              <div className="step-item">
                <span className="step-icon">📧</span>
                <div>
                  <h4>Confirmation Email</h4>
                  <p>You'll receive an order confirmation email shortly</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-icon">📦</span>
                <div>
                  <h4>Processing</h4>
                  <p>Your order will be processed within 1-2 business days</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-icon">🚚</span>
                <div>
                  <h4>Shipping</h4>
                  <p>You'll receive tracking information once shipped</p>
                </div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            {/* <button className="btn btn-secondary" onClick={handleViewOrders}>
              View Orders
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
