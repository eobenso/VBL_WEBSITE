import React from 'react';

import './index.css';
import staffList from './data.json';

const StaffCard = ({name, title, description, imagePath}) => {
  const image = require('./images/john-doe.jpg');
  return (
    <div className='staff-card'>
      <img src={image} alt={name} />
      <h5>{name}{' - '}{title}</h5>
      <p>{description}</p>
    </div>
  )
}

const StaffDirectory = () => {
    return (
        <div className='Staff-Directory'>
            <h4 className='sub-section-name'> About Us {'>'} Staff Directory </h4>
            <br></br>
            <h2 className='upper heading-name'>Staff Directory</h2>
            <br></br>
            <ul className='staff-list'>
              {staffList.map(staff => (
                <li key={staff.name}> <StaffCard {...staff}/> </li>))}
            </ul>
        </div>
        )
}
        
export default StaffDirectory;