import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function NavMobile() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (!isMobileScreen && nav) {
      setNav(false);
    }
  }, [isMobileScreen]);

  return (
    <>
      <div className="navbar-icon block md:hidden" onClick={handleNav}>
        {!nav ? <TfiClose size={20} /> : <RxHamburgerMenu size={20} />}
      </div>
      {isMobileScreen && (
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[50%] h-full bg-stone-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-xl text-lilac m-4">CLAUDIA SOLIS</h1>
          <ul className="mobile-links uppercase p-4">
            <li className="p-2 border-b border-gray-600">
              {" "}
              <Link to="/about" className="hover:text-lilac">
                About
              </Link>
            </li>
            <li className="p-2 border-b border-gray-600">
              {" "}
              <Link to="/work" className="hover:text-lilac">
                Work
              </Link>
            </li>
            <li className="p-2 border-b border-gray-600">
              {" "}
              <Link to="/skills" className="hover:text-lilac">
                Skills
              </Link>
            </li>
            <li className="p-2 border-b border-gray-600">
              {" "}
              <Link to="/contact" className="hover:text-lilac">
                Contact
              </Link>
            </li>
            <li className="p-2 border-b border-gray-600">
              {" "}
              <a
                href=  "https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac"
                download="ClaudiaSolisResume.pdf"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
