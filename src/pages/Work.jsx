import React, { useState } from "react";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
export default function Work() {
  return (
    <>
      <div className="mt-64 m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <h2 className="text-3xl text-white mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
