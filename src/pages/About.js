import React from "react";
import picture from "../components/images/personalPhoto.jpg";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-5 mx:auto mt-10 space-y-0 md:space-y-0">
      <div className="container flex flex-col mb-32 space-y-12 md:w-1/2 bg-white bg-opacity-10 rounded-lg backdrop-blur-lg shadow-lg p-8 md:mr-8 text-lg leading-relaxed text-gray-800">
        <p>
          {" "}
          After graduating high school, I embarked on my first career as an
          esthetician. Although I enjoyed my work in the beauty industry, I
          yearned for new challenges and opportunities to make a difference.
          This led me to transition into the education field, where I became an
          elementary school teacher. Teaching provided me with a fulfilling
          experience and nurtured my passion for empowering others. However, my
          desire for continuous growth and a new challenge persisted. It was
          during this time that I discovered my passion for technology and
          programming. Recognizing the limitless potential and opportunities in
          the tech industry, I made the decision to pursue a career in tech.
          This journey has been nothing short of incredible, and I have acquired
          valuable skills and knowledge along the way. The combination of my
          experience as an esthetician, teacher, and now as a tech enthusiast
          has instilled in me a deep sense of confidence and resilience. I am
          thrilled to be part of an industry that encourages continuous learning
          and offers endless opportunities for personal and professional growth.
          I am excited to keep pushing myself to new heights, expanding my
          skills, and making a meaningful impact in the tech world.
        </p>
      </div>
      <img src={picture} alt="personal-photo" className=" max-w-sm  rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800 md:ml-8" />
      <div></div>
    </div>
  );
}
