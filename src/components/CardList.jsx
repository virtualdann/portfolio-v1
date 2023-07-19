import React from "react";
import Card from "./Card";
import Reveal from "./Reveal";

const CardList = () => {

    const desc = "Integrates 3 functionalities: Searching workouts (MuscleWiki API), calculating daily macros (Fitness Calculator API), and calculating BMI."

    return (
        <>
            <Reveal>    
                <Card top={true} title={"Workout Finder"} imgSrc={"/workout-finder-1.png"} desc={desc} tools={['React', 'HTML', 'CSS', 'NextJS', 'Vercel']}/>
            </Reveal>
            {/* <Reveal>
                <Card title={"Project 2"} imgSrc={"src/assets/workout-finder-1.png"} desc={desc + desc} tools={['React', 'HTML', 'CSS', 'NextJS', 'Vercel']}/>
            </Reveal> */}
        </>
    )
}

export default CardList;