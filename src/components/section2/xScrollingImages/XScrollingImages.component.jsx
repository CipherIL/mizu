import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import ScrollingContainer from 'react-indiana-drag-scroll';
import './xScrollingImages.styles.scss';

const XScrollingImages = () => {
    const scrollDiv = useRef();
    const scroll = () => {
        scrollDiv.current.getElement().scrollTo(450,0)
    }
    
    return (
        <div className='x-scrolling-images-container'>
            <ScrollingContainer className='x-scrolling-images' vertical={false} ref={scrollDiv}>
                <div className='image-container'>
                    <img src="/assets/jpgs/divers_left.jpg" alt="divers_left"/>
                </div>
                <div className='image-container'>
                    <img src="/assets/jpgs/divers_middle.jpg" alt="divers_middle"/>
                </div>
                <div className='image-container'>
                    <img src="/assets/jpgs/divers_right.jpg" alt="divers_right" onLoad={()=>{scroll()}}/>
                </div>
            </ScrollingContainer>
        </div>   
    )
}

export default XScrollingImages