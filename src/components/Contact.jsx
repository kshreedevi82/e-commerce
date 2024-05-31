import React from 'react'

export default function Contact() {
  return (
    <div className='contact'><h1>Contact</h1>
    <h4>Send us Message</h4>
      <h3>Email:</h3><input type='email' id='email'/>
      <h3>Phone:</h3><input type='text' id='phone'/>
      <h3>Message:</h3>
      <textarea>message</textarea><br/>
      <button className='btn'>Submit</button>
    </div>
  )
}
