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
            Front End{" "}
          </button>
          {isListOpen && (
            <ul className="flex flex-col justify-center items-center">
              <li className="flex items-center space-x-2">React</li>
              <li className="flex items-center space-x-2">HTML</li>
              <li className="flex items-center space-x-2">CSS</li>
              <li className="flex items-center space-x-2">Bootstrap</li>
              <li className="flex items-center space-x-2">Chakra UI</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
