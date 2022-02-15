import React from 'react';

//Scss Import
import './_footer.styles.scss';
//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const mizo_logo_path = '/assets/pngs/logo.png'

const Footer = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
  }
  return (
    <div className="footer">
      <img src={mizo_logo_path} alt="mizu_logo" className="footer_logo"/>
      <div className='footer_links'>
        <a href="/" className='footer_link' onClick={handleLinkClick}>Home</a>
        <a href="/" className='footer_link' onClick={handleLinkClick}>Contact us</a>
        <a href="/" className='footer_link' onClick={handleLinkClick}>Newsletter</a>
      </div>
      <div className='footer_icons'>
        <FontAwesomeIcon icon={["fas","camera"]} size="4x" className='footer_icon'/>
        <FontAwesomeIcon icon={["fab","instagram"]} size="4x" className='footer_icon'/>
        <FontAwesomeIcon icon={["fab","facebook"]} size="4x" className='footer_icon'/>
      </div>
    </div>
  )
}

export default Footer