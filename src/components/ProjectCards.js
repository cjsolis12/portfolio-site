import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { FaGithub, FaLink } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="bg-white rounded-lg ">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div
          className="max-w-sm mb-4 relative bg-white shadow-lg"
          onClick={handleFlip}
        >
          <img
            src={project.img}
            alt={project.title}
            className="relative w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-navy-blue bg-opacity-50 hover:bg-opacity-0 transition duration-300">
            <h3 className="text-xl">{project.title}</h3>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className="max-w-sm mb-4 relative shadow-lg bg-white"
          onClick={handleFlip}
        >
          <div className="grid grid-rows-2 p-4 items-start gap-1">
            <p className="text-xl ">{project.description}</p>
            <div className="col-span-2 flex flex-wrap justify-center items-center">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg border border-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center text-xl">
              <a
                className="hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2"
                to={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2"
                to={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
