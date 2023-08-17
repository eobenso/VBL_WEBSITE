import React from 'react';

import './index.css';
import image from './images/bk.jpg'; 


const Content = () => {

    return (
        <div className='BookClub'>
            <h4 className='sub-section-name'>Events {'>'} Book Club</h4>
            <br></br>
            <h2 className='upper-heading-name'>Current Read</h2>

        <div className="current"> 
        <div className="example-image-01">
            <img className='img' src={image} alt='Book Title'/> 
            <br></br>
        </div>
        <br></br>
        <br></br>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
            pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
            eget duis at tellus.</p>
            <br></br>
        <div className="table"> 
        <h3 className='Schedule'> Schedule: Mon/Wed/Fri</h3>
        <h3 className='time'> Time: 13:00</h3>
        <h3 className='location'> Location: VBL</h3>
        <br></br>
        <h4 className='RSVP'> Sign Up Here!</h4>
        </div>
        </div>
        <br></br>
        <br></br>
        <h2 className='lower-heading-name'>Previous Reads</h2>
        <br></br>


        <div class="images-container">

        <div class="image">
            <img src={image} alt=""/>

            <div class="description">
                <h2>LegendBorn</h2>
                <p>A residential program for bright high schoolers at UNC–Chapel Hill seems like the perfect escape—until Bree witnesses a magical attack her very first night on campus.</p>
            </div>
        </div>

        <div class="image">
            <img src={image} alt=""/>

            <div class="description">
                <h2>LegendBorn</h2>
                <p>A residential program for bright high schoolers at UNC–Chapel Hill seems like the perfect escape—until Bree witnesses a magical attack her very first night on campus.</p>
            </div>
        </div>

        <div class="image">
            <img src={image} alt=""/>

            <div class="description">
                <h2>LegendBorn</h2>
                <p>A residential program for bright high schoolers at UNC–Chapel Hill seems like the perfect escape—until Bree witnesses a magical attack her very first night on campus.</p>
            </div>
        </div>

        <div class="image">
            <img src={image} alt=""/>

            <div class="description">
                <h2>LegendBorn</h2>
                <p>A residential program for bright high schoolers at UNC–Chapel Hill seems like the perfect escape—until Bree witnesses a magical attack her very first night on campus.</p>
            </div>
        </div>

    </div>


    </div>

    )
}
        
export default Content;