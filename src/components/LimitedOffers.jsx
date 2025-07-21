"use client"

import { useState, useEffect } from "react"
import "./style/LimitedOffers.css"

const LimitedOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const offers = [
    {
      id: 1,
      title: "Buy 2 Get 1 Free",
      description: "Mix and match any tees",
      image: "/placeholder.svg?height=250&width=200",
      originalPrice: "₹1,797",
      offerPrice: "₹1,198",
      discount: "33% OFF",
    },
    {
      id: 2,
      title: "Hoodie Combo Deal",
      description: "Any 2 hoodies at special price",
      image: "/placeholder.svg?height=250&width=200",
      originalPrice: "₹1,798",
      offerPrice: "₹1,299",
      discount: "28% OFF",
    },
  ]

  return (
    <section className="limited-offers section">
      <div className="container">
        <h2 className="section-title">Limited Time Offers</h2>

        <div className="countdown-timer">
          <h3>Offer ends in:</h3>
          <div className="timer-display">
            <div className="time-unit">
              <span className="time-number">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>

        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-badge">{offer.discount}</div>

              <div className="offer-image-wrapper">
                <img src={offer.image || "/placeholder.svg"} alt={offer.title} className="offer-image" />
              </div>

              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>

                <div className="price-section">
                  <span className="original-price">{offer.originalPrice}</span>
                  <span className="offer-price">{offer.offerPrice}</span>
                </div>

                <button className="btn btn-primary offer-btn">Grab Deal Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LimitedOffers
