import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
            <div className="nav absolute top-0 left-0 z-50 mx-4 p-8 flex justify-around items-center h-24 px-4 text-white text-xl" >
                <Link to="/"><h1 className="text-xl ">CLAUDIA SOLIS</h1></Link>
                <div className="">
                <NavLinks/>
                </div>
                <NavMobile/>
                <button className="secondary hidden md:flex">Resume</button>
            </div>
    );
}
