import React from 'react';
import Intro from './Intro';
import Nav from './Nav'
import About from './About';
import Skill from './Skill';
import Service from './Service';
import ServiceRendered from './ServiceRendered';
import Presentation from '../assets/presentation1.svg';
import Consulting from '../assets/consultation1.svg';
import Responsive from '../assets/responsive.svg'
import Database from '../assets/server 1.svg'
import Vector from '../assets/checklist 1.svg'
import Dev from '../assets/cloud 1.png'
// import Writing from '../assets/notes 1.png'
import Projects from './Projects'
import Milestone from './Milestone';
import GetInTouch from './GetInTouch';
import Footer from './Footer';


const Header = () => {
    return (
        <>
        <div className='main--header'>
             <span className='nav--links'>
                <Nav />
             </span>
            <Intro />
        </div> 
         <div id='abt'>
            <About />
         </div>
         <div className='skills'>
            <Skill />
         </div>
         <div id='mainService'>
            <Service />
            <div className='serviced'>
            <ServiceRendered Pics={Presentation} 
            Title={'Training'} 
            SubTitle={'I offer instructor-led training in a way that fits with the way you work.'} 
            />
            <ServiceRendered Pics={Consulting} 
            Title={'IT Consulting'}
            SubTitle={'I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.'}
            />
            <ServiceRendered Pics={Responsive} 
            Title={'Responsive Web Design'}
            SubTitle={'I Help design Mobile-friendly, world class websites that helps scales your business and helps user experience get better.'}
            />
             <ServiceRendered Pics={Database} 
            Title={'DataBase Management'} 
            SubTitle={'With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.'} 
            />
            <ServiceRendered Pics={Vector}
            Title={'Software Testing'}
            SubTitle={'I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. '}
            />
            <ServiceRendered Pics={Dev}
            Title={'Sass Development'}
            SubTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.'}
            />
            {/* <ServiceRendered Pics={Writing}
            Title={'Technical Writing'}
            SubTitle={'I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information.'}
            /> */}
            </div>
         </div>
         <div id='projectDone'>
            <Projects />
            <div className='milestones'>
               <div className='milestone1'>
                  <Milestone ProjectTitle={'Digital Business Card'}
                  Stack={'ReactJs'}
                  Description={'https://github.com/SamsonAyodele/Digital-Business-Card'}
                  Name={'Digital'}
                  />
               </div>
               <div className='milestone2'>
               <Milestone ProjectTitle={'Tenzie Game'}
                  Stack={'ReactJs'}
                  Description={'https://github.com/SamsonAyodele/TenzieReactGame'}
                  Name={'Tenzie Game'}
                  />
               </div>
               <div className='milestone3'>
               <Milestone ProjectTitle={'Pig Game'}
                  Stack={'JavaScript'}
                  Description={'https://github.com/SamsonAyodele/PigGame'}
                  Name={'Pig Game'}
                  />
               </div>  
            </div>
         </div>
         <div id='Contact'>
          <GetInTouch />
         </div>
         <div className='footer'>
            <Footer />
         </div>
     </>
    )
}

export default Header
