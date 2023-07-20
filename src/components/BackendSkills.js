import React, { useState } from "react";

export default function BackendSkills() {
  return (
    <>
      <div className="flex flex-col  bg-white bg-opacity-10 rounded-lg">
        <h2 className="text-xl uppercase font-medium mb-3"> Back End</h2>
        <ul className="flex flex-col justify-center items-center font-thin">
          <li className="flex items-center space-x-2">JavaScript</li>
          <li className="flex items-center space-x-2">APIs</li>
          <li className="flex items-center space-x-2">Node</li>
          <li className="flex items-center space-x-2">Express</li>
          <li className="flex items-center space-x-2">MySQL</li>
          <li className="flex items-center space-x-2">MongoDB</li>
          <li className="flex items-center space-x-2">FireShip</li>
        </ul>
      </div>
    </>
  );
}
