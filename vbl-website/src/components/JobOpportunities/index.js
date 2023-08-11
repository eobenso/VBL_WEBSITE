import React from 'react';

import './index.css';
//import image from './images/unnamed.jpg'; 

let num_postings = 0;

const Content = () => {
    return (
        <div className='Job-Opportunities'>
            <h4 className='sub-section-name'>Community Engagement {'>'} Job Opportunities </h4>
            <br></br>
            <br></br>
            <div class='Postings-Header'>
              <h1 className='upper heading-name'>Current Listings</h1>
              <div class='num-postings'> {num_postings} RESULTS</div>
            </div>
            <div className="Job-Board">
              <div>
              </div>
            </div>
        </div>
        )
}
        
export default Content;