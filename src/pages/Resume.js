import React from "react";
import FrontEndSkills from "../components/FrontEndSkills";
import BackendSkills from "../components/BackendSkills";

export default function Resume() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="main-content flex flex-col  md:flex-row justify-around h-full">
          <div className="column bg-white bg-opacity-10 p-4 md:p-8">
            <button className="animate-bounce bg-aqua">
              <a
                href="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf"
                download="resume.pdf"
              >
                Download!
              </a>
            </button>
            <div className="resume-container flex-grow-1">
              <iframe
                className="resume-iframe w-full h-full"
                src="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/preview"
                type="application/pdf"
                title="Resume"
              >
                <p>Your browser does not support PDFs.{""}</p>
              </iframe>
            </div>
            <iframe className="h-100vh max-w-full" src="" />
          </div>
          <div className="flex flex-col justify-between md:mt-0 md:ml-8">
            <div className="frontend-skills mb-4">
              <FrontEndSkills />
            </div>
            <div className="Backend-skills">
              <BackendSkills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
