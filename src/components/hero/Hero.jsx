import React from "react";
import home from "../../assets/color2.jpg";
import about from "../../assets/about.jpg";
import fierce from "../../assets/fierce.jpg";
import resume from "../../assets/resume.jpg"
import contact from "../../assets/hello.jpg";

export default function Hero({ currentSection }) {
  let heroImage;
  let heroText;

  switch (currentSection) {
    case "home":
      heroImage = home;
      heroText = "Claudia Solis";
      break;
    case "about":
      heroImage = about;
      heroText = "Learn more about us";
      break;
    case "work":
      heroImage = fierce;
      heroText = "Learn more about us";
      break;
      case "skills":
        heroImage = resume;
        heroText = "Learn more about us";
        break;
    case "contact":
      heroImage = contact;
      heroText = "Learn more about us";
      break;

    default:
      heroImage = "default-image.jpg";
      heroText = "Default hero text";
  }

  return (
    <div className="hero">
      <img src={heroImage} alt={currentSection} />
      <h2>{heroText}</h2>
    </div>
  );
}
