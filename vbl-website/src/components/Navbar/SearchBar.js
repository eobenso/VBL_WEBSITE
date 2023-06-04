import React from 'react'
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='search-bar'>
        <select className='search-select'>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="events">Events</option>
            <option value="website">Website</option>
        </select>
        <div className='search-input'>
            <input className='search-input-box' type='text' placeholder='Search for...'/>
            
        </div>
    </div>
  )
}

export default SearchBar