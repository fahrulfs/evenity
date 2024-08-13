import Navbar from "../components/Navbar/Navbar.jsx";
import Banner from "../components/Banner/Banner.jsx"
import About from "../components/About/About.jsx"
import Venue from "../components/Venue/Venue.jsx"
import Recap from "../components/Recap/Recap.jsx"
import Event from "../components/Event/Event.jsx"
import Partner from "../components/Partner/Partner.jsx";
import Footer from "../components/Footer/Footer.jsx";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <About />
      <Venue />
      <Recap />
      <Event />
      <Partner />
      <Footer />
    </div>
  )
}