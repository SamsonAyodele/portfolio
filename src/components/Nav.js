import React from 'react'
import Socials from './Socials'

const Nav = () => {
  return (
    <nav>
        <h1 className='header'>Samson Ayodele</h1>
        <ul>
            <a href='#About'><li>About Me</li></a>
            <a href='#Services'><li>Services</li></a>
            <a href='#Projects'><li>Projects</li></a>
            <a href='#Contact'><li>Contact Me</li></a>
        </ul>
        <div className='"nav--soc"'>
          <Socials />
        </div>
        
    </nav>
  
  )
}

export default Nav