import React from 'react';

import './index.css';
import image from './images/unnamed.jpg'; 


const Content = () => {

    return (
        <div className='Merch'>
            <h4 className='sub-section-name'>Support Us {'>'} Merch </h4>
            <br></br>
            <h2 className='upper heading-name'>VBL Merch</h2>

        <div className="event-list-1">
        
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Utenim ad minLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
            
        </div>       
        <div className="images">
            <img src={image} alt='VBL Merch'/>
            </div>
        <div className="images">
            <img src={image} alt='VBL Merch'/>
            </div>
        <div className="images">
            <img src={image} alt='VBL Merch'/>
            </div>
        <div className="images">
            <img src={image} alt='VBL Merch'/>
        </div>

        </div>
        )
}
        
export default Content;