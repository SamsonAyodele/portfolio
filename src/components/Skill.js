import React from 'react'
import Html from '../assets/html5.png'
import Js from '../assets/js.png'
import Wordpress from '../assets/wordpress.png'
import Windows from '../assets/windows.png'

const Skill = () => {
  return (
    <div className='mySkill'>
        <h1>My Skills</h1>
        <p className='skillp'>Here are a few skills I possess</p>
        <div className='stack'>
            <span className='logo'>
                <img src={Html} alt='html' />
            </span>
            <div className='name'>
                <label for='file'>HTML</label> <br></br>
                <progress id="file" value="98" max="100"> 32% </progress>
            </div>
            <span className='logo'>
                <img src={Js} alt='js' />
            </span>
            <div className='name'>
                <label for='file'>JAVASCRIPT</label> <br></br>
                <progress id="file" value="50" max="100"> 50% </progress>
            </div>
            <span className='logo'>
                <img src={Windows} alt='windows' />
            </span>
            <div className='name'>
                <label for='file'>WINDOWS</label> <br></br>
                <progress id="file" value="98" max="100"> 32% </progress>
            </div>
            <span className='logo'>
                <img src={Wordpress} alt='wordpress' />
            </span>
            <div className='name'>
                <label for='file'>WORDPRESS</label> <br></br>
                <progress id="file" value="99" max="100"> 32% </progress>
            </div>
        </div>
    </div>
  )
}

export default Skill
