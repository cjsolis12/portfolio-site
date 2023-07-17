import React, { useState } from "react";

export default function Resume() {
  return (
    <>
      <div className="column bg-white bg-opacity-10 rounded-lg">
        <div className="row">
          <button className="text-xl uppercase font-medium mb-3">
            {" "}
            Back End
          </button>

          <ul className="flex flex-col justify-center items-center font-thin">
            <li className="flex items-center space-x-2">JavaScript</li>
            <li className="flex items-center space-x-2">Node</li>
            <li className="flex items-center space-x-2">Express</li>
            <li className="flex items-center space-x-2">MySQL</li>
            <li className="flex items-center space-x-2">MongoDB</li>
            <li className="flex items-center space-x-2">FireShip</li>
          </ul>
        </div>
      </div>
    </>
  );
}
