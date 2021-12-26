import React from 'react'
import ChatApp from './images/chatapp.png'
import PersonalWeb from './images/personalweb.png'
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    name: "Chat App",
    id: "01",
    desc: "A chat application made to join a development team. Learned a lot of HTML, CSS, and JavaScript on this project.",
    tech: "Made with Next.js, Typescript and Firebase.",
    link: "https://chat-app-ghaitsadina.vercel.app/",
    image: ChatApp,
  },
  {
    name: "Personal Web",
    id: "02",
    desc: "My first ever website! I planned to use this to upload my high school adventure stories.",
    tech: "Made with vanilla HTML and CSS.",
    link: "https://ghaitsa-personalweb.netlify.app/",
    image: PersonalWeb,
  },
];
const Projects = () => {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col">
        {projects.map((project, idx) => {
          const {name, id, desc, tech, link, image} = project;
          return (
            <ScrollAnimation animateIn="fadeInUp">
              <div className="flex flex-col gap-8 font-inter lg:flex-row-reverse" key={idx}>
                <div className="lg:w-1/2 transition-all hover:rotate-6">
                  <img src={image} alt={name} className="drop-shadow-2xl"/>
                </div>
                <div className="flex flex-col gap-8 lg:justify-between lg:w-1/2">
                  <div>
                    <h3 className="text-black font-bold lg:text-2xl">
                      {id} / {name.toUpperCase()}
                    </h3>
                    <p className="my-4 max-w-lg text-black lg:text-xl">{desc}</p>
                    <p className="max-w-lg text-gray">{tech}</p>
                  </div>
                  <div>
                    <a href={link} target="_blank" rel="noreferrer" className="underline text-black transition-all hover:pl-4 hover:opacity-75 lg:text-xl">
                      See more from this project →
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-[2px] bg-black my-8 lg:my-16"></div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  )
}

export default Projects
