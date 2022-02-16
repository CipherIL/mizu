import React from 'react'
//Scss Imports
import './_header.styles.scss';
//Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const handleLinkClick = (e) => {
        e.preventDefault();
    }
    return (
        <header className='header'>
            <img src="/assets/pngs/logo.png" alt="mizu_logo" className='header_logo'/>
            <nav className='header_nav'>
                <span className='header_nav_link-container'>
                    <a href="/" className='header_nav_link' onClick={handleLinkClick}>HOME</a>
                </span>
                <span className='header_nav_link-container'>
                    <a href="/" className='header_nav_link' onClick={handleLinkClick}>ABOUT</a>
                </span>
                <span className='header_nav_link-container'>
                    <a href="/" className='header_nav_link' onClick={handleLinkClick}>CART</a>
                </span>                
            </nav>
            <FontAwesomeIcon icon={["fas","magnifying-glass"]} size="2x" className='header_icon'/>
        </header>
    )
}

export default Header