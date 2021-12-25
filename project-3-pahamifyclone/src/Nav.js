import React from 'react'
import Logo from './images/logo.svg'

const Nav = () => {
  return (
    <div className="w-full bg-blue-600 font-nunito fixed">
      <div className="container px-4 py-2 mx-auto">
        <a href="/">
          <img src={Logo} alt="logo" className="mx-auto max-h-[40px] transition-all hover:opacity-75" />
        </a>
      </div>
    </div>
  );
}

export default Nav
