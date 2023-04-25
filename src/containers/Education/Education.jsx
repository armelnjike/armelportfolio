import './Education.scss'
import React, { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { Tooltip as ReactTooltip} from 'react-tooltip';

import { MotionWrap } from '../../wrapper';
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import { images } from '../../constants';

const Skills = () => {

 /* const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);*/

  return (
    <>
      <h2 className="head-text">About my<span> Education</span></h2>

      <div className='timeline'>

        <div className='container left-container'>
          <div className='text-box'>
            <h2>Alphabet Inc</h2>
            <small>2018 - 2019</small>
            <p>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrr</p>
          </div>
        </div>


        <div className='container right-container'>
          <div className='text-box'>
            <h2>Alphabet Inc</h2>
            <small>2018 - 2019</small>
            <p>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrr</p>
          </div>
        </div>



        <div className='container left-container'>
          <div className='text-box'>
            <h2>Alphabet Inc</h2>
            <small>2018 - 2019</small>
            <p>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrr</p>
          </div>
        </div>



        <div className='container right-container'>
          <div className='text-box'>
            <h2>Alphabet Inc</h2>
            <small>2018 - 2019</small>
            <p>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrr</p>
          </div>
        </div>



        <div className='container left-container'>
          <div className='text-box'>
            <h2>Alphabet Inc</h2>
            <small>2018 - 2019</small>
            <p>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrr</p>
          </div>
        </div>



      </div>
      
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
 'skills',
 "app__whitebg")