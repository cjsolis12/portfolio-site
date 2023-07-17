import React from "react";
import { FaNode, FaHtml5, FaBootstrap } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";
import { SiJavascript, SiMysql, SiExpress, SiMongodb, SiFireship } from "react-icons/si";

export default function Resume() {
  return (
    <>
      <div className="column bg-white bg-opacity-10 rounded-lg">
        <div className="row">
          <h2 className="text-xl border-b border-dark-blue" >  Back End Proficiencies</h2>
          <ul>
            <li className="flex items-center space-x-2">
              <i>
                <SiJavascript />
              </i>
              <span>JavaScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <FaNode />
              </i>
              <span>Node</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <SiExpress />
              </i>
              <span>Express</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <SiMysql />
              </i>
              <span>MySql</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <SiMongodb />
              </i>
              <span>MongoDB</span>
            </li>
            <li className="flex items-center space-x-2">
              <i>
                <SiFireship />
              </i>
              <span>FireShip</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}