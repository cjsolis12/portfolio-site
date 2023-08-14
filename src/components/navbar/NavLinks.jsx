import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <ul className="navigation-links hidden md:flex">
        <li className="p-4 hover:underline-slow">
          <Link to="/about" className="hover: text-oliveGreen">
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="/work" className="hover:text-oliveGreen">
            Work
          </Link>
        </li>
        <li className="p-4">
          {" "}
          <Link to="/skills" className="hover:text-oliveGreen">
            Skills
          </Link>
        </li>
        <li className="p-4">
          {" "}
          <Link to="/contact" className="hover:text-oliveGreen">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
