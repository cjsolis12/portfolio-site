import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
    <div>
      <ul className="navigation-links hidden md:flex">
        <li className="p-4 hover:underline-slow">
          <Link to="/about" className="hover:text-lilac">
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="/work" className="hover:text-lilac">
            Work
          </Link>
        </li>
        <li className="p-4">
          {" "}
          <Link to="/skills" className="hover:text-lilac">
            Skills
          </Link>
        </li>
        <li className="p-4">
          {" "}
          <Link to="/contact" className="hover:text-lilac">
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </>
  );
}
