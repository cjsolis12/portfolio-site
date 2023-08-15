import React from "react";
// import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero"

const Layout = ({ children, currentSection }) => {
  return (
    <div className="layout">
      {/* <Navbar /> */}
      <Hero currentSection={currentSection} />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
