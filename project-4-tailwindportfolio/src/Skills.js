import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <ScrollAnimation animateIn="fadeInLeft">
      <div className="container p-8 mx-auto font-inter">
        <div className="flex gap-8">
          <div>
            <p className="underline text-sm w-[120px]">Technology stack</p>
          </div>
          <div>
            <p className="text-sm max-w-sm">
              HTML, CSS, JavaScript, React.JS, Next.JS, TypeScript, Tailwind,
              Flutter, Dart, Java
            </p>
          </div>
        </div>
        <div className="flex gap-8 mt-4">
          <div>
            <p className="underline text-sm w-[120px]">Main softwares</p>
          </div>
          <div>
            <p className="text-sm max-w-sm">
              Visual Studio Code, Android Studio, Figma
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-black my-8"></div>
      </div>
    </ScrollAnimation>
  );
}

export default Skills
