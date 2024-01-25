import React, {useState} from 'react';
import Modal from './modal'
import './job.css';

const Job = (props) => {

  const {position,
    role,
    level,
    postedOn,
    contract,
    location,
    skills,
    description,
    requirement} = props.job

  let keywords = [level, role, ...skills]
  let [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  }

  return (
    <div>
      <div className='job-container' onClick={handleModal}>
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
      <div className='modalElementContainer'>
      {
        modal === true ? <Modal handleModal={handleModal} position={position} description={description}/> : null
      }
      </div>
      </div>
      )
}
      
export default Job;