import React from 'react';

import './index.css';
import Header from './Header'
import SelectBar from './SelectBar'
import SearchBar from './SearchBar';

const Navbar = () => {

    return (
        <div className='Navbar'>
            <Header />
            <SelectBar />
            <SearchBar />
        </div>
    )
}

export default Navbar;