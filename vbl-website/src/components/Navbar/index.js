import React from 'react';
import {FaInstagram, FaDiscord} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLink} from 'react-icons/bs'

import './index.css';
import logo from './vbl-logo.png';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navbar-first-line'>
                <div className='logo-name'>
                    <img className='logo' src={logo} alt='Logo' />
                    <h2>Vancouver Black Library</h2>  
                </div>
                <div className='follow-icons-login'>
                    <FaInstagram className='icon' />
                    <FaDiscord className='icon' />
                    <AiOutlineMail className='icon' />
                    <BsLink className='icon' /> 
                    <button className='login-button'><h5>LOG IN</h5></button> 
                </div>
            </div>
            <div className='navbar-second-line'>
                <p>This is the select bar</p>
            </div>
            
        </div>
    )
}

export default Navbar