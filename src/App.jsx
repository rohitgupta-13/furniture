import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertiesSection from './components/Properties'
import NewsSection from './components/NewsSection'
import BuySellSection from './BuySellsectiion'
import AboutSection from './Aboutsection'
import LocationSection from './components/Locationsection'
import ContactPage from './Contact';
import Footer from './components/Footer'


const App = () => {
  return (
    
    <div>
    <Navbar />
    <Hero />
    <ContactPage />
    <PropertiesSection />
    <BuySellSection />
    <NewsSection />
    <LocationSection />
    <AboutSection />
    <Footer />
    </div>
  )
}

export default App