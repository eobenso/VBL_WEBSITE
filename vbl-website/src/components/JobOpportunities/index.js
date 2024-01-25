import React, {useState} from 'react';
import './index.css';
import Jobs from './jobs'
import Modal from './modal'
import data from './data.json'

const Content = () => {

    let [numPostings, setNumPostings] = useState(data.length);

    return (
        <div className='Job-Opportunities'>
            <h4 className='sub-section-name'>Community Engagement {'>'} Job Opportunities </h4>
            <br></br>
            <br></br>
            <div className='Postings-Header'>
              <h1 className='upper heading-name'>Current Listings</h1>
              <div className='num-postings'> {numPostings} Results</div>
            </div>
            <div className="Job-Board">
              <Jobs data={data} />
            </div>
        </div>
        )
}
        
export default Content;