import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <ScrollAnimation animateIn="fadeInLeft">
      <div className="container p-8 pt-0 mb-4 -mt-4 mx-auto">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div>
            <p className="font-inter text-black text-lg max-w-xs">
              I am thrilled to answer to your next project →
            </p>
          </div>
          <div>
            <a
              href="mailto:ghaitsa.maulidina@ui.ac.id"
              className="font-inter text-black text-lg transition-all hover:opacity-75"
            >
              ghaitsa.maulidina@ui.ac.id
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Contact
