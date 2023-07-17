import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Heading from "./components/Heading";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="background-container absolute"></div>
      <div className="right-shapes"></div>
      <div className="heading relative z-10">
        <Heading />
      </div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    
      <div className="footer relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
