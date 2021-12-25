import React from 'react'
import Logo from './images/logo.svg'
import Play from './images/icon-playstore.svg'
import Appstore from './images/icon-appstore.svg'
import Windows from './images/icon-desktop-windows.png'
import Mac from './images/icon-desktop-macs.png'

const Footer = () => {
  return (
    <>
      <div className="w-full bg-blue-600 font-nunito">
        <div className="container p-8 py-20 mx-auto">
          <img src={Logo} alt="logo" className="max-w-[180px] mx-auto mb-4" />
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-white text-center text-xl text-bold mb-2">
                  Mobile version
                </p>
                <div className="flex gap-4">
                  <a href="/" className="transition-all hover:opacity-75">
                    <img src={Play} className="max-w-[150px]" alt="" />
                  </a>
                  <a href="/" className="transition-all hover:opacity-75">
                    <img src={Appstore} className="max-w-[150px]" alt="" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-white text-center text-xl text-bold mb-2">
                  Desktop version
                </p>
                <div className="flex gap-4">
                  <a href="/" className="transition-all hover:opacity-75">
                    <img src={Windows} className="max-w-[150px]" alt="" />
                  </a>
                  <a href="/" className="transition-all hover:opacity-75">
                    <img src={Mac} className="max-w-[150px]" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-800 font-nunito">
        <p className="text-center text-white p-4">&copy; 2021 Pahamify. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer
