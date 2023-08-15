import React from 'react';
import contactimg from './assests/contactimg.jpg'

const Contact = () => {
  return (
    <div className='contact-main-div'>
       <div className='contact-child-1'>
    <h2>GET IN TOUCH</h2>
      <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences  <span> meaning and add a value for our clients.</span></p>
    </div>
    <div className='contact-img'>
        <img src={contactimg} alt="" />
    </div>
    </div>
  )
}

export default Contact
