import React from 'react'
import './flyingImages.styles.scss';
const FlyingImages = () => {
    return (
        <div className='flying-images'>
            <div className='card-image-container'>
                <div className='card'>Zeiss Lens<br/>Constructed Of<br/>Dragon Glass</div>
                <div className='image-container'>
                    <img src="/assets/jpgs/mizu_camera_1.jpg" alt="mizu_camera_1" />
                </div>
            </div>
            <div className='card-image-container reverse'>
                <div className='card'>Drop-Proof<br/>Dustproof<br/>Up to depth of 25M</div>
                <div className='image-container'>
                    <img src="/assets/jpgs/mizu_camera_2.jpg" alt="mizu_camera_2" />
                </div>
            </div>
        </div>
    )
}

export default FlyingImages;