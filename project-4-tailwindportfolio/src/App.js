import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Footer from './Footer'

import AboutHero from './AboutHero'
import Skills from './Skills'
import Contact from './Contact'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path ='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App
