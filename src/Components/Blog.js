import React from 'react';
import img1 from './assests/img-1 (2).jpg'
import img2 from './assests/img-2.jpg'
import img3 from './assests/img-3.jpg'

const Blog = () => {
  return (
    <div className='blog-main-div'>
       <div className='service-child-1'>
       <h2>BLOG</h2>
      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class <span> at a euismod mus ipsum vel ex finibus laquam. </span></p>
    </div>
    <div className='blog-main-image'>
        <div  className='blog-main-image1'>
            <img className='blog-img' src={img1} alt="" />
            <h5  className='bh5'>UI & UX Design</h5>
        <a className='a-a' href="">Why are so many people..</a>
        <p className='p-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        <a className='read' href="">Read More </a>

        </div>
        <div  className='blog-main-image2'>
        <img className='blog-img'  src={img2} alt="" />
        <h5 className='bh5'>Digital Marketing</h5>
        <a  className='a-a' href="">New exhibition at our Museum</a>
        <p  className='p-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        <a className='read'  href="">Read More </a>

        </div>
        <div  className='blog-main-image3'>
        <img className='blog-img'  src={img3} alt="" />
        <h5  className='bh5'>Travelling</h5>
        <a  className='a-a' href="">Why are so many people..</a>
        <p className='p-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        <a className='read'  href="">Read More </a>

        </div>
    </div>
    </div>
  )
}

export default Blog
