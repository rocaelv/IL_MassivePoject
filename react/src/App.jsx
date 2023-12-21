import { Routes, Route } from "react-router-dom"
// import React from "react"

import NavbarComponent from "./Component/NavbarComponent"
import FooterComponent from "./Component/FooterComponent"





import LandingPage from './pages/LandingPage'
import LoginUser from './pages/LoginUser'
import LoginOwner from './pages/LoginOwner'
import LoginRegisterU from './pages/LoginRegisterU'
import LoginRegisterO from './pages/LoginRegisterO'

import UserHome from './pages/UserHome'
import UserCatering from './pages/UserCatering'
import UserCateringDetail from './pages/UserCateringDetail'
import UserPesanan from './pages/UserPesanan'
import UserPesananSaya from './pages/UserPesananSaya'
import UserProfile from './pages/UserProfile'



import ScrollToTop from "./Component/ScrollToTop"
import MetodePembayaran from "./pages/MetodePembayaran"



function App() {




  return <div>
    <NavbarComponent/> 
    
    <ScrollToTop />
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/loginuser" Component={LoginUser} />
      <Route path="/loginowner" Component={LoginOwner} />
      <Route path="/loginregisteru" Component={LoginRegisterU} />
      <Route path="/loginregistero" Component={LoginRegisterO} />
      <Route path="/userhome" Component={UserHome} />
      <Route path="/usercatering" Component={UserCatering} />
      <Route path="/usercateringdetail" Component={UserCateringDetail} />
      <Route path="/userpesanan" Component={UserPesanan} />
      <Route path="/userpesanansaya" Component={UserPesananSaya} />
      <Route path="/userprofile" Component={UserProfile}/> 
      <Route path="/metodepembayaran" Component={MetodePembayaran}/> 
    </Routes>


    <FooterComponent/> 
  </div>
}

export default App



