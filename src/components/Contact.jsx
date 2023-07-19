import React from "react";
import { useEffect, useState, useRef } from 'react';
import { motion, transform, useAnimation, useScroll } from 'framer-motion';
import ScrollReveal from "./ScrollReveal";

const Contact = ({visible, setVisible, isInView}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (visible) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }

        if (isInView && visible != true) {
            controls.start("inView")
        }
    }, [visible, isInView])


    return (
        // bg-gradient-to-t from-[#4F3F38] via-[#846958] to-transparent 
            <motion.div 
                id="contact" 
                className="cursor-grab font-playfair flex flex-col justify-around bg-cover aspect-[16/9] w-[90vw] md:w-[70vw] 2xl:w-[60vw] fixed bottom-0 z-40" 
                style={{backgroundImage: `url("/src/assets/texture.svg")`}}
                variants={{
                    hidden: {
                        y: "95%"
                    },
                    visible: {
                        y: "0%"
                    },
                    inView : {
                        y: "75%"
                    }
                }}
                initial="hidden"
                animate={controls}
                whileHover={ visible ? "" : {y: "75%"}}
                onClick={() => setVisible(!visible)}
                >
                    <div className="card-header flex flex-row justify-between mx-[5%] text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        <h3>Take my business card!</h3>
                        <ul className="underline flex flex-row gap-2 md:gap-4 lg:gap-5 xl:gap-7 2xl:gap-8">
                            <li><a href="">GitHub</a></li>
                            <li><a href="">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="card-name self-center text-center">
                        <h3 className="font-[500] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Danish IMRAN</h3>
                        <h2 className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-wide">nordanishimran@gmail.com</h2>
                    </div>
                    <div className="card-address self-center text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        <h3>Ann Arbor, MI</h3>
                    </div>
            </motion.div>
    )
}

export default Contact;