import React from "react";
import FrontEndSkills from "../components/FrontEndSkills";
import BackendSkills from "../components/BackendSkills";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {FaServer} from "react-icons/fa"

export default function Resume() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="flex flex-col justify-center items-center">
      <button className="animate-bounce bg-aqua inline-block border rounded-md px-3">Download Resume</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="column bg-white bg-opacity-10 p-4 md:p-8 border shadow-lg shadow-dark-blue rounded-lg backdrop-blur-md">
           <div className="bg-light-blue rounded-full w-16 h-16 flex justify-center items-center">
            <span><HiOutlineComputerDesktop/></span>
           </div>
            <div className="frontend">
            <FrontEndSkills />
            </div>
          </div>
          <div className="column  bg-white bg-opacity-10 p-4 md:p-8 border shadow-lg shadow-dark-blue rounded-lg backdrop-blur-md">
          <div className="bg-light-blue rounded-full w-16 h-16 flex justify-center items-center">
            <span ><FaServer className="text-dark-blue"/></span>
           </div>
            <div className="backend">
            <BackendSkills/>
            </div>
          </div>
          <div className="column bg-white bg-opacity-10 p-4 md:p-8 border shadow-lg shadow-dark-blue rounded-lg backdrop-blur-md">
          <div className="bg-light-blue rounded-full w-16 h-16 flex justify-center items-center">
            <span ><FaServer className="text-dark-blue"/></span>
           </div>
            <div className="other">
           
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
