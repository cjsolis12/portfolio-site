import React from "react";
import { FaReact } from "react-icons/fa6";

export default function Resume() {
  return (
    <>
      <div className="relative h-screen">
        <div className="main-content flex justify-between ">
          <div className="column">
            <button className="animate-bounce bg-aqua">
              <a
                href="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf"
                download="resume.pdf"
              >
                Download!
              </a>
            </button>
            <iframe
              className="h-100vh max-w-full"
              src="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/preview"
            />
          </div>
          <div className="column">
            <div className="row">
              <h4> Front End Proficiencies</h4>
              <ul>
                <li className="flex items-center space-x-2">
                  <i>
                    <FaReact />
                  </i>
                  <span>React</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
