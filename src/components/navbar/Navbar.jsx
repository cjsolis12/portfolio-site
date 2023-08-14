import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";

export default function Navbar() {

    return (
        <>
            <nav className="navbar flex justify-between items-center h-24 max-w-[1240px]mx-auto px-4 text-lilac" >
                <h1 className="text-xl text-lilac">CLAUDIA SOLIS</h1>
                <NavLinks/>
                <NavMobile/>
                <button className="secondary hidden md:flex">Resume</button>
            </nav>
        </>
    );
}
