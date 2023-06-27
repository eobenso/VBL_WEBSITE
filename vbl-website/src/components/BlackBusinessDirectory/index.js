import React from 'react';

import './index.css';
import image from './images/unnamed.jpg'; 


const Content = () => {

    return (
        <div className='BlackBusinessDirectory'>
            <h4 className='sub-section-name'>Community Engagement {'>'} Black Business Directory </h4>
            <br></br>
            <h2 className='upper heading-name'>Black Business Directory</h2>

        <div className="event-list-01"> 
        <div className="example-image-01">
            <img className='img-01' src={image} alt='Business A' /> 
            <br></br>
        </div>
        <br></br>
        <h3 className='example01'> Example Business</h3>
        <br></br>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
            pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
            eget duis at tellus.</p>
            <br></br>
            <br></br>
        </div>

        <div className="event-list-02"> 
        <div className="example-image-02">
            <img className='img-02' src={image} alt='Business B' /> 
            <br></br>
        </div>
        <br></br>
        <h3 className='example02'> Example Business</h3>
        <br></br>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
            pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
            eget duis at tellus.</p>
            <br></br>
            <br></br>
        </div>
        <br></br>
            <div className='footer'>
        <br></br>
        <h2 className='lower heading name'> Collabrate With Us!</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Email us at: hi@vanblacklibrary.org</p>
            </div>

        </div>
        
        )
}
        
export default Content;