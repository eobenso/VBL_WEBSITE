import React from 'react';
import './grants.css';
import Grant from './grant'

const Grants = (props) => {
  return (
      <div className='grants'>
        {props.data.map((grant, i) => {
            return (<div key={i}>
                <Grant grant={grant} />
              </div>
            )
        })}

      </div>
      )
}
      
export default Grants;