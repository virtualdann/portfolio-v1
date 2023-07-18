import React from "react";

const Nav = ({visible, setVisible}) => {
    return (
        <nav className="fixed right-[2%] top-1 sm:top-[2%] z-[99]">
            {/* sm:text-xl md:text-lg lg:text-xl xl:text-2xl */}
            <ul className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex flex-col gap-1 md:gap-3 tracking-wide items-end">
                <li className="w-max"><a href="#about">About</a></li>
                <li className="w-max"><a href="#projects">Projects</a></li>
                <li className="w-max"><a href="#contact" onClick={() => setVisible(!visible)} >Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;