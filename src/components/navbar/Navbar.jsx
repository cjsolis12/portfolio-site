import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav className="navbar flex justify-between items-center h-24 max-w-[1240px]mx-auto px-4 text-lilac text-xl" >
                <Link to="/"><h1 className="text-xl text-lilac">CLAUDIA SOLIS</h1></Link>
                <NavLinks/>
                <NavMobile/>
                <button className="secondary hidden md:flex">Resume</button>
            </nav>
        </>
    );
}
