import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Experiences(){
    return (
        <div id="experiences" className="mt-4 text-white">
            <h1 className="text-2xl font-bold" style={{color: "#00FECA"}}>Experiences</h1>
            <p className="font-light text-gray-400">Here are some of my experiences</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Google STEP Intern" issued="Aug'21 - Oct'21" desc="I worked for a software enginner. I created a dashboard using SQL." />
                <HonorCard name="Part-time job at palan" issued="Feb'22 - Dec'22" desc="I worked for a frontend engineer. Using React, I enhanced the Palanar service." />
                <HonorCard name="Mind Render Project" issued="May'22 - Dec'22" desc="I worked at my research laboratory. Using Unity, I developed Mind Render Soft, a tool for learning about evolutionary computation." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
