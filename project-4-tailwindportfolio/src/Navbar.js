import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <a href="/" className="text-4xl font-bold font-dmSans transition-all hover:opacity-75 hover:pl-2">gd.</a>
        </div>
        <div className="flex gap-4 lg:gap-8">
          <Link to="/" className="font-dmSans transition-all hover:opacity-75">Works</Link>
          <Link to="/about" className="font-dmSans transition-all hover:opacity-75">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
