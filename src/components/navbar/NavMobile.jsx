import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export default function NavMobile() {
  const [nav, setNav] = useState(false);
  const isMobileScreen = window.innerWidth <= 768;

  const handleNav = () => {
    setNav(!nav);
  };

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
            <li className="p-2 border-b border-gray-600">About</li>
            <li className="p-2 border-b border-gray-600">Work</li>
            <li className="p-2 border-b border-gray-600">Skills</li>
            <li className="p-2 border-b border-gray-600">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}
