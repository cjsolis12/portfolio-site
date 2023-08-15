import React, { useState } from "react";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
export default function Work() {
  return (
    <>
      <div className="mt-64 m-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((item, index) => (
            <div key={index} className="flex items-center">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              {/* <h2 className="text-lg text-lilac">{item.title}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
