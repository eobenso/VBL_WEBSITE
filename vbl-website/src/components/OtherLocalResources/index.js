import React from 'react';

import './index.css';
import image from './images/unnamed.jpg'; 


const Content = () => {

    return (
        <div className='Other-Local-Resources'>
            <h4 className='sub-section-name'>Community Engagement {'>'} Local Resources {'>'} Others Local Resources </h4>
            <br></br>
            <h2 className='upper heading-name'>Other Resources</h2>
            <br></br>
            <div className='resource-examples'>
                <div className='resource-example1'><img className='resource-image' src={image} alt='Resource'/>
                    <h2><center>Resource Example</center></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                </div>
                <div className='resource-example2'><img className='resource-image' src={image} alt='Resource'/>
                    <h2><center>Resource Example</center></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                </div>
                <div className='resource-example3'><img className='resource-image' src={image} alt='Resource'/>
                    <h2><center>Resource Example</center></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                </div>
            </div>




        </div>
        )
}
        
export default Content;