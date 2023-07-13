import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavTabs from "./NavTabs";
import logo from "./images/ClaudiaSolis.png"

export default function Heading() {
  const location = useLocation();

  //Function for title of each page

  const getTitle = () => {
    switch(location.pathname){
      case "/":
        return "Welcome to my website!";
      case "/about":
        return "About me";
      case "/portfolio":
        return "My projects";
      case "/contact":
        return "Get in Touch";
      case "/resume":
        return "My Resume";
      default:    
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 ">
      <div className="header container flex items-center justify-between px-4 py-3 bg-white bg-opacity-30 rounded-lg backdrop-blur-lg shadow-lg scale-105">
        <div>
        <img
          src={logo}
          alt="Logo"
          className="w-43 h-20 object-contain"
        />
        </div>
        <NavTabs />
      </div>
      <h2 className="text-xl text-navy-blue text-gray-700 mt-9 mb-7">
        {getTitle()}
      </h2>
    </div>
  );
}
