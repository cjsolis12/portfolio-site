import React from "react";
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
      heroText = "Default hero text";
  }

  return (
    <>
      <div className="hero">
        <div>
          <div className="image-filter"></div>
          <img src={heroImage} alt={currentSection} className="hero-img " />
        </div>
      </div>
      <div>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-30">
          {heroText}
        </h2>
      </div>
    </>
  );
}
