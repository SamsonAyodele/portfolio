import React from 'react'

const ServiceRendered = ({Pics, Title, SubTitle}) => {
  return (
    <div className='services'>
         <img src={Pics} alt='logo' />
         <h2>{Title}</h2>
         <p>{SubTitle}</p>
    </div>
  )
}

export default ServiceRendered