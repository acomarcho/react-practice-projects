import React from 'react'
import HeroImage from './images/hero-homepage.png'
const Hero = () => {
  return (
    <div className="w-full bg-blue-600 font-nunito">
      <div className="container mx-auto p-8 py-[80px] lg:h-screen lg:flex lg:items-center">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Flex container for text */}
          <div className="flex flex-col text-center lg:w-1/2 lg:text-left">
            <p className="text-white mb-6">Pahamify percaya, kamu punya potensi tak terbatas dalam dirimu. Jadi, jangan ragu merancang masa depanmu karena ini saatnya</p>
            <p className="text-amber-300 font-bold text-2xl">#PahamiPotensiRaihMimpi</p>
            <p className="text-white font-bold text-2xl mb-8">bersama Pahamify</p>
            {/* Button container */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <button className="bg-white px-8 py-2 rounded-full font-bold transition-all hover:opacity-75 w-64 hover:ml-2">Lihat paket belajar</button>
              <button className="bg-orange-500 px-8 py-2 rounded-full text-white font-bold transition-all hover:opacity-75 w-64 hover:ml-2">Daftar try-out akbar</button>
            </div>
          </div>
          {/* Container for image */}
          <img src={HeroImage} alt="hero" className="lg:w-1/2"/>
        </div>
      </div>
    </div>
  );
}

export default Hero
