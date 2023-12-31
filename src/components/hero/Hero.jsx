import React from "react";
import { AnimatedText } from "../../animations/AnimatedText";
import { useLocation } from "react-router-dom";

import home from "../../assets/color2.jpg";
import about from "../../assets/about.jpg";
import fierce from "../../assets/fierce.jpg";
import resume from "../../assets/resume.jpg";
import contact from "../../assets/hello.jpg";

export default function Hero({ currentSection }) {
  let heroImage;
  let heroText;

  switch (currentSection) {
    case "home":
      heroImage = home;
      heroText = "Claudia Solis Full Stack Web Developer";
      break;
    case "about":
      heroImage = about;
      heroText = "About Me.";
      break;
    case "work":
      heroImage = fierce;
      heroText = "My Work.";
      break;
    case "skills":
      heroImage = resume;
      heroText = "Strengths and Skills.";
      break;
    case "contact":
      heroImage = contact;
      heroText = "Love to Hear from You.";
      break;

    default:
      heroImage = home;
      heroText = "Welcome to my website!";
  }

 

  // Get the current location from React Router
  const location = useLocation();

  return (
    <>
      <div className="hero">
        <div className="image-container">
          <img src={heroImage} alt={currentSection} className="hero-img" />
          <div className="image-filter"></div>
          <AnimatedText text={heroText} className="hero-text"></AnimatedText>
      

        </div>
      </div>
    </>
  );
}
