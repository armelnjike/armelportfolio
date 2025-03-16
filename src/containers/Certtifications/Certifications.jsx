import './Certifications.scss'

import React, { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Tooltip as ReactTooltip} from 'react-tooltip';

import { MotionWrap } from '../../wrapper';
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import { images } from '../../constants';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";

//import 'react-vertical-timeline-component/style.min.css';


const Certifications = () => {
const [certif, setCertif] = useState([])
useEffect(() => {
  const query = '*[_type == "certification"]';

  return () => {
    client.fetch(query).then((data) => {
      setCertif(data)
    })}})  


  return (
    <>
    <h2 className="head-text">My <span> Certifications</span></h2>
      <MDBContainer className="py-5">
      <ul className="timeline-with-icons">
      {  certif?.map((item) => (
        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            <img src={ urlFor(item.institutionImg) } alt='intitution'  style={{ width: '70px'}}/>
          </span>

          <h5 className="fw-bold"> {item.certification} </h5>
          
          <p className="text-muted">
            {item.description}
          </p>
          
          
          <div className='veriverif'>

          <div>
          {item.state}
          </div>
          <div>

            {(item.state === "succeed")?
              <a href={item.view} ><button className='btn highlighted-btn nnew'>View certificate</button></a>:""
             }
          </div>
            
          </div>
            
          <div style={{width:'50%',marginTop:'15px',margin:'auto'}}>
          <hr />
          </div>
          
        </li>
      )) }
        

      </ul>
    </MDBContainer>
    </>
  )
}

export default Certifications
