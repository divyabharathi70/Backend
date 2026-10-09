import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
         <div>
                <div>Logo</div>
                <div>
                    <NavLink to={"/"} className={({isActive})=>isActive ? "bg-amber-200 p-1 rounded text-center":""}>Home</NavLink>
                    <NavLink to={"/about"} className={({isActive})=>isActive ? "bg-amber-200 p-1 rounded text-center":""}>About</NavLink>
                    <NavLink to={"/services"} className={({isActive})=>isActive ? "bg-amber-200 p-1 rounded text-center":""}>Services</NavLink>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </div>
         </div>
    </>
   
  )
}

export default Navbar
