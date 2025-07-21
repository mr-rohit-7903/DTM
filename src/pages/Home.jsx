import Hero from "../components/Hero"
import NewArrivals from "../components/NewArrivals"
import BestSellers from "../components/BestSellers"
import LimitedOffers from "../components/LimitedOffers"
import DesignOfTheWeek from "../components/DesignOfTheWeek"
import ExclusivelyKGP from "../components/ExclusivelyKGP"

const Home = ({ addToCart }) => {
  return (
    <div className="home-page">
      <Hero />
      <NewArrivals addToCart={addToCart} />
      <BestSellers addToCart={addToCart} />
      <LimitedOffers />
      <DesignOfTheWeek />
      <ExclusivelyKGP addToCart={addToCart} />
    </div>
  )
}

export default Home
