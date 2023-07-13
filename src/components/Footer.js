import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row mx-auto items-center justify-between px-4 shadow-lg  scale-105 bg-opacity-80b bg-dark-blue" >
        <section className="flex space-x-4">
          <a
            href="mailto:cjelizondo12@gmail.com"
            className="text-2xl text-gray-700 hover:text-blue-600"
            target="_blank"
            
            rel="noopener noreferrer"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
            className="text-2xl text-gray-700 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/cjsolis12"
            className="text-2xl text-gray-700 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </section>
      </footer>
    </>
  );
}
