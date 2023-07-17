import React, {useState} from "react";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";
import { SiChakraui } from "react-icons/si";

export default function Resume() {
    const [isListOpen, setListOpen] = useState(false)

    const toggleList = () => {
        setListOpen(!isListOpen);
    }
    
  return (
    <>
      <div className="column bg-white bg-opacity-10 rounded-lg">
        <div className="row">
          <button className="text-xl border-b border-dark-blue" onClick={toggleList} > Front End Proficiencies</button>
          {isListOpen && (
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
            <li className="flex items-center space-x-2">
              <i>
                <SiChakraui />
              </i>
              <span>Chakra Ui</span>
            </li>
          </ul>
          )}
          
        </div>
      </div>
    </>
  );
}
