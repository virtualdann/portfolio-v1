import React from "react";

const Card = ({title, imgSrc, desc, tools, top=false}) => {
    return (
        <div id="card-container" className={`${top ? "mt-0" : "mt-[50px]"}`}>
            <div id="card" className="flex flex-col xl:flex-row justify-evenly pb-[50px] border-b-4 border-b-black">
                <div id="card-image" className="w-auto xl:w-[55%] self-center mb-5 xl:mb-0">
                    <img src={imgSrc} className="w-full h-auto" />
                </div>
                <div id="card-desc" className="xl:w-[40%] grid">
                    <h3 className="text-2xl lg:text-6xl">{title}</h3>
                    <p className="mt-10 text-lg lg:text-xl tracking-tight h-max">{ desc.length > 190 ? desc.slice(0, 190) + "..." : desc }</p>
                    <a href="#about" className="inline-block mt-0 text-md lg:text-xl opacity-[0.5] underline underline-offset-4 h-max w-max">Learn more</a>
                    <div className="mt-8 md:mt-5 text-sm lg:text-md xl:text-md 2xl:text-lg flex flex-wrap gap-4 w-full h-max self-end cursor-default">
                        {tools.map((tool) => {
                            return (
                                <p key={tool} className="p-1w-max h-max">{tool}</p>
                            )
                        })}
                        {/* <p className="p-1 border-solid border-black border-3 w-max h-max">React</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">HTML</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">CSS</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">NextJS</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">Vercel</p> */}
                    </div>
                </div>
            </div>
            {/* <div id="card-2" className="mt-[50px] flex flex-col xl:flex-row justify-evenly pb-[50px] border-b-4 border-b-black">
                <div id="card-2-image" className="w-auto xl:w-[55%] self-center mb-5 xl:mb-0">
                    <img src="src/assets/workout-finder-1.png" className="w-full h-auto" />
                </div>
                <div id="card-2-desc" className="xl:w-[40%] grid">
                    <h3 className="text-2xl lg:text-6xl">Workout Finder</h3>
                    <p className="mt-10 text-lg lg:text-3xl tracking-tight h-max">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam,
                    </p>
                    <a href="#about" className="inline-block mt-0 text-lg lg:text-3xl opacity-[0.5] underline underline-offset-4 h-max w-max">Learn more</a>
                    <div className="mt-8 md:mt-5 text-sm lg:text-md xl:text-lg 2xl:text-xl flex flex-wrap gap-4 w-full h-max self-end cursor-default">
                        <p className="p-1 border-solid border-black border-3 w-max h-max">React</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">HTML</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">CSS</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">NextJS</p>
                        <p className="p-1 border-solid border-black border-3 w-max h-max">Vercel</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Card;