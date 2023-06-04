import React, {useState} from 'react';
import {FaInstagram, FaDiscord} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLink} from 'react-icons/bs'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

import './index.css';
import logo from './vbl-logo.png';
import SearchBar from './SearchBar';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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


            <div className='navbar-select-bar'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About Us <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/using-the-library' className='nav-links' onClick={closeMobileMenu}>
                            Using the Library
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/community-engagement' className='nav-links' onClick={closeMobileMenu}>
                            Community Engagement
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/support-us' className='nav-links' onClick={closeMobileMenu}>
                            Support Us
                        </Link>
                    </li>
                </ul>         
            </div>

            <div className='search-bar'>
                <SearchBar />

            </div>
            
        </div>
    )
}

export default Navbar;