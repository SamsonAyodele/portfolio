import React from 'react'
import { useState } from 'react'



const ContactForm = () => {

    const [userDetails, setUserDetails] = useState({
        name: 'samson',
        email: '0777@gmail.com'
    })

const updateUserDetails = (event) => {
    event.preventDefault()
    console.log('success')

    const objectData = {
        name : 'samson',
        email: '077@gmail.com'
    }
    setUserDetails(objectData)
    setEditFormIsOpen(false)
}
   
const [editFormIsOpen, setEditFormIsOpen] = useState(false)

const editButton = <button onClick={() => setEditFormIsOpen(true)}></button>
const editForm = (
    <form className='editForm' onSubmit={(e) => updateUserDetails(e)}>
        <input type='text' id='' name='name' placeholder='Enter your name'  required /> <br />
        <input type='text' id='' name='email' placeholder='Enter your email'  required /> <br />
        <textarea placeholder="Enter Message"></textarea>
        <br />
        <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>
            cancel
        </button>
        <button type='submit'>Save</button>
    </form>
)
  return (
    <div>
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <form className='editform'>{editForm}
          {editFormIsOpen ? editForm : editButton}
        </form>
    </div>
  )
}

export default ContactForm
