import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import "./Home.css"
import Navbar from '../NavBar/Navbar'
//import AppWrapp from '../../wrapper/AppWrap'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <Profile />
        <Footer />

    </div>
  )
}
export default Home;