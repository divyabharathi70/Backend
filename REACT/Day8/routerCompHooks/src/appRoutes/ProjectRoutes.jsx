import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../layouts/Layout'
import ProductListing from '../pages/ProductListing'
import NotFound from '../pages/NotFound'

const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
            <Route element = {<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/product/:id' element={<ProductListing/>}/>

            <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  )
}

export default ProjectRoutes