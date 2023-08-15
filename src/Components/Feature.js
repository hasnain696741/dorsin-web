import React from 'react';
import mobileImg from './assests/online-world.svg'
const Feature = () => {
    return (
        <div className='feature-main-div'>
            <div className='feature-main-div-content'>
                <h3>A digital web design studio creating modern & engaging online experiences</h3>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                  a large language ocean. A small river named Duden
                 flows by their place and supplies it with the necessary regelialia.</p>
                <ul>
                    <li>We put a lot of effort in design.</li>
                    <li>The most important ingredient of successful website.</li>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                    <li>Submit Your Organization.</li>
                </ul>
                <button>Learn More</button>
            </div>
            <div className='feature-main-div-image'>
<img src={mobileImg} alt="" />
            </div>
        </div>
    )
}

export default Feature
