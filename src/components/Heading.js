import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavTabs from "./NavTabs";
import logo from "./images/logo.svg";

export default function Heading() {
  const location = useLocation();

  //Function for title of each page

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Welcome to my Website!";
      case "/about":
        return "About Me";
      case "/portfolio":
        return "My Projects";
      case "/contact":
        return "Get in Touch";
      case "/resume":
        return "My Resume";
      default:
    }
  };

  return (
    <>
      <header className="h-16 bg-white bg-opacity-30 rounded-lg backdrop-blur-lg shadow-lg">
        <div className="flex items-center justify-around max-w-7xl mx-auto h-full">
          <img src={logo} alt="Logo" className="object-contain logo-svg" />
          <NavTabs />
        </div>

        <h2 className="text-4xl  text-dark-blue mt-9 mb-7 text-center ">
          {getTitle()}
        </h2>
      </header>
    </>
  );
}
