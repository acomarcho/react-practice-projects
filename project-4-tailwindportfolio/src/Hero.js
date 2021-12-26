import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"
import "./typewriter.css"
import ScrollAnimation from 'react-animate-on-scroll'

const Hero = () => {
  return (
    <ScrollAnimation animateIn='fadeInLeft'>
      <div className="container p-8 mx-auto">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-32">
          <div>
            <h1 className="text-4xl font-bold lg:text-5xl">Hello, I'm</h1>
            <div className="typewriter">
              <h1 className="text-4xl font-bold lg:text-5xl">Ghaitsa Dina.</h1>
            </div>
          </div>
          <div className="">
            <p className="text-gray max-w-sm text-lg lg:max-w-lg lg:text-2xl">An undergraduate student majoring in Information Systems at Universitas Indonesia.</p>
          </div>
        </div>
        <div className="mt-12">
          <AiOutlineArrowDown className="text-3xl font-bold" />
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Hero
