const express = require("express")
const Razorpay = require("razorpay")
const crypto = require("crypto")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: "rzp_test_kKhkXD2e6LLagV",
  key_secret: "aA6XtCqwANyl3s3enanho1hw",
})

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "darkmodethreads@gmail.com", // Replace with your email
    pass: "skehhulkzusonwsc",    // App password if 2FA enabled
  },
})

const sendMail = async (to, subject, text) => {
  await transporter.sendMail({
    from: '"Darkmode Threads" <rohit098bej@gmail.com>',
    to,
    subject,
    text,
  })
}

// Test endpoint
app.get("/", (req, res) => {
  res.json({ message: "Darkmode Threads Backend Server is running!" })
})

// Create Order
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount, currency, customerInfo, shippingAddress, cartItems } = req.body

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: "Invalid amount" })
    }

    const options = {
      amount: Math.round(amount * 100),
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

    const order = await razorpay.orders.create(options)

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
    res.status(500).json({ success: false, error: error.message })
  }
})

// Verify Payment
app.post("/api/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerInfo,
      shippingAddress,
      cartItems,
      totalAmount,
    } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac("sha256", "aA6XtCqwANyl3s3enanho1hw")
      .update(body.toString())
      .digest("hex")

    if (expectedSignature === razorpay_signature) {
      const orderId = `ORD${Date.now()}`

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

      // Format cart items
      const formatCartItems = (items) =>
        items.map((item, index) =>
          `#${index + 1}: ${item.name} - Size: ${item.size}, Color: ${item.color}, Qty: ${item.quantity}, Price: ₹${item.price}`
        ).join("\n")

      const formattedItems = formatCartItems(cartItems)
      const shippingLine = `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state}, ${shippingAddress.country} - ${shippingAddress.zipCode}`

      const userEmailBody = `
Hi ${customerInfo.name},

✅ Your payment was successful!

🔢 Order ID: ${orderId}
💳 Payment ID: ${razorpay_payment_id}
💰 Amount Paid: ₹${totalAmount}

🛍️ Items Ordered:
${formattedItems}

📦 Shipping To:
${shippingLine}

Thanks for shopping with Darkmode Threads!
`

      const adminEmailBody = `
🛒 New Order Received!

🧑 Customer: ${customerInfo.name}
📧 Email: ${customerInfo.email}
📱 Phone: ${customerInfo.phone}

🔢 Order ID: ${orderId}
💳 Payment ID: ${razorpay_payment_id}
💰 Total: ₹${totalAmount}

🛍️ Items:
${formattedItems}

📦 Shipping Address:
${shippingLine}

Fulfill this order ASAP.
`

      // Send emails
      await sendMail(customerInfo.email, `✅ Order Confirmed: ${orderId}`, userEmailBody)
      await sendMail("kingrohit003@gmail.com", `🛒 New Order Received: ${orderId}`, adminEmailBody)

      console.log("✅ Emails sent to user and admin.")

      res.json({
        success: true,
        orderId,
        message: "Payment verified and emails sent successfully",
      })
    } else {
      res.status(400).json({ success: false, error: "Invalid signature" })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

// Error Handler
app.use((err, req, res, next) => {
  console.error("Server error:", err)
  res.status(500).json({ success: false, error: "Internal server error" })
})

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 GET  http://localhost:${PORT}/`)
  console.log(`📍 POST http://localhost:${PORT}/api/create-order`)
  console.log(`📍 POST http://localhost:${PORT}/api/verify-payment`)
})