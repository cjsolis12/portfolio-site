import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className="footer flex justify-center items-center ">
      <div className=" max-w-screen px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 text-lilac ">
        <div className="flex justify-items-center  justify-center mt-8 space-x-6">
          <a
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/cjsolis12"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">
              <FaGithub />
            </span>
          </a>

          <a
            href="mailto:cjelizondo12@gmail.com"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">
              <TfiEmail />
            </span>
          </a>
        </div>

        <div>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Claudia Solis, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
