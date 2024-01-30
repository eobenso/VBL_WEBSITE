import React, {useState} from 'react';
import './index.css';
import Grants from './grants'
import Modal from './modal'
import data from './data.json'

const Content = () => {

    let [numPostings, setNumPostings] = useState(data.length);

    return (
        <div className='Grant-Opportunities'>
            <h4 className='sub-section-name'>Community Engagement {'>'} Grant Opportunities </h4>
            {/* <br></br>
            <br></br> */}
            <p>
            Vancouver Black Library (VBL) provides funding opportunities for individuals and non-profit
            organizations working to… Our grants support a wide range of initiatives, including educational
            activities, cultural programs, and civil society projects. We encourage you to explore the various
            requirements and resources available to help bring your ideas to life.
            </p>
            <div className='Postings-Header'>
              <h1 className='upper heading-name'>Current Listings</h1>
              <div className='num-postings'> {numPostings} Results</div>
            </div>
            <div className="Grant-Board">
              <Grants data={data} />
            </div>
        </div>
        )
}
        
export default Content;