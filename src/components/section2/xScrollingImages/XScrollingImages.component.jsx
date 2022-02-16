import React, { useRef, useState } from 'react'
import './xScrollingImages.styles.scss';
const XScrollingImages = () => {
    const [mouseXPos,setMouseXPos] = useState();
    const scrollDiv = useRef("scrollDiv")

    const scrollX = (e,xOffset) => {
        const currScrollX = scrollDiv.current.offsetWidth;
        const scrollXTarget = currScrollX + xOffset;
        console.log(currScrollX,xOffset)
        scrollDiv.current.scrollTo(scrollXTarget,0);  
    }
    const handleDragStart = (e) => {
        setMouseXPos(e.clientX)
    }
    const handleDrag = (e) => {
        const currMouseX = e.clientX;
        if(currMouseX-mouseXPos !== 0) {
          scrollX(e,(currMouseX-mouseXPos)*-1);
          setMouseXPos(currMouseX)
        }
    }
    const handleDragEnd = (e) => {
        setMouseXPos(undefined);
    }
    return (
        <div className='x-scrolling-images-container' ref={scrollDiv}>
            <div className='x-scrolling-images'>
                <img src="/assets/jpgs/divers_left.jpg" alt="divers_left" draggable="false" onDragStart={()=>{return false;}}/>
                <img src="/assets/jpgs/divers_middle.jpg" alt="divers_middle" draggable="false" onDragStart={()=>{return false;}}/>
                <img src="/assets/jpgs/divers_right.jpg" alt="divers_right" onLoad={(e)=>{scrollX(e,-820)}} draggable="false" onDragStart={()=>{return false;}}/>
            </div>
            <div className='scroll-cover' onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd} draggable="true"></div>
        </div>
        
    )
}

export default XScrollingImages