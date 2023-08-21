export default function ExtraWork() {
  return (
    <>
      <div className="projects mt-64 pt-40">
        <h2 className="p-8  text-lilac text-5xl text-center ">
          Other Projects / Work
        </h2>
        <div className="gap-8 md:flex justify-center p-8">
          <div className="other-projects  text-white">
            <h3 className="text-center m-4 text-2xl">Case Studies</h3>
            <p>
              This project involved conducting interviews with our top clients
              to highlight how Documint has been beneficial to their work. I
              compiled the interview findings for publications on Documint's
              company website.
            </p>
            <a
              href="https://documint.me/case-study"
              className="btn-link text-lilac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>

          <div className="other-projects  text-white">
            <h3 className="text-center m-4 text-2xl">Documentation</h3>
            <p>
              Through collaboration, I gained a deep appreciation for the significance of implementing efficient technical documentation. This assignment provided an opportunity to leverage my teaching skills while simultaneously acquiring a comprehensive understanding of technical documentation.
            </p>
            <a
              href="https://docs.documint.me/"
              className="btn-link text-lilac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
          <div className="other-projects  text-white">
            <h3 className="text-center m-4 text-2xl">Password Generator</h3>
            <p>
              Instantly generate a secure, random password with this tool. This
              app features dynamically updated HTML and CSS powered by
              Javascript code.
            </p>
            <a
              href="https://cjsolis12.github.io/Password_Generator/"
              className="btn-link text-lilac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
