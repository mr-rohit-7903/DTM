const express = require("express")
const Razorpay = require("razorpay")
const crypto = require("crypto")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Initialize Razorpay with your actual credentials
const razorpay = new Razorpay({
  key_id: "rzp_test_kKhkXD2e6LLagV", // Your test key ID
  key_secret: "aA6XtCqwANyl3s3enanho1hw", // ⚠️ Replace with your actual secret
})

// Test endpoint to verify server is running
app.get("/", (req, res) => {
  res.json({ message: "Darkmode Threads Backend Server is running!" })
})

// Create Order
app.post("/api/create-order", async (req, res) => {
  try {
    console.log("Creating order with data:", req.body)

    const { amount, currency, customerInfo, shippingAddress, cartItems } = req.body

    // Validate required fields
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        error: "Invalid amount",
      })
    }

    const options = {
      amount: Math.round(amount * 100), // Amount in paise (multiply by 100)
      currency: currency || "INR",
      receipt: `order_${Date.now()}`,
      notes: {
        customer_name: customerInfo?.name || "Unknown",
        customer_email: customerInfo?.email || "unknown@email.com",
        customer_phone: customerInfo?.phone || "0000000000",
        shipping_address: JSON.stringify(shippingAddress || {}),
        cart_items: JSON.stringify(cartItems || []),
      },
    }

    console.log("Razorpay order options:", options)

    const order = await razorpay.orders.create(options)

    console.log("Order created successfully:", order)

    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    })
  } catch (error) {
    console.error("Error creating order:", error)
    res.status(500).json({
      success: false,
      error: error.message || "Failed to create order",
    })
  }
})

// Verify Payment
app.post("/api/verify-payment", async (req, res) => {
  try {
    console.log("Verifying payment with data:", req.body)

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerInfo,
      shippingAddress,
      cartItems,
      totalAmount,
    } = req.body

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac("sha256", "aA6XtCqwANyl3s3enanho1hw") // ⚠️ Replace with your actual secret
      .update(body.toString())
      .digest("hex")

    console.log("Expected signature:", expectedSignature)
    console.log("Received signature:", razorpay_signature)

    if (expectedSignature === razorpay_signature) {
      // Payment is verified
      const orderId = `ORD${Date.now()}`

      // Save order details to database (implement your database logic here)
      const orderDetails = {
        orderId,
        razorpay_order_id,
        razorpay_payment_id,
        customerInfo,
        shippingAddress,
        cartItems,
        totalAmount,
        status: "paid",
        createdAt: new Date(),
      }

      console.log("Order Details:", orderDetails)

      res.json({
        success: true,
        orderId,
        message: "Payment verified successfully",
      })
    } else {
      console.error("Signature mismatch")
      res.status(400).json({
        success: false,
        error: "Invalid signature",
      })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    res.status(500).json({
      success: false,
      error: error.message || "Payment verification failed",
    })
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err)
  res.status(500).json({
    success: false,
    error: "Internal server error",
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 API endpoints:`)
  console.log(`   GET  http://localhost:${PORT}/`)
  console.log(`   POST http://localhost:${PORT}/api/create-order`)
  console.log(`   POST http://localhost:${PORT}/api/verify-payment`)
})
