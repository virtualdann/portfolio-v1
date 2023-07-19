import React from "react";

const Footer = ({Ref}) => {
    return (
        <div ref={Ref} className='h-[100px] text-xs sm:text-base xl:text-md grid place-items-center'>
            This site is made possible with React, Vite, TailwindCSS, and Vercel.

        </div>
    )
}

export default Footer;