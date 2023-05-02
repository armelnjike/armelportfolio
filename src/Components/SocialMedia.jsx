import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsFacebook } from 'react-icons/bs'

import { FaFacebookF } from 'react-icons/fa'

import React, { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Tooltip as ReactTooltip} from 'react-tooltip';

import { MotionWrap } from '../wrapper';
import { AppWrap } from '../wrapper'
import { urlFor, client } from '../client'

const SocialMedia = () => {


    const [profile, setProfile] = useState([])

    useEffect(() => {
      const query = '*[_type == "profile"]';
    
      client.fetch(query).then((data) => {
        setProfile(data);
      });
    
    })
    

  return (
    <>
        
    
        { profile.map((item) => (
            <div className="app__social">
                <div>
                <a href={item.tweeter}><BsTwitter /></a>
                    
                </div>
                <div>
                <a href={item.facebook}><BsFacebook /></a>
                    
                </div>
                <div>
                <a href={item.instagram}><BsInstagram /></a>
                    
                </div>
                <div>
                <a href={item.youtube}><BsYoutube /></a>
                    
                </div>
                <div>
                <a href={item.linkedin}><BsLinkedin /></a>
                    
                </div>
                </div>
      ))}
    
    </>
  )
}

export default SocialMedia