import React from 'react';

import './index.css';
import image from './images/vbl-events-og.jpg'; 


const Content = () => {

    return (
        <div className='VBL-events'>
            <h4 className='sub-section-name'>Events {'>'} VBL Events</h4>
            <br></br>
            <h2 className='upper heading-name'>Ongoing Events</h2>

        <div className="event-list-1">
        <div className="example-image-1">
            <img className='img-1' src={image} alt='Event A' /> 
            <br></br>
        </div>
        <br></br>
        <h3 className='example1'> Examples VBL Event A</h3>
        <br></br>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
            pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
            eget duis at tellus.</p>
            <br></br>
        <h3 className='RSVP1'> RSVP Here!</h3>
        <br></br>
        </div>
        <br></br>

        <div className="event-list-2"> 
        <div className="example-image-2">
            <img className='img-2' src={image} alt='Event B' /> 
            <br></br>
        </div>
        <br></br>
        <h3 className='example2'> Examples VBL Event B</h3>
        <br></br>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
            pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
            eget duis at tellus.</p>
            <br></br>
        <h3 className='RSVP2'> RSVP Here!</h3>
        </div>

        <br></br>
        <h2 className='lower heading name'> Upcoming Events</h2>
        <br></br>
        <div className="event-list3"> 
        <br></br>
        <div className="example-image-3">
            <img className='img-3' src={image} alt='Event C' /> 
            <br></br>
        </div>
        <br></br>
        <h3 className='example3'> Examples VBL Event C</h3>
        <br></br>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
            pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
            eget duis at tellus.</p>
            <br></br>
            <h3 className='RSVP3'> RSVP Here!</h3>
        </div>

    </div>

    )
}
        
export default Content;