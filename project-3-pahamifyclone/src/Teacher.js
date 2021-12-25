import React from 'react'
import Image from './images/rockstar-teacher.png'

const Teacher = () => {
  return (
    <div className="w-full bg-blue-100 font-nunito">
      <div className="container p-8 mx-auto">
        <div className="flex flex-col gap-8 items-center lg:flex-row">
          <img src={Image} alt="teacher" className="lg:w-1/2" />
          <div className="flex flex-col lg:w-1/2 items-center lg:items-start">
            <p className="text-center text-blue-700 font-bold text-2xl mb-4 max-w-lg lg:text-left">Rockstar Teacher Pahamify</p>
            <p className="text-center mb-4 max-w-lg lg:text-left">Lebih seru belajar bareng Rockstar Teacher Pahamify. Yuk kenalan sama mereka!</p>
            <button className="bg-orange-500 px-20 py-2 rounded-full text-white font-bold transition-all hover:opacity-75 hover:ml-2">Lihat Rockstar Teacher</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teacher
