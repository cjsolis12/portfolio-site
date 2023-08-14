import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";

export default function Navbar() {

    return (
        <>
            <nav className="navbar flex justify-between items-center h-24 max-w-[1240px]mx-auto px-4 text-lilac" >
                <h1 className="w-full text-xl text-lilac">CLAUDIA SOLIS</h1>
                <NavLinks/>
                <NavMobile/>
            </nav>
        </>
    );
}
