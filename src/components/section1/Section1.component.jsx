import React from 'react'
import BuyNowButton from '../shared/buyNowButton/BuyNowButton.component';
//Component Imports
import Header from './header/Header.component'
//Scss Imports
import './_section1.styles.scss';

const Section1 = () => {
  return (
    <section className='section1'>
      <Header />
      <div className='section_main'>
        <span className='section_main_title'>The new MIZU</span>
        <div className='section_main_content'>
          <img src="/assets/pngs/mizu_camera.png" alt="" className='section_main_content_image'/>
          <BuyNowButton />
          <div className='quote'>
            <p className='quote_line'>With great <span className='underline'>Power</span></p>
            <p className='quote_line'>comes</p>
            <p className='quote_line'>great <span className='underline'>Responsibility</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1