import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import Navbar from './Components/Navbar'
import LogoSection from './Sections/LogoSection'
import FeaturesCard from './Sections/FeaturesCard'
import ExperianceSection from './Sections/ExperianceSection'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturesCard />
      <ExperianceSection />
    </>
  )
}

export default App
