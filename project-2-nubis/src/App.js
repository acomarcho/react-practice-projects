import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Footer />
    </main>
  );
};

export default App;
