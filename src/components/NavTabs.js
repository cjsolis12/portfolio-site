import { Link, useLocation} from "react-router-dom";

export default function NavTabs() {
    const location = useLocation();
    return (
        <div>
          <nav className="flex space-x-4 ">
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "border-b-2 border-blue-600" : ""
          } hover:border-blue-600 py-2`}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={`${
            location.pathname === "/portfolio"
              ? "border-b-2 border-blue-600"
              : ""
          } hover:border-blue-600 py-2`}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "border-b-2 border-blue-600" : ""
          } hover:border-blue-600 py-2`}
        >
          Contact
        </Link>
        <Link
          to="/resume"
          className={`${
            location.pathname === "/resume" ? "border-b-2 border-blue-600" : ""
          } hover:border-blue-600 py-2`}
        >
          Resume
        </Link>
      </nav>
      </div>
    )
}
