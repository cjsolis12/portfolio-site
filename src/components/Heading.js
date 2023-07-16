import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavTabs from "./NavTabs";
import logo from "./images/ClaudiaSolis.png";

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
        <div className="flex w-full items-center  justify-around px-4 py-3 bg-white bg-opacity-30 rounded-lg backdrop-blur-lg shadow-lg scale-105">
          <div>
            <img src={logo} alt="Logo" className="w-43 h-14 object-contain" />
          </div>
          <NavTabs />
        </div>
      
        <h2 className="text-4xl text-navy-blue text-purple mt-9 mb-7 text-center underline-thin">
          {getTitle()}
        </h2>
    </>
  );
}
