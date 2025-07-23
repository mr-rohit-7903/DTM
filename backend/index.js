const express = require("express")
const Razorpay = require("razorpay")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Route to create Razorpay order
app.post("/create-order", async (req, res) => {
  const { totalAmount } = req.body

  const options = {
    amount: totalAmount * 100, // Razorpay works in paisa
    currency: "INR",
    receipt: "receipt_order_" + Date.now(),
  }

  try {
    const order = await razorpay.orders.create(options)
    res.status(200).json(order); // <-- return order directly    // ...existing code...
    app.post("/create-order", async (req, res) => {
      const { totalAmount } = req.body;
      console.log("Received totalAmount:", totalAmount); // Add this line
    
      if (!totalAmount || isNaN(totalAmount)) {
        return res.status(400).json({ success: false, message: "Invalid amount" });
      }
    
      // ...existing code...
    });
    // ...existing code...    // ...existing code...
    app.post("/create-order", async (req, res) => {
      const { totalAmount } = req.body;
      console.log("Received totalAmount:", totalAmount); // Add this line
    
      if (!totalAmount || isNaN(totalAmount)) {
        return res.status(400).json({ success: false, message: "Invalid amount" });
      }
    
      // ...existing code...
    });
    // ...existing code...
  } catch (err) {
    console.error("Error creating Razorpay order:", err)
    res.status(500).json({ success: false, message: "Failed to create Razorpay order" })
  }
})

// Route to handle successful payment
app.post("/payment-success", async (req, res) => {
  const { paymentId, orderId, signature, formData, cartItems, totalPrice } = req.body

  console.log("✅ PAYMENT SUCCESS")
  console.log("Order ID:", orderId)
  console.log("Payment ID:", paymentId)
  console.log("Customer Info:", formData)
  console.log("Items:", cartItems)
  console.log("Total Paid:", totalPrice)

  // For production: Verify signature here using crypto (optional in test mode)

  // Save order to DB or file here (optional)

  res.status(200).json({ success: true, message: "Order successfully recorded" })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
