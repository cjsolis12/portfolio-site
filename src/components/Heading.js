import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavTabs from "./NavTabs";
import logo from "./images/ClaudiaSolis.png"

export default function Heading() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="container mx-auto flex items-center justify-between px-4 shadow-lg  scale-105 bg-opacity-80">
        <div>
        <img
          src={logo}
          alt="Logo"
          className="w-43 h-20 object-contain"
        />
        </div>
        <NavTabs />
      </div>
      <h2 className="text-xl font-semibold text-gray-700 mt-4">
        {location.pathname === "/"
          ? "Welcome to my website"
          : location.pathname.slice(1).toUpperCase()}
      </h2>
    </div>
  );
}
