import React, { useState } from "react";


export default function Resume() {
  const [isListOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };
  return (
    <>
      <div className="column bg-white bg-opacity-10 rounded-lg">
        <div className="row">
          <button
            className="text-xl uppercase font-medium mb-3"
            onClick={toggleList}
          >
            {" "}
            Back End
          </button>
          {isListOpen && (
            <ul className="flex flex-col justify-center items-center">
              <li className="flex items-center space-x-2">JavaScript</li>
              <li className="flex items-center space-x-2">Node</li>
              <li className="flex items-center space-x-2">Express</li>
              <li className="flex items-center space-x-2">MySQL</li>
              <li className="flex items-center space-x-2">MongoDB</li>
              <li className="flex items-center space-x-2">FireShip</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
