import React from 'react'
import Html from '../assets/html5.png'
import Js from '../assets/js.png'
import Wordpress from '../assets/wordpress.png'
import Windows from '../assets/windows.png'

const Skill = () => {
  return (
    <div className='mySkill'>
        <h1>My Skills</h1>
        <p>Here are a few skills I possess</p>
        <span>
            <img src={Html} alt='html' />
        </span>
        <div>
            <label for='file'>HTML</label> <br></br>
            <progress id="file" value="32" max="100"> 32% </progress>
        </div>
        <span>
            <img src={Js} alt='js' />
        </span>
        <div>
            <label for='file'>JAVASCRIPT</label> <br></br>
            <progress id="file" value="50" max="100"> 50% </progress>
        </div>
        <span>
            <img src={Windows} alt='windows' />
        </span>
        <div>
            <label for='file'>WINDOWS</label> <br></br>
            <progress id="file" value="32" max="100"> 32% </progress>
        </div>
        <span>
            <img src={Wordpress} alt='wordpress' />
        </span>
        <div>
            <label for='file'>WORDPRESS</label> <br></br>
            <progress id="file" value="32" max="100"> 32% </progress>
        </div>
    </div>
  )
}

export default Skill