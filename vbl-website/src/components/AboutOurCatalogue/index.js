import React from 'react';

import './index.css';
import fiction_img from './ImgPopularGenres/fiction.jpeg';


const Content = () => {

    return (
        <div className='using-the-library-section'>
            <h4 className='sub-section-name'>Using the Library</h4>

            <div className='about-our-catalogue'>
                <h1>About Our Catalogue</h1>
                <p className='about-our-catalogue-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
                    pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
                    eget duis at tellus.
                </p>
            </div>

            <div className='books-more'>
                <h1>Books & More</h1>
                <h3 className='books-more-subtitle'>VBL Catalogue</h3>
                <a className='books-more-content' href='https://www.librarycat.org/lib/VanBlackLibrary'>https://www.librarycat.org/lib/VanBlackLibrary</a>
                <h3 className='books-more-subtitle'>Popular Genres</h3>
                <div className='popular-genres'>
                    <div className='popular-genres-content'>
                        <img className='popular-genres-img' src={fiction_img} alt='fiction' />
                        <a className='popular-genres-text' 
                            href='https://www.librarycat.org/lib/VanBlackLibrary/search/text/%28+tags%3A+Fiction+%29+'>Fiction</a>
                    </div>
                    <div className='popular-genres-content'>
                        <img className='popular-genres-img' src={fiction_img} alt='fiction' />
                        <a className='popular-genres-text' 
                            href='https://www.librarycat.org/lib/VanBlackLibrary/search/text/%28+tags%3A+Fiction+%29+'>Fiction</a>    
                    </div>
                    <div className='popular-genres-content'>
                        <img className='popular-genres-img' src={fiction_img} alt='fiction' />
                        <a className='popular-genres-text' 
                            href='https://www.librarycat.org/lib/VanBlackLibrary/search/text/%28+tags%3A+Fiction+%29+'>Fiction</a>    
                    </div>
                    <div className='popular-genres-content'>
                        <img className='popular-genres-img' src={fiction_img} alt='fiction' />
                        <a className='popular-genres-text' 
                            href='https://www.librarycat.org/lib/VanBlackLibrary/search/text/%28+tags%3A+Fiction+%29+'>Fiction</a>
                    </div>
                </div>
            </div>

            <div className='guidelines-for-borrowing-at-vbl'>
                <h1>Guidelines for borrowing at VBL</h1>
                <p className='guidelines-for-borrowing-at-vbl-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Turpis egestas maecenas 
                    pharetra convallis posuere morbi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Semper 
                    eget duis at tellus.
                </p>
            </div>
        </div>
    )
}

export default Content;