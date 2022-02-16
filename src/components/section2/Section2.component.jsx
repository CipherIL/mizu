import React from 'react';
import FlyingImages from './flyingImages/FlyingImages.component';
import './section2.styles.scss';
import XScrollingImages from './xScrollingImages/XScrollingImages.component';

const Section2 = () => {

    const handleTitleClick = (e) => {
        e.target.scrollIntoView(true)
    }
    return (
        <section className='section2'>
            <div className='section_main'>
                <span className='section_main_title'>Made for diving, and so much more</span>
                <XScrollingImages/>
                <FlyingImages/>
                <span className='section_main_title2' onClick={handleTitleClick}>Fast Charging and 5 Hours of Active Work</span>
                <img src="/assets/jpgs/mizu_camera_back.jpg" alt="mizu_camera_back" className='mizu-camera-back-image'/>
            </div>
        </section>
    )
}

export default Section2