import React from 'react'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

const Socials = () => {
  return (
    <div className='social--links'>
        <a href='https://www.linkedin.com/in/samson-ayodele-idowu-090497193/'>
            <img src={linkedin} alt='linkedin' />
        </a>
        <a href='https://twitter.com/AyodeleNoTime'>
            <img src={twitter} alt='twitter' />
        </a> 
    </div>
  )
}

export default Socials