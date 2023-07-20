import React from "react";

export default function OtherSkills() {
  return (
    <>
      <div className="flex flex-col bg-white bg-opacity-10 rounded-lg justify-center items-center">
        <h2 className="text-xl uppercase font-medium mb-3 items-center"> Other</h2>

        <ul className="flex flex-col justify-center items-center font-thin">
          <li className="flex items-center space-x-2">Git</li>
          <li className="flex items-center space-x-2">Writing Documentation</li>
          <li className="flex items-center space-x-2">Debugging</li>
        </ul>
      </div>
    </>
  );
}