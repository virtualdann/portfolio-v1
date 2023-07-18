import React from "react";

const Footer = ({Ref}) => {
    return (
        <div ref={Ref} className='h-[100px] text-xs sm:text-base xl:text-md grid place-items-center'>
            This site is made with React, Tailwindcss, and love &lt;3.

        </div>
    )
}

export default Footer;