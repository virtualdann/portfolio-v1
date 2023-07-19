import React from 'react'
import RandomFontText from "./RandomFontText";
import Reveal from './Reveal';
import { motion, useTime } from 'framer-motion';

const Hero = () => {
    const time = useTime()


    return (
        <section className='w-full p-[10%] sm:px-[10%] sm:my-0 sm:py-[4%]' id='about'>
            <Reveal>

            <h1 className='text-4xl sm:text-7xl lg:text-8xl xl:text-[97px] 2xl:text-[108px] tracking-tight relative z-0'>
                Hi👋, <br />
                I'm Nor Danish Imran— 
                a sophomore at the University of Michigan and I like cats 🐈.
            </h1>
            </Reveal>
            {/* <h1 className='text-3xl sm:text-7xl lg:text-8xl xl:text-[150px] 2xl:text-[165px] tracking-tight'>
                Hi👋, 
                I'm 
                </h1>
            <RandomFontText text="Nor Danish Imran" delay={750}/>            
            <h1 className='text-3xl sm:text-7xl lg:text-8xl xl:text-[150px] 2xl:text-[165px] tracking-tight'>
                — 
                a sophomore at the 
                University of Michigan
                and an avid procrastinator.
            </h1> */}
        </section>
    )
}

export default Hero