import React, {useState} from 'react';
import {RxHamburgerMenu} from "react-icons/rx"
 import {TfiClose} from 'react-icons/tfi'

export default function NavMobile() {
   const [nav, setNav] = useState(false)

   const handleNav = () => {
    setNav(!nav)
   }

    return (
        <>
            <div className="navbar-icon" onClick={handleNav} >
                {!nav ? <TfiClose size={20}/> : <RxHamburgerMenu size={20}/>  }
                
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[50%] h-full bg-stone-900" : "fixed left-[-100%]"}>
            <h1 className="w-full text-xl text-lilac m-4">CLAUDIA SOLIS</h1>
            <ul className="mobile-links uppercase p-4" >
                <li className="p-2 border-b border-gray-600">About</li>
                <li className="p-2 border-b border-gray-600">Work</li>
                <li className="p-2 border-b border-gray-600">Skills</li>
                <li className="p-2 border-b border-gray-600">Contact</li>
            </ul>
            </div>
        </>
    );
}
