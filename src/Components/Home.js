import React from 'react';
import Style from './Style.css'
import Navbar from './Navbar'
import Service from './Service'
import Feature from './Feature';
import Pricing from './Pricing';
import Team from './Team';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

// import assests from './assests/bg-home.jpg'

const Home = () => {
    return (
        <div className='home-main-div'>
            <Navbar /><br />
            <div className='home-main-content-div'>
                <div className='home-content'>
                    <h3>We help startups launch their <span> products</span></h3>
                    <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                </div>
            </div>
            <Service />
            <Feature />
            <Pricing />
            <Team />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
