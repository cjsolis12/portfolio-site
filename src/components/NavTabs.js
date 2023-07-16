import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavTabs() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="hidden items-center md:flex space-x-14 text-aqua">
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "border-b-2 border-aqua text-aqua" : ""
          } hover:border-b-2 hover:border-aqua  py-2 text-dark-blue`}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={`${
            location.pathname === "/portfolio"
              ? "border-b-2 border-aqua  text-aqua"
              : ""
          }hover:border-b-2 hover:border-aqua  py-2  text-dark-blue`}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "border-b-2 border-aqua  text-aqua" : ""
          }hover:border-b-2 hover:border-aqua  py-2  text-dark-blue`}
        >
          Contact
        </Link>
        <Link
          to="/resume"
          className={`${
            location.pathname === "/resume" ? "border-b-2 border-aqua  text-aqua" : ""
          }hover:border-b-2 hover:border-aqua  py-2  text-dark-blue`}
        >
          Resume
        </Link>
      </nav>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        {isOpen ? (
          <FaTimes className="text-2xl text-blue cursor-pointer" onClick={toggleDropDown} />
        ) : (
          <FaBars className="text-2xl text-blue cursor-pointer" onClick={toggleDropDown} />
        )}
      </div>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col top-16 right-4 z-10 bg-white p-4 shadow-lg">
          <Link
            to="/about"
            className={`${
              location.pathname === "/about" ? "border-b-2 border-aqua" : ""
            } hover:border-b-2 hover:border-aqua py-2 text-dark-blue`}
            onClick={toggleDropDown}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={`${
              location.pathname === "/portfolio" ? "border-b-2  border-aqua" : ""
            } hover:border-b-2 hover:border-aqua py-2 text-dark-blue`}
            onClick={toggleDropDown}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact" ? "border-b-2  border-aqua" : ""
            } hover:border-b-2 hover:border-aqua py-2 text-dark-blue`}
            onClick={toggleDropDown}
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className={`${
              location.pathname === "/resume" ? "border-b-2 border-blue-600" : ""
            } hover:border-b-2 hover:border-aqua py-2 text-dark-blue`}
            onClick={toggleDropDown}
          >
            Resume
          </Link>
        </div>
      )}
    </div>
  );
}
