import React from "react";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";

export default function Resume() {
  return (
    <>
      <div className="column bg-white bg-opacity-10 rounded-lg">
        <div className="row">
          <h4> Front End Proficiencies</h4>
          <ul>
            <li className="flex items-center space-x-2">
              <i>
                <FaReact />
              </i>
              <span>React</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <FaHtml5 />
              </i>
              <span>HTML</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <PiFileCssLight />
              </i>
              <span>CSS</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <FaBootstrap />
              </i>
              <span>Bootstrap</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
