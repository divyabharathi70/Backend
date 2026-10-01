import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/register" element = {<Home/>}/>
        </Route> */}
         <Route path = "/" element = {<Home/>}/>
         <Route path = "/about" element = {<About/>}/>
         <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
