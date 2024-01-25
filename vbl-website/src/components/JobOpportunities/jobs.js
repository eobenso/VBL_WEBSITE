import React from 'react';
import './jobs.css';
import Job from './job'

const Jobs = (props) => {
  return (
      <div className='jobs'>
        {props.data.map((job, i) => {
            return (<div key={i}>
                <Job job={job} />
              </div>
            )
        })}

      </div>
      )
}
      
export default Jobs;