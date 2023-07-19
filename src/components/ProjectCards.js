import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { FaGithub, FaLink } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    const isLink = e.target.tagName === "a";

    if (!isLink) {
      setFlipped(!isFlipped);
    }
  };

  return (
    <div className="bg-white rounded-lg ">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div className="max-w-sm mb-4 relative shadow-lg" onClick={handleFlip}>
          <img
            src={project.img}
            alt={project.title}
            className="relative w-full h-full object-cover "
          />
          <div className=" ">
            <h3 className="text-xl text-white bg-dark-blue bg-opacity-70 hover:text-opacity-70 transition duration-300">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Back of the card */}
        <div className="max-w-sm relative shadow-lg " onClick={handleFlip}>
          <div className="grid p-4 gap-5 items-center">
            <p className="text-xl text-dark-blue">{project.description}</p>
            <div className="col-span-2 flex flex-wrap justify-center items-center">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 m-1 text-sm  text-dark-blue rounded-lg border border-dark-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="z-10 flex justify-center items-center text-xl">
              <a
                className="hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2 mr-4"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2 ml-4"
                href={project.websiteLink}
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
