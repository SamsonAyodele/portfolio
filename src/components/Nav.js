import React from 'react'
import Socials from './Socials'

const Nav = () => {
  return (
    <nav>
        <h1 className='header'>Samson Ayodele</h1>
        <ul>
            <li><a href='#About'>About Me</a></li>
            <li><a href='#Services'>Services</a></li>
            <li><a href='#Projects'>Projects</a></li>
            <li><a href='#Contact'>Contact Me</a></li>
        </ul>
        <div className='"nav--soc"'>
          <Socials />
        </div>
        
    </nav>
  
  )
}

export default Nav