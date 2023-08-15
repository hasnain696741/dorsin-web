import React from 'react';
import PaymentImage from './assests/payment.png'

const Footer = () => {
  return (
    <div className='footer-main-div'>
    <div className='footer-rows'>
        <div className='footer-row1'>
        <h4 className='foo-h4'>DORSIN</h4>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </div>
        <div className='footer-row2'>
        <h4  className='foo-h4'>INFORMATION</h4>
            <ul>
                <li><a href="">Terms & Condition</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Bookmarks</a></li>
            </ul>
        </div>
        <div className='footer-row3'>
        <h4  className='foo-h4'>SUPPORT</h4>
            <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Disscusion</a></li>
            </ul>
        </div>
        <div className='footer-row4'>
        <h4>SUBSCRIBE</h4>
               <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
               <input type="text" placeholder='Email' name="" id="" />
        </div>
    </div>
      <div className='footer-last-div'>
<p>2019 - 2023 © Dorsin - Themesbrand payment </p>
<img src={PaymentImage} alt="" />
      </div>
    </div>
  )
}

export default Footer
