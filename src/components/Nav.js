import React from 'react'
import Socials from './Socials'
import Image from '../assets/MyPics1.jpeg'

const Nav = () => {
  return (
    <>
    <nav className='navigation'>
      <div className='header'>
        <h1>Samson Ayodele</h1>
      </div>

      <div className='nav-links'>
        <ul>
              <li className='links'><a href='#abt'>About </a></li>
              <li className='links'><a href='#mainService'>Services</a></li>
              <li className='links'><a href='#projectDone'>Projects</a></li>
              <li className='links'><a href='#Contact'>Contact </a></li>
          </ul>
      </div>
      
      </nav>
       
        <div className='image'>
          <img src={Image} alt='samson' />
        </div>
        <div className="nav--soc">
          <Socials />
        </div>
      </>
        
   
  
  )
}

export default Nav
