import React from 'react';
import {FaInstagram, FaDiscord} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLink} from 'react-icons/bs'

import './Header.css';
import logo from './vbl-logo.png';

function Header() {
    return (
        <div className='navbar-first-line'>
            <div className='logo-name'>
                <a href='/'><img className='logo' src={logo} alt='Logo' /></a>
                <h2>Vancouver Black Library</h2>  
            </div>
            <div className='follow-icons-login'>
                <a href='https://www.instagram.com/vanblacklibrary/'><FaInstagram className='ref-icon' /></a>
                <FaDiscord className='ref-icon' />
                <a href='mailto:vanblacklibrary@gmail.com'><AiOutlineMail className='ref-icon' /></a>
                <a href='https://www.gofundme.com/f/vancouver-black-library'><BsLink className='ref-icon' /></a>
                <button className='login-button'><h5>LOG IN</h5></button> 
            </div>
        </div>     
    )
}

export default Header;