import { React, useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { FaGithub, FaLink} from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="h-full bg-white rounded-lg ">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div className="max-w-sm mb-4 relative bg-white shadow-lg" onClick={handleFlip}>
          <div className="cursor-pointer relative z-10">
            <img src={project.img} alt={project.title} className="" />
            <h3 className="text-xl p-4 ">{project.title}</h3>
            <div className="container justify-center items-center mt-5">
              <div className="flex flex-row justify-center items-center text-2xl space-x-5 py-4">
                <a className=" hover:text-light-blue flex justify-center rounded-full bg-light-blue p-2"
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                className=" hover:text-light-blue flex justify-center rounded-full bg-light-blue p-2"
                  to={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="max-w-sm mb-4 relative shadow-lg bg-white" onClick={handleFlip}>
          <div className="cursor-pointer relative z-10 transform rotate-y-180 scale-x-reverse p-5">
            <p className="text-xl">{project.description}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
