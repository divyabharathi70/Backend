import React from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Men from '../components/Men'
import Women from '../components/Women'
import Kids from '../components/Kids'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/kids' element = {<Kids/>}/>
        <Route path='/men' element = {<Men/>}/>
        <Route path='/women' element = {<Women/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
