import React from 'react';
import Style from './Style.css'
import Home from './Home'
import Service from './Service'
import Feature from './Feature'
import Pricing from './Pricing'
import Team from './Team'
import Blog from './Blog'
import Contact from './Contact.js'

const Navbar = () => {
  let fun = () => {
<Contact />
  }
  return (
    <div>
      <div className='navbar'>
      <ul className='ul-home'>
    <li><a href='./Home'>Home</a></li>
    <li><a href={<Service/>}>Services</a></li>
    <li><a href={<Feature/>}>Features</a></li>
    <li><a href={<Pricing/>}>Pricing</a></li>
    <li><a href={<Team/>}>Team</a></li>
    <li><a href={<Blog/>}>Blog</a></li>
    <li><a onClick = {fun()}>Contact</a></li>
      </ul>
      
<ul className='ul-dorsin'>
    <li><a href=""><h1>DORSIN</h1></a></li>
    <li><a href=""><button className='btn'>Try it Free</button></a></li>
</ul>
      </div>

    </div>








  )
}

export default Navbar
