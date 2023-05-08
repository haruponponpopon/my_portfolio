import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
import progateHtml from "../assets/certs/progate-htmlcss.png"
import progateJs from "../assets/certs/progate-js.png"
import fccResponsive from "../assets/certs/fcc-responsive.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold" style={{color: "#00FECA"}}>Projects</h1>
            <p className="font-light text-gray-400">Here are some of my projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="自己紹介 de AR" img={"https://user-images.githubusercontent.com/72190893/197318598-5fd3f9b5-3f76-420e-a8e7-1ba9a0e9abe8.png"} issued="I participated in a hackathon called &quot;JPhacks&quot; with three of my friends, and we developed a self-introduction app using AR. I was in charge of the backend. This app won the Nokia Prize, which was one of the sponsor awards. #Next.js #Prisma" link="https://github.com/jphacks/B_2209" />
                <CertCard name="Data Visualization" img={"https://user-images.githubusercontent.com/72332745/236677974-38429741-7699-43df-8e08-d3600b27e465.png"} issued="In the &quot;Information Visualization experiment&quot; in my university's undergraduate program, I worked with two other team members to develop a website that displays newly opened and closed stores on a map of Japan, as well as corresponding graphs. We were awarded the &quot;Most Useful&quot; prize in the experiment. #d3.js #javascript" link="Jun 2022" />
                <CertCard name="Image Generator" img={"https://user-images.githubusercontent.com/72332745/236678556-01767ad5-69a5-4929-841b-098b4c3113d3.png"} issued="As my graduation research, I developed an image generation support system for diffusion models using a genetic algorithm. When prompted, the system generates nine images and uses interactive evolutionary computation to propose images that match the user's preferences. #python #gradio" link="Feb 2022" />
                <CertCard name="Debate by ChatGPT" img={"https://user-images.githubusercontent.com/72332745/236735091-e68dfb8f-3754-486c-86e6-3f0a383a51ef.png"} issued="I participated in an app development event using the chatGPT API called hackGPT and developed backend. Users can enter any topic they want to discuss, from &quot;Should casinos be legalized?&quot; to &quot;Is climate change real?&quot; Our app generates arguments from both sides of the debate, making it easier to engage in lively discussions with friends or strangers. And to top it off, the app even judges which argument is more persuasive, so you can see who comes out on top. #ChatGPT #Python" link="Mei 2021" />
                <CertCard name="Boid Simulation" img={"https://user-images.githubusercontent.com/72332745/236735793-10fa1ead-5866-44a2-8ac7-70b11e6d1d7d.png"} issued="In an experiment to create Game AI, I developed a software that simulates the movement of a school of fish. It creates a beautiful spectacle of neon-colored fish swimming in a tank, fitting for the Christmas season. The software utilizes the DBSCAN algorithm and boid algorithm. #Unity #c" link="Jan 2023" />
                <CertCard name="FreeMaGram" img={"https://user-images.githubusercontent.com/72332745/170863721-9e9c15c0-79cf-49da-907d-98a653ee97d4.png"} issued="At the hackathon program called &quot;build@Mercari&quot;, I developed a prototype app with a follow function that allows for buying and selling items while enjoying beautiful photos similar to Instagram. #React native" link="Dec 21" />
                <CertCard name="Balloon Panic" img={"https://user-images.githubusercontent.com/72332745/236738048-83367c99-df11-4d8b-86e2-d4302fd6fd9e.png"} issued="iOS game app. When you press the START button, you will be taken to the play screen. Tap the screen to make the bird fly, and when it hits a balloon, your SCORE will increase by one point. If it hits a bomb, it's game over. When the score is displayed, pressing the BACK button will take you back to the original screen. #Swift" link="Oct 2020" />
                <CertCard name="Typing Game" img={"https://user-images.githubusercontent.com/72332745/236738829-23576ba5-cd38-4e12-9731-bfbd745cdf6d.png"} issued="#C++ #OpenGL" link="Oct 2020" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
