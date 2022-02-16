import React from 'react';

//Component Imports
import Footer from './footer/Footer.component'
import BuyNowButton from '../shared/buyNowButton/BuyNowButton.component';

//Scss Imports
import './_section3.styles.scss';

const Section3 = () => {
    return (
        <section className='section3'>
            <div className='image-text-container'>
                <img src="/assets/jpgs/mizu_camera_sea.jpg" alt="mizu_camera_sea" className='image-text-container_image'/>
                <span className='image-text-container_text'>More Than A Camera</span>
            </div>
            <BuyNowButton />
            <Footer />
        </section>
    )
}

export default Section3