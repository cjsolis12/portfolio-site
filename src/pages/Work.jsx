import React, { useState } from "react";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
export default function Work() {
  return (
    <>
      <div className="m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-60 h-64">
              <img src={item.img} alt={item.title} className=" object-cover" />
              <h2 className="text-lg mt-2 text-lilac">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
