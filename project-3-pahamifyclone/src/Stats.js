import React from 'react'
import StatsImage from './images/stats-image.png'
import Stats1 from "./images/stats-1.png"
import Stats2 from "./images/stats-2.png"
import Stats3 from "./images/stats-3.png"
import Stats4 from "./images/stats-4.png"

const Stats = () => {
  return (
    <div className="w-full bg-blue-600 font-nunito">
      <div className="container mx-auto p-8">
        <img src={StatsImage} alt="stats" className="mx-auto" />
        <div className="w-full bg-white flex flex-col gap-8 p-8 rounded-xl lg:flex-row">
          <div className="flex flex-col items-center w-full">
            <img src={Stats1} className="max-w-xs mb-4" alt="" />
            <p className="text-4xl font-bold text-cyan-500 mb-1">1 juta+</p>
            <p className="text-xl font-bold text-cyan-500 mb-2">
              pelajar Indonesia
            </p>
            <p className="max-w-[12rem] text-center">
              yang sudah download aplikasi Pahamify
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <img src={Stats2} className="max-w-xs mb-4" alt="" />
            <p className="text-4xl font-bold text-purple-600 mb-1">20.000+</p>
            <p className="text-xl font-bold text-purple-600 mb-2">
              jumlah konten
            </p>
            <p className="max-w-[12rem] text-center">
              pembelajaran terbaru dan sesuai kurikulum
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <img src={Stats3} className="max-w-xs mb-4" alt="" />
            <p className="text-4xl font-bold text-green-500 mb-1">8/10</p>
            <p className="text-xl font-bold text-green-500 mb-2">peserta</p>
            <p className="max-w-[12rem] text-center">
              try-out Pahamify terbukti lolos PTN impian
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <img src={Stats4} className="max-w-xs mb-4" alt="" />
            <p className="text-4xl font-bold text-orange-600 mb-1">96%</p>
            <p className="text-xl font-bold text-orange-600 mb-2">pelajar</p>
            <p className="max-w-[12rem] text-center">
              merasa terbantu dengan video belajar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats
