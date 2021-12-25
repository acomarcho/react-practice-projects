import React from 'react'
import Image1 from './images/img-1.png'
import Image2 from './images/img-2.png'
import Image3 from './images/img-3.png'
import Image4 from './images/img-4.png'
import Image5 from './images/img-5.png'

const features = [
  {
    img: Image1,
    txt: "Lebih mudah paham materi pelajaran dengan belajar konsep melalui video animasi menarik dan anti bosan",
  },
  {
    img: Image2,
    txt: "Persiapan hadapi PAS & PTS jadi lebih maksimal dengan latihan soal hingga Try Out Challenge",
  },
  {
    img: Image3,
    txt: "Raih kampus impian dengan persiapan UTBK melalui Try Out UTBK, Live Class, hingga Pahamify Accelerator Program",
  },
  {
    img: Image4,
    txt: "Paham minat dan bakat diri sebelum memilih jurusan kuliah, supaya nggak salah jurusan",
  },
  {
    img: Image5,
    txt: "Lebih cepat dan mudah mengerjakan soal-soal sulit dengan bantuan teknologi AI di fitur Tanya MIPI",
  },
];

const Features = () => {
  return (
    <div className="w-full bg-blue-600 font-nunito">
      <div className="container p-8 mx-auto">
        {/* Title */}
        <p className="text-center text-2xl text-amber-300 font-bold mb-8">Belajar jadi lebih seru dan terarah bareng Pahamify!</p>
        {/* Card contents */}
        <div className="flex flex-col flex-wrap gap-8 lg:flex-row lg:justify-center">
          {features.map((feature, idx) => {
            const {img, txt} = feature;
            return (
              <div className="flex flex-col items-center lg:max-w-[30%]" key={idx}>
                <img src={img} className="mb-4" alt="feature" />
                <p className="text-white text-center max-w-lg">{txt}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
