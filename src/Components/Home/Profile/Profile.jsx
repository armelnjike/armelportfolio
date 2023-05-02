import { images } from "../../../constants";
import Typical from "react-typical";
import "./Profile.css";

import React, { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Tooltip as ReactTooltip} from 'react-tooltip';

import { MotionWrap } from '../../../wrapper';
import { AppWrap } from '../../../wrapper'
import { urlFor, client } from '../../../client'


export default function Profile() {
const [profile, setProfile] = useState([])

useEffect(() => {
  const query = '*[_type == "profile"]';

  client.fetch(query).then((data) => {
    setProfile(data);
  });

})


  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">

          <div className="colz">
          {profile?.map((item) => (
            <div className="colz-icon">
              <a href= {item.facebook}>
                <i className="fa fa-facebook-square"></i>
              </a>
              
              <a href={item.instagram}>
                <i className="fa fa-instagram"></i>
              </a>
              <a href={item.youtube}>
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href={item.tweeter}>
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          ))}
            

            <div className="profile-details-name">
            <motion.div
              whileInView = {{x:[-100,0],opacity: [0,1]}}
              transition = {{ duration : 5}}
              className = "app__header-info"
            >
            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span style={{color:'yellow'}}>&#128075;</span>
                <div style={{marginLeft: 20}}>

                <p className="p-text primary-text" style={{paddingTop:'15px'}}>
                {""}
                Hello, I'm 
                </p>
                { profile?.map((item) => (
                  <h1 className="head-text highlighted-text"> {item.nomPrenom} </h1>
                  )) }

                </div>
              </div>
            </div>
              
              </motion.div>
            </div>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {""}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Passionate Dev",
                      1500,
                      "Full Stack Developper",
                      1000,
                      "Mobile Dev",
                      1000,
                      "UIX & Graphic Designer",
                      1000,
                      "Data-Scientist & IA Enthusiastic",
                      1500,
                      "Trainer",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                { profile?.map((item) => (
                   item.aboutMeText
                  )) }
                  
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""}
                Hire Me {""}
              </button>
              <a href="CVArmel.pdf" download="Armel Njike CV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div> 
          <div className="profile-picture">
          { profile?.map((item) => (
            <div className="profile-picture-background" style={{backgroundImage :`url(${urlFor(item.profileImg)})`}}>
            </div>
          )) }
             
           
          </div>
        
      </div>
    </div>
  );
}
