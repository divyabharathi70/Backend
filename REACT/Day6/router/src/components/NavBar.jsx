import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-gray-600 p-5 flex justify-between gap-5 text-white'>
        <div>
            <img src="/favicon.svg" alt="" />
        </div>
        <div className=''>
             <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar
