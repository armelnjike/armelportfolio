import './Education.scss'
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


const Skills = () => {

  const [education, setEducation] = useState([]);
  const [education2, setEducation2] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    //const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setEducation(data);
      setEducation2([...education].sort((a,b) => a.period - b.period))
    })});
    


  return (
    <>
    <h2 className='head-text'>
        About my 
        <span> Education</span><br/> 
      </h2>
     <Timeline position="alternate">
     { education2?.map((item,index) => (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          { item.period }
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          <div className="app__skills-exp">
          
          <motion.div
            className="app__skills-exp-item"
            
          >
          
            <motion.div className="app__skills-exp-works">
              
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    
                  >
                  
                    <h4 className="bold-text vertical-timeline-element-title"> { item.achievements } </h4>
                    <p className="p-text vertical-timeline-element-subtitle"> { item.school } </p>
                  </motion.div>
                  <ReactTooltip
                  
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                    
                  >
                    Dans la ville de Bangangté
                  </ReactTooltip>
                </>
              
            </motion.div>
          </motion.div>
        
      </div>
          </Typography>
        
        </TimelineContent>
      </TimelineItem>
     )) }
      
     </Timeline>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
 'skills',
 "app__whitebg")