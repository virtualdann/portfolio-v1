import React from "react";
import Card from "./Card";
import Reveal from "./Reveal";

const CardList = () => {

    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut,"

    return (
        <>
            <Reveal>    
                <Card top={true} title={"Workout Finder"} imgSrc={"src/assets/workout-finder-1.png"} desc={desc} tools={['React', 'HTML', 'CSS', 'NextJS', 'Vercel']}/>
            </Reveal>
            <Reveal>
                <Card title={"Project 2"} imgSrc={"src/assets/workout-finder-1.png"} desc={desc + desc} tools={['React', 'HTML', 'CSS', 'NextJS', 'Vercel']}/>
            </Reveal>
        </>
    )
}

export default CardList;