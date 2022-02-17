import React, { useEffect, useRef } from 'react';
import ScrollingContainer from 'react-indiana-drag-scroll';
import './xScrollingImages.styles.scss';

const XScrollingImages = () => {
    const scrollDiv = useRef();
    
    useEffect(()=>{
        if(scrollDiv.current) {
            setTimeout(()=>{
                scrollDiv.current.scrollTo(450,0);
            },10)
        }
    },[])
    
    return (
        <div className='x-scrolling-images-container' >
            <ScrollingContainer className='x-scrolling-images' vertical={false} innerRef={scrollDiv}>
                <img src="/assets/jpgs/divers_left.jpg" alt="divers_left" draggable="false" onDragStart={()=>{return false;}}/>
                <img src="/assets/jpgs/divers_middle.jpg" alt="divers_middle" draggable="false" onDragStart={()=>{return false;}}/>
                <img src="/assets/jpgs/divers_right.jpg" alt="divers_right" draggable="false" onDragStart={()=>{return false;}}/>
            </ScrollingContainer>
        </div>   
    )
}

export default XScrollingImages