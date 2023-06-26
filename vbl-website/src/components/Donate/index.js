import React from 'react';

import './index.css';
import image from './images/unnamed.jpg'; 


const Content = () => {

    return (
        <div className='Donate'>
            <h4 className='sub-section-name'>Support Us {'>'} Donate </h4>
            <br></br>
            <h2 className='upper heading-name'>Donate to VBL</h2>

        <div className="event-list-1">
        
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Utenim ad minLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
        <br></br>
        <h3 className='subevent-1-name'>Sign up for a Membership Tier with VBL Ko-Fi </h3>
        <div className='subevent-list-1'>
            <img className="img-1" src={image} alt="Heart Coffee"/>
            <p>
                Support us by donating to our Ko-fi found through the following link: &nbsp;  
                <a href='https://ko-fi.com/vanblacklibrary'>https://ko-fi.com/vanblacklibrary</a>
            </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3 className='subevent-2-name'>Kickstart Vancouver Black Library through our GoFundMe </h3>
        <div className='subevent-list-2'>
            <p>
                Support us by donating to our GoFundMe found through the following link: &nbsp;
                <a href='https://www.gofundme.com/f/vancouver-black-library'>https://www.gofundme.com/f/vancouver-black-library</a> 
            </p>
        </div>
        
            
        </div>       
        

        </div>
        )
}
        
export default Content;