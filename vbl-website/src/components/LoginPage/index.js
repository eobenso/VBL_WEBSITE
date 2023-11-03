import React, {useState} from 'react';
import {
  Link,
} from "react-router-dom";
import './index.css';

const Content = () => {
    let [show, setShowState] = useState(false);
    let [input, setInput] = useState(null);
    const passcode = "VBLeffects";

    let getInput = (val) => {
        setInput(val.target.value);
    }
    
    return (
        <div className='Login'>
            <h2 className='sub-section-name'> Volunteer Log-in Page </h2>
            <br></br>
            <br></br>
            <h4> Enter the passcode to view protected pages: </h4>
            <input className="text-box" type="text" onChange={getInput} />
            <button className="login-btn" onClick={(val) => {
              if (input === passcode) {
                setShowState(true)
              } else {
                setShowState(false)
              }
            }}>Verify</button>
            {show?<br></br>:null}
            {show?<br></br>:null}
            {show?<h4>Your passcode was correct!</h4>:null}
            {show?<br></br>:null}
            {show?<h4>Please check the following pages available for you.</h4>:null}
            {show?<br></br>:null}
            {
              show?<Link to="/protected-page"><button className='login-button'><h5>Volunteer</h5></button></Link>:null
            }
            {
              show?<Link to="/protected-page"><button className='login-button'><h5>Admin</h5></button></Link>:null
            }
        </div>
        )
}
        
export default Content;