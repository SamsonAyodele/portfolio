import React from 'react';
import Nav from './Nav'
import Socials from './Socials'

const Header = () => {
    return (
        <div className='main--header'>
            <nav>
             <h1 className='header'>Samson Ayodele</h1>
             <span className='nav--links'>
                <Nav />
                <Socials />
             </span>
             
            </nav>
        </div> 
    )
}

export default Header