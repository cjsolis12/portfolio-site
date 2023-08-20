import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className="footer">
      <div className="px-4 py-12 sm:px-6 lg:px-8 text-lilac ">
        <div className="flex justify-items-center justify-center mt-8 space-x-6">
          <a
            href="https://www.linkedin.com/in/claudia-solis-48599422a/"
            target="_blank"
            rel="noopener"
            className="text-lilac"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/cjsolis12"
            target="_blank"
            rel="noopener"
            className="text-lilac"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:cjelizondo12@gmail.com"
            target="_blank"
            rel="noopener"
            className="text-lilac hover:text-gray-500"
          >
            <TfiEmail />
          </a>
        </div>

        <p className="text-center mt-4 text-gray-400">
          © 2023 Claudia Solis, All rights reserved.
        </p>
      </div>
    </div>
  );
}
