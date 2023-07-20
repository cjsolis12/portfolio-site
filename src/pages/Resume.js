import React from "react";
import FrontEndSkills from "../components/FrontEndSkills";
import BackendSkills from "../components/BackendSkills";
import OtherSkills from "../components/OtherSkills";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaServer, FaRegUserCircle } from "react-icons/fa";

export default function Resume() {
  const handleDownload = () => {
    const fileUrl =
      "https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf";
    window.open(fileUrl);
  };
  return (
    <>
      <div className="relative min-h-screen">
        <div className="flex flex-col  justify-center items-center h-screen w-full">
          <button
            className="animate-bounce mb-10 bg-aqua inline-block border rounded-md px-3"
            onClick={handleDownload}
          >
            Download Resume
          </button>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center w-60 bg-white bg-opacity-20 p-4 md:p-8  shadow-lg shadow-grey rounded-lg backdrop-blur-md">
              <div className="bg-light-blue bg-opacity-25 rounded-full w-10 h-10 flex justify-center items-center">
                <span>
                  <HiOutlineComputerDesktop />
                </span>
              </div>
              <div className="frontend">
                <FrontEndSkills />
              </div>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 md:p-8  shadow-lg shadow-grey rounded-lg backdrop-blur-md">
              <div className="bg-light-blue bg-opacity-25 rounded-full w-10 h-10  flex justify-center items-center">
                <span>
                  <FaServer className="text-dark-blue" />
                </span>
              </div>
              <div className="backend">
                <BackendSkills />
              </div>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 md:p-8 shadow-lg shadow-grey rounded-lg backdrop-blur-md">
              <div className="bg-light-blue bg-opacity-25 rounded-full w-10 h-10 flex justify-center items-center">
                <span>
                  <FaRegUserCircle className="text-dark-blue" />
                </span>
              </div>
              <div className="other">
                <OtherSkills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
