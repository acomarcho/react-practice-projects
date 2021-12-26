import React from 'react'
import Me from './images/me.png'
import ScrollAnimation from "react-animate-on-scroll";

const AboutHero = () => {
  return (
    <ScrollAnimation animateIn="fadeInLeft">
      <div className="container p-8 mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-32">
          <div className="lg:w-1/2">
            <img src={Me} alt="me" className="lg:ml-auto lg:mr-0 drop-shadow-xl"/>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold font-dmSans text-black">Hi!</h1>
            <p className="text-gray mt-4 max-w-4xl text-justify text-lg">
              I'm Ghaitsa Dina, currently studying Information System at
              Universitas Indonesia. I'm on a journey where I'm trying to figure
              out what I like and what my passion is. I'm a web development
              learner since I feel like I actually have a lot to share! Feel free
              to hit me up!ヾ(≧▽≦*)
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default AboutHero
