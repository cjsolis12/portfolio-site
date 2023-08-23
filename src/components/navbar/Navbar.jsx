import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

export default function Navbar() {
  //Resume Download
  const handleResumeDownload = () => {
    const fileUrl =
      "https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf";
    window.open(fileUrl);
  };

   // Determine if the screen is wider than 768px
   const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

   useEffect(() => {
    const handleWindowResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

    return (
            <div className="nav absolute top-0 left-0 z-50 mx-4 p-8 flex justify-around items-center h-24 px-4 text-white text-xl" >
                <Link to="/"><h1 className="text-xl ">CLAUDIA SOLIS</h1></Link>
                <div className="">
                <NavLinks/>
                </div>
                <NavMobile/>
                {isWideScreen && (
                  <button onClick={handleResumeDownload} className="resume-btn">Resume</button>
                )}
                
            </div>
    );
}
