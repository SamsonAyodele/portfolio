import React from 'react'
import Socials from './Socials'
import Image from '../assets/MyPics1.jpeg'

const Intro = () => {
  return (
    <section className='section1'>
    <div>
        <h6>HI THERE</h6>
        <h3>I AM SAMSON AYODELE</h3>
        <h1>A Top-notch FrontEnd Developer,<br></br>Writer and Mentor.</h1>
        <span className="soc">
          <Socials  />
        </span>
    </div>
      <div className='image'>
        <img src={Image} alt='samson' />
      </div>
   </section>
  )
}

export default Intro