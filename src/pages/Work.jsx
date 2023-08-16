import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <div className="mt-64 m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col relative"
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={handleHoverEnd}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
                initial={{ opacity: 1 }}
                animate={
                  hoveredIndex === index ? { opacity: 0.6 } : { opacity: 1 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                
              />
               <h2 className="text-2xl text-white mt-4">{item.title}</h2>
              <motion.div
                className={`overlay ${hoveredIndex === index ? "active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className=" overlay-content absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-75 p-4">
                  <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl p-4">{item.description}</p>
                  <div className="mt-4">
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lilac mr-4"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={item.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lilac"
                    >
                      Web
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
