import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row mx-auto  items-center justify-center px-4 py-4 shadow-lg  scale-105 bg-opacity-80b bg-dark-blue" >
        <section className="flex space-x-4">
          <a
            href="mailto:cjelizondo12@gmail.com"
            className="text-xl hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2"
            target="_blank"
            
            rel="noopener noreferrer"
          >
            <HiOutlineMail className=""/>
          </a>
          <a
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
            className="text-xl text-gray-700 hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/cjsolis12"
            className="text-xl text-gray-700 hover:text-light-blue flex justify-center rounded-full bg-aqua2 p-2"
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
