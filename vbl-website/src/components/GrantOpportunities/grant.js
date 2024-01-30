import React, {useState} from 'react';
import Modal from './modal'
import './grant.css';

const Grant = (props) => {

  const {title,
    postedOn,
    deadline,
    amount,
    description
  } = props.grant

  // let keywords = [level, role, ...skills]
  let [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  }

  return (
    <div>
      <div className='grant-container' onClick={handleModal}>
        <div className="part1">
          <div className='title'>{title}</div>
          <div className='details'>
            <span>{postedOn}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{deadline}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{amount}</span>
          </div>
        </div>
        {/* <div className="part2">
          {
            keywords.map((key, i) => {
              return <span key={i}>{key}</span>
            })
          }
        </div> */}
      </div>
      <div className='modalElementContainer'>
      {
        modal === true ? <Modal handleModal={handleModal} title={title} description={description}/> : null
      }
      </div>
      </div>
      )
}
      
export default Grant;