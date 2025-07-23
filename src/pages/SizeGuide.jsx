import "./style/PolicyPages.css"

const SizeGuide = () => {
  const sizeCharts = {
    tshirts: [
      { size: "S", chest: "36-38", length: "26", shoulder: "16" },
      { size: "M", chest: "38-40", length: "27", shoulder: "17" },
      { size: "L", chest: "40-42", length: "28", shoulder: "18" },
      { size: "XL", chest: "42-44", length: "29", shoulder: "19" },
      { size: "XXL", chest: "44-46", length: "30", shoulder: "20" },
    ],
    hoodies: [
      { size: "S", chest: "38-40", length: "25", shoulder: "17" },
      { size: "M", chest: "40-42", length: "26", shoulder: "18" },
      { size: "L", chest: "42-44", length: "27", shoulder: "19" },
      { size: "XL", chest: "44-46", length: "28", shoulder: "20" },
      { size: "XXL", chest: "46-48", length: "29", shoulder: "21" },
    ],
  }

  const measurementTips = [
    {
      title: "Chest",
      description: "Measure around the fullest part of your chest, keeping the tape horizontal.",
      icon: "📏",
    },
    {
      title: "Length",
      description: "Measure from the highest point of the shoulder to the bottom hem.",
      icon: "📐",
    },
    {
      title: "Shoulder",
      description: "Measure from shoulder point to shoulder point across the back.",
      icon: "📊",
    },
  ]

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">Size Guide</h1>
          <p className="policy-subtitle">Find your perfect fit with our comprehensive sizing guide</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>How to Measure</h2>
            <div className="measurement-tips">
              {measurementTips.map((tip, index) => (
                <div key={index} className="measurement-tip">
                  <div className="tip-icon">{tip.icon}</div>
                  <div className="tip-content">
                    <h3>{tip.title}</h3>
                    <p>{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="policy-section">
            <h2>T-Shirts Size Chart</h2>
            <div className="size-chart-wrapper">
              <table className="size-chart">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (inches)</th>
                    <th>Length (inches)</th>
                    <th>Shoulder (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeCharts.tshirts.map((row, index) => (
                    <tr key={index}>
                      <td className="size-cell">{row.size}</td>
                      <td>{row.chest}</td>
                      <td>{row.length}</td>
                      <td>{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2>Hoodies & Sweatshirts Size Chart</h2>
            <div className="size-chart-wrapper">
              <table className="size-chart">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (inches)</th>
                    <th>Length (inches)</th>
                    <th>Shoulder (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeCharts.hoodies.map((row, index) => (
                    <tr key={index}>
                      <td className="size-cell">{row.size}</td>
                      <td>{row.chest}</td>
                      <td>{row.length}</td>
                      <td>{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2>Fit Guide</h2>
            <div className="fit-guide">
              <div className="fit-type">
                <h3>Regular Fit</h3>
                <p>
                  Our standard fit that's comfortable and not too tight. Perfect for everyday wear with a relaxed feel.
                </p>
              </div>
              <div className="fit-type">
                <h3>Oversized Fit</h3>
                <p>
                  Loose and comfortable fit with extra room. Great for a casual, streetwear look. Consider sizing down
                  for a more fitted appearance.
                </p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Size Recommendations</h2>
            <div className="size-recommendations">
              <div className="recommendation">
                <h3>🤔 Between Sizes?</h3>
                <p>If you're between sizes, we recommend sizing up for a more comfortable fit.</p>
              </div>
              <div className="recommendation">
                <h3>🧺 Shrinkage</h3>
                <p>Our garments are pre-shrunk, but may shrink 2-3% after the first wash.</p>
              </div>
              <div className="recommendation">
                <h3>📞 Need Help?</h3>
                <p>
                  Still unsure about sizing? Contact our support team at{" "}
                  <a href="mailto:support@darkmodethreads.com">support@darkmodethreads.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SizeGuide
