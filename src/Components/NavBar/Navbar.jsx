import React, {useState, useEffect} from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { Skills } from '../../containers'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion} from 'framer-motion'

import { urlFor, client } from '../../client'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [profile, setProfile] = useState([])

  useEffect(() => {
  const query = '*[_type == "profile"]';

  client.fetch(query).then((data) => {
    setProfile(data);
  });

})


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
      { profile?.map((item) => (
        <img src={ urlFor(item.logo) } alt='logo' style={{width:'60px',height:'60px', borderRadius:'50%'}} />
      )) }
        
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about','education','skills','certification','works','contact'].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li> 
        ))}
      </ul>
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle &&(
            <motion.div
            whileInView={{ x: [300, 0]}}
            transition = {{duration: 0.85, ease:'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
              {['home', 'about','education','skills','certification','works','contact'].map((item)=>(
              <li key={item}>
                
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li> 
              
            ))}
            </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar