import React from 'react'

const Milestone = ({ ProjectTitle, Stack, Description, Name }) => {
  return (
    <div className='milestone'>
        <h2>{ProjectTitle}</h2>
        <p>{Stack}</p>
        <a href={Description} rel='noreferrer' target='_blank'> 
            <label>{Name}</label>
        </a>
    </div>
  )
}

export default Milestone