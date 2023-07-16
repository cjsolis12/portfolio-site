import React, {useRef} from 'react'
import ProjectCard from '../components/ProjectCards'
import projectData from '../ProjectData'
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";



export default function Portfolio() {

    const carouselRef = useRef(null);
    
    const slides = projectData.map((project) => ({
        key: uuidv4(),
        content: <img src={project.img} alt={project.title} className='carousel-slide' />,
        onClick: () => console.log("clicked"),
      }));

      const settings = {
        showNavigation: true, 
        offsetRadius: 2, 
        animationConfig: { tension: 120, friction: 14 }, 
      };


      const handleNext = () => {
        if(carouselRef.current) {
            carouselRef.current.slideNext()
        }
      };

    const handlePrev = () => {
       if(carouselRef.current){
        carouselRef.current.slidePrev()
       }
    }
    return (
        <div className="carousel-container">
        <Carousel slides={slides} {...settings} ref={carouselRef} />
        <div className="carousel-navigation">
        </div>
      </div>
    )
}

