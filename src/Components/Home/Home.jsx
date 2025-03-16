import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import "./Home.css"
import Navbar from '../NavBar/Navbar'
//import AppWrapp from '../../wrapper/AppWrap'

import React, { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Tooltip as ReactTooltip} from 'react-tooltip';

import { MotionWrap } from '../../wrapper';
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

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