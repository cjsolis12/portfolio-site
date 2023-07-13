import {React, useState} from "react";
import {Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip"

export default function ProjectCard({project}){
    const [isFlipped, setFlipped ] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped)
    }

    return(
        <div className="h-full">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front of the card */}
          <div
            className="max-w-sm mb-4 relative shadow-lg"
            onClick={handleFlip}
          >
            <div
              className="cursor-pointer relative z-10"
            >
              <img src={project.img} alt={project.title} className="" />
              <h3 className="text-xl ">{project.title}</h3>
              <div className="flex justify-center items-center mt-5">
                <div className="space-x-2">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-light-blue text-white px-4 py-2 rounded-lg">
                      Github
                    </button>
                  </Link>
                  <Link
                    to={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border border-dark-blue text-pink-500 px-4 py-2 rounded-lg">
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  
          {/* Back of the card */}
          <div
            className="max-w-sm mb-4 relative shadow-lg"
            onClick={handleFlip}
          >
            <div
              className="cursor-pointer relative z-10 transform rotate-y-180 scale-x-reverse p-5"
            >
              <p className="text-xl">{project.description}</p>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    )
}