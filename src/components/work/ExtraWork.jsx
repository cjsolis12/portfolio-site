import extraWork from "../../data/extraWork";

export default function ExtraWork() {
  return (
    <>
      <div className="projects mt-64 pt-40">
        <h2 className="p-8  text-lilac text-5xl text-center ">
          Other Projects / Work
        </h2>
        <div className="gap-8 md:flex justify-center p-8">
          {projects.map((project, index) => (
            <div key={index} className="other-projects text-white">
              <h3 className="text-center m-4 text-2xl">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-auto">
                <a
                  href={project.link}
                  className="btn-link text-lilac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
