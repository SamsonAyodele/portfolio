import React from 'react'
import Socials from './Socials'
import Email from '../assets/Combined Shape.svg'
import Call from '../assets/Fill 1.svg'
import ContactForm from './ContactForm'

const GetInTouch = () => {
  return (
    <div className='connect'>
        <div className='getintouch'>
            <span>
                <h1>Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
                <Socials />
                <p>-xyluv</p>
            </span>
            <div className='email'>
                <span message>
                    <img src={Email} alt='mail' />
                </span>
                <span className='gmail'>
                    <h6>idowusamson0777@gmail.com</h6>
                    <p>Send a message anytime</p>
                </span>
            </div>
            <div className='email'>
                <span className='calling'>
                    <img src={Call} alt='mail' />
                </span>
                <span className='num'>
                    <h6>08032123930.</h6>
                    <p>Call anytime</p>
                </span>
            </div>
        </div>
        <div className='needService'>
            <h2>Need a Service?</h2>
            <h1>Send  A Message</h1>
            <ContactForm />
        </div>
    </div>
  )
}

export default GetInTouch