import React from 'react';
import './grant.css';
import './modal.css';

const Modal = ({handleModal, position, description}) => {
  return (
    <div className='modalBackground'>
      <div className="modalContainer">
        <div className='titleCloseBtn'>
          <button onClick={handleModal}> X </button>
        </div>
        <div className="title">
          <h1> {position} </h1>
        </div>
        <div className="body">
          <div className="desc">{description.split(/(?!.)/g).map((i,key) => {
            return <div key={key}>{i}<br /></div>;
        })}</div>
        </div>
        <div className="footer">
          <button onClick={handleModal} id="cancelBtn"> Cancel</button>
          <a href='mailto:hi@vancouverblacklibrary.org'><button> Apply</button></a>
        </div>
      </div>
    </div>
  )
}

export default Modal;
