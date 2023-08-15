import React from "react";
// import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

const Layout = ({ children, currentSection }) => {
  return (
    <>
      <div className="layout">
        {/* <Navbar /> */}
        <div className="hero-container">
          <Hero currentSection={currentSection} />
        </div>
      </div>
      <div className="main p-10">{children}</div>
    </>
  );
};

export default Layout;
