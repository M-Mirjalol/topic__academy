import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import Section from './Components/Section/Section'
import FAQ from './Components/Faq/Faq'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Courses/>
      <Section/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App