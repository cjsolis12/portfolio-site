import React from "react";
import FrontEndSkills from "../components/FrontEndSkills";
import BackendSkills from "../components/BackendSkills";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {FaServer} from "react-icons/fa"

export default function Resume() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="flex flex-col justify-center items-center h-screen w-full">
      <button className="animate-bounce bg-aqua inline-block border rounded-md px-3">Download Resume</button>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="column bg-white bg-opacity-10 p-4 md:p-8  shadow-lg shadow-grey rounded-lg backdrop-blur-md">
           <div className="bg-light-blue bg-opacity-25 rounded-full w-10 h-10 flex justify-center items-center">
            <span><HiOutlineComputerDesktop/></span>
           </div>
            <div className="frontend">
            <FrontEndSkills />
            </div>
          </div>
          <div className="column  bg-white bg-opacity-25 p-4 md:p-8  shadow-lg shadow-grey rounded-lg backdrop-blur-md">
          <div className="bg-light-blue bg-opacity-25 rounded-full w-10 h-10  flex justify-center items-center">
            <span ><FaServer className="text-dark-blue"/></span>
           </div>
            <div className="backend">
            <BackendSkills/>
            </div>
          </div>
          <div className="column bg-white bg-opacity-10 p-4 md:p-8 shadow-lg shadow-grey rounded-lg backdrop-blur-md">
          <div className="bg-light-blue bg-opacity-25 rounded-full w-10 h-10 flex justify-center items-center">
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
