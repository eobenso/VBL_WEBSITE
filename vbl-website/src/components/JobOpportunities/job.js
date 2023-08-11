import React, {useEffect, useState} from 'react';
import './job.css';

const Job = (props) => {

  const {id,
    company,
    logo,
    recent,
    featured,
    position,
    role,
    level,
    postedOn,
    contract,
    location,
    skills} = props.job

  let keywords = [level, role, ...skills]

  return (
      <div className='job-container'>
        <div className="part1">
          <div className="company">
            {props.job.recent && <span className="new">new!</span>}
            {props.job.featured && <span className="featured">featured!</span>}
          </div>
          <div className='position'>{position}</div>
          <div className='details'>
            <span>{postedOn}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{contract}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="part2">
          {
            keywords.map((key, i) => {
              return <span key={i}>{key}</span>
            })
          }
        </div>
      </div>
      )
}
      
export default Job;