import React from "react";
import CardList from "./CardList";
import Reveal from "./Reveal";

const Projects = () => {
    return (
        <section className='w-full p-[10%] pb-0 sm:p-[10%] font-geologica' id='projects'>
            <Reveal>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[97px] 2xl:text-[108px] mb-3 lg:mb-9 tracking-tight">Projects</h2>
            </Reveal>
            <CardList />
        </section>
    )
}

export default Projects;