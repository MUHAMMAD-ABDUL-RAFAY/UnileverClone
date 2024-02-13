import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Add from './Add'
import BottomNav from './BottomNav'
import UsefulLinks from './UsefulLinks'
import Accord from './Accord'
import Follow from './Follow'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Add />
        <BottomNav />
        <UsefulLinks />
        <Accord />
        <Follow />
        <Footer />
    </>
  )
}

export default Layout;