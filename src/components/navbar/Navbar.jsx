import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
            <div className="nav absolute top-0 left-0 z-50 flex justify-between items-center h-24 px-4 text-lilac text-xl" >
                <Link to="/"><h1 className="text-xl text-lilac">CLAUDIA SOLIS</h1></Link>
                <div className="absolute">
                <NavLinks/>
                </div>
                <NavMobile/>
                <button className="secondary hidden md:flex">Resume</button>
            </div>
    );
}
