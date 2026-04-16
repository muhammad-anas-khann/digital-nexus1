import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Team from "./components/Team";
import Footer from "./components/Footer";

const Home = () => (
  <>
    <Hero />
    <Service />
    <Team />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      {/* Root Container: Full Black Background */}
      <div className="bg-black min-h-screen w-full relative">
        
        {/* 1. Navbar: Iska z-index 100 hai taaki ye hamesha top par rahe */}
        <Navbar />

        {/* 2. Content Area: Routes ke andar Hero Section load hoga */}
        <main className="relative w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={ <div className="pt-40 text-white text-center">About Page</div> } />
            <Route path="/services" element={ <div className="pt-40 text-white text-center">Services Page</div> } />
            <Route path="/contact" element={ <div className="pt-40 text-white text-center">Contact Page</div> } />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;