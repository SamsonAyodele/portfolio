import React from 'react';
import Intro from './Intro';
import Nav from './Nav'
import About from './About';
import Skill from './Skill';


const Header = () => {
    return (
        <>
        <div className='main--header'>
             <span className='nav--links'>
                <Nav />
             </span>
            <Intro />
        </div> 
         <div className='abt'>
            <About />
         </div>
         <div className='skills'>
            <Skill />
         </div>
     </>
    )
}

export default Header