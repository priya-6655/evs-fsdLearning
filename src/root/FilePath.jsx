import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from '../LandingPage/Landingpage'
import Login from '../AdminLogin/Login'
import UserLogin from '../UserLogin/UserLogin'
import About from '../LandingPage/About'
import Contact from '../LandingPage/Contact'
import AddElection from '../AdminScreen/AddElection'
import UserMainpage from '../UserScreen/UserMainpage'


function FilePath() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/admin' element={<AddElection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<UserMainpage />} />
      </Routes>
    </div>
  )
}

export default FilePath
