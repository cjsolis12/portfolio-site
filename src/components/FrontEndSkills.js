import React, { useState } from "react";

export default function Resume() {
  return (
    <>
      <div className="column bg-white bg-opacity-10 rounded-lg">
        <div className="row">
          <button className="text-xl uppercase font-medium mb-3">
            {" "}
            Front End{" "}
          </button>

          <ul className="flex flex-col justify-center items-center font-thin">
            <li className="flex items-center space-x-2">React</li>
            <li className="flex items-center space-x-2">HTML</li>
            <li className="flex items-center space-x-2">CSS</li>
            <li className="flex items-center space-x-2">Bootstrap</li>
            <li className="flex items-center space-x-2">Chakra UI</li>
          </ul>
        </div>
      </div>
    </>
  );
}
