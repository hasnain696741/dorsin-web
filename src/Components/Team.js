import React from 'react'
import card1image from './assests/img-1.jpg'
import card2image from './assests/img-2 (1).jpg'
import card3image from './assests/img-3 (1).jpg'
import card4image from './assests/img-4.jpg'

const Team = () => {
    return (
        <div className='team-main-div'>
            <div className='team-child-1'>
                <h2>BEHIND THE PEOPLE</h2>
                <p>It is a long established fact that create category leading brand experiences a reader will be distracted <span>the readable content of a page when looking at its layout.</span></p>
            </div>
            <div className='team-image'>
                <div className='team-image1'>
                    <img src={card1image} alt="" />
                    <h4>Frank Johnson</h4>
                    <p className='card-p'>CEO</p>
                </div>
                <div className='team-image2'>
                    <img src={card2image} alt="" />
                    <h4>Frank Johnson</h4>
                    <p className='card-p'>DESIGNER</p>
                </div>
                <div className='team-image3'>
                    <img src={card3image} alt="" />
                    <h4>Frank Johnson</h4>
                    <p className='card-p'>DEVELOPER</p>
                </div>
                <div className='team-image4'>
                    <img src={card4image} alt="" />
                    <h4>Frank Johnson</h4>
                    <p className='card-p'>MANAGER</p>
                </div>

            </div>
        </div>
    )
}

export default Team
