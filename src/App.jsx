import LogoSection from "./components/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Hero from "./sections/Hero.jsx"
import TechStack from "./sections/TechStack.jsx"
import Contact from "./sections/Contact.jsx"; 
import Footer from "./sections/Footer.jsx"


const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <LogoSection />
    <FeatureCards />
    <TechStack />
    <Contact />
    <Footer />
    

    </>
  )
}

export default App