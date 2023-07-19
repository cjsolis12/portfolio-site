import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCards";
import projectData from "../ProjectData";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Portfolio() {
  const carouselRef = useRef(null);

  const slides = projectData.map((project) => ({
    key: uuidv4(),
    content: <ProjectCard project={project} className="carousel-slide" />,
    onClick: () => console.log("clicked"),
  }));

  const settings = {
    showNavigation: true,
    offsetRadius: 3,
    animationConfig: { tension: 120, friction: 14 },
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };
  return (
    <div className="carousel-container flex flex-col h-screen">
      <Carousel slides={slides} {...settings} ref={carouselRef} />
      <div className="carousel-navigation">
        {carouselRef.current && carouselRef.current.navigation}
      </div>
    </div>
  );
}
