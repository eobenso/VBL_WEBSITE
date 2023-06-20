import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import './index.css';

const WelcomePageContent = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };


    return (
        <div className='MainPage' >

        <section id="welcome">
            <h2> <b>Welcome to Vancouver Black Library!</b></h2>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <div className='border'>
            <div className='carousel' >
            <h2>Community Bulletin</h2>

            <Slider {...settings}>
                
            <div className="box">
            <img src="https://cdn-az.allevents.in/events5/banners/008533c337dd87c2dd788e58a2c583843ef9f8b096caef545278dd6b41e8f24d-rimg-w1200-h1206-gmir.png?v=1661224890"
            alt="descriptive text"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw">

             </img>
            </div>

            <div className="box">

            <img src="https://cdn-az.allevents.in/events5/banners/008533c337dd87c2dd788e58a2c583843ef9f8b096caef545278dd6b41e8f24d-rimg-w1200-h1206-gmir.png?v=1661224890"
            alt="VBL EVENT IMAGE_A"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw">

            </img>
            </div>

            <div className="box">
            <img src="https://cdn-az.allevents.in/events5/banners/008533c337dd87c2dd788e58a2c583843ef9f8b096caef545278dd6b41e8f24d-rimg-w1200-h1206-gmir.png?v=1661224890"
            alt="VBL EVENT IMAGE_B"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw">

            </img>
            </div>

            <div className="box">
            <img src="https://cdn-az.allevents.in/events5/banners/008533c337dd87c2dd788e58a2c583843ef9f8b096caef545278dd6b41e8f24d-rimg-w1200-h1206-gmir.png?v=1661224890"
            alt="VBL EVENT IMAGE_C"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw">

            </img>
            </div>
            
            <div className="box">
            <img src="https://cdn-az.allevents.in/events5/banners/008533c337dd87c2dd788e58a2c583843ef9f8b096caef545278dd6b41e8f24d-rimg-w1200-h1206-gmir.png?v=1661224890"
            alt="VBL EVENT IMAGE_D"
            sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw">

            </img>
            </div>
            </Slider>
            </div>
        </div>


        </div>
        
    )
}

export default WelcomePageContent;