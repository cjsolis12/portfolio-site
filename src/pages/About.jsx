import fierce1 from "../assets/fierce1.jpg";
export default function About() {
  return (
    <div className="mt-8 p-8 w-full">
      <div className="md:flex items-center">
        <div className="w-full md:w-1/3 p-8">
          <img src={fierce1} alt="dev-picture" className="w-40 h-40"  />
        </div>
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-white text-5xl">Hi, I'm Claudia Solis!</h2>
          <h2 className="text-lilac text-5xl">A Full Stack Web Developer</h2>
          <p className="text-white mt-4 text-lg md:text-base">
            I transitioned from esthetician to teacher, driven by a love for
            learning and creativity. Yet, it was in the tech industry where I
            discovered my true passion. Embracing innovation, I now thrive on
            exciting challenges and endless possibilities.{" "}
          </p>
        </div>
      </div>
      <p className="text-white p-10 text-lg md:text-base">
        As a full-stack web developer, I find joy in both frontend and backend
        work. However, I have a special interest in the backend technologies. I
        am fascinated by how different technologies work together to create
        amazing user experiences. Currently, my experience includes working with
        <span className="text-lilac"> Node.js, Express, MongoDB, MySQL, and Firebase</span>.
        I am eager to expand my
        knowledge and explore technologies like GraphQL, AWS and other cloud
        based services. I am deeply motivated to continue learning and refining
        my skills to make an impact in tech.
      </p>
    </div>
  );
}
