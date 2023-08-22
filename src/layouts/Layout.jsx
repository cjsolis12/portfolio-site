import React from "react";
// import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

const Layout = ({ children, currentSection }) => {
  return (
    <>
      <div className="layout mb-8 flex flex-col">
        {/* <Navbar /> */}
        <div className="hero-container h-screen/2">
          <Hero currentSection={currentSection} />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
