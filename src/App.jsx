import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Service from "./components/Service.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";
import globe from "./assets/globe2.png";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
const Home = () => (
  <>
    <Hero />
    <Service />
    <Projects />
    <Team />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen w-full relative overflow-x-visible">
        
        {/* BACKGROUND LAYER */}
        <div 
          className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `url(${globe})`, 
            backgroundSize: '140%',        // Size yahan se barhaein (e.g., 150%)
            backgroundPosition: 'center', // Alignment left-top
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* CONTENT LAYER */}
        <div className="relative z-10 w-full">
<Navbar />\n          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={ <div className="pt-40 text-white text-center">About Page</div> } />
              <Route path="/services" element={ <div className="pt-40 text-white text-center">Services Page</div> } />
              <Route path="/contact" element={ <div className="pt-40 text-white text-center">Contact Page</div> } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;