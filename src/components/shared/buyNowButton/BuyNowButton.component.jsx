import React from 'react'
import './_buyNowButton.styles.scss';

const BuyNowButton = () => {
    const handleButtonClick = (e) => {
        e.preventDefault();
    }
    return (
        <button className='buy-now-button' onClick={handleButtonClick}>BUY NOW</button>
    )
}

export default BuyNowButton;