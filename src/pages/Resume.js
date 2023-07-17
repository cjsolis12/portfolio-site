import React from "react";
import FrontEndSkills from "../components/FrontEndSkills";
import BackendSkills from "../components/BackendSkills";

export default function Resume() {
  return (
    <>
      <div className="relative h-screen">
        <div className="main-content flex justify-around ">
          <div className="column bg-white bg-opacity-10">
            <button className="animate-bounce bg-aqua">
              <a
                href="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/export?format=pdf"
                download="resume.pdf"
              >
                Download!
              </a>
            </button>
            <div className="resume-container">
              <iframe
                className="resume-iframe"
                src="https://docs.google.com/document/d/1zsEbW0x16dFTWi2zpNTR1jfq_0-uqW4orMeG2kbzjFs/preview"
                type="application/pdf"
              >
                <p>Your browser does not support PDFs.{""}</p>
              </iframe>
            </div>
            <iframe className="h-100vh max-w-full" src="" />
          </div>
          <div className="">
            <div className="frontend-skills">
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
