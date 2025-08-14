import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from '../LandingPage/Landingpage'
import Login from '../AdminLogin/Login'
import UserLogin from '../UserLogin/UserLogin'
import About from '../LandingPage/About'
import Contact from '../LandingPage/Contact'
import AddElection from '../AdminScreen/AddElection'
import UserMainpage from '../UserScreen/UserMainpage'
import MailRegister from '../AdminLogin/MailRegister'
import Forgotpass from '../UserLogin/Forgotpass'
import ResetPassword from '../AdminLogin/ResetPassword'
import EoLogin from '../EO Screen/EoLogin'
import EoMainPage from '../EO Screen/EoMainPage'
import UncountedResults from '../AdminScreen/UncountedResults'
import ResetUserPass from '../UserLogin/ResetUserPass'
import CountedResult from '../AdminScreen/CountedResult'
import Partyadd from '../AdminScreen/Partyadd'
import AddData from '../AdminScreen/AddData'
import AddCandidate from '../AdminScreen/AddCandidate'
import ResetEOPass from '../EO Screen/ResetEOPass'

function FilePath() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/userResetPassword' element={<ResetUserPass />} />

        <Route path='/user' element={<UserMainpage />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/forgotpassword' element={<Forgotpass />} />
        <Route path='/admin' element={<AddElection />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


        <Route path='/EoLogin' element={<EoLogin />} />
        <Route path='/EoPage' element={<EoMainPage />} />
        <Route path='/countedResult/:electionId' element={<CountedResult />} />


        <Route path='/Partyadd' element={<Partyadd />} />
        <Route path='/addElect' element={<AddData />} />
        <Route path='/addCandi' element={<AddCandidate />} />
        <Route path='/EoResetPage' element={<ResetEOPass />} />

      </Routes>
    </div>
  )
}

export default FilePath
