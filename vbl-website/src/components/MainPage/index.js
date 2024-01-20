import React from 'react';

import './index.css';
import image_0 from './images/bulletin_0.jpg'; 
import image_1 from './images/bulletin_1.jpg'; 
import image_2 from './images/bulletin_2.jpg'; 


const WelcomePageContent = () => {

    return (
<div class="MainPage">

<div class="display-area">
  <div class="cards-wrapper">
    <div class="card"><img src={image_0} width="200" height="200" alt=""/></div>
    <div class="card"><img src={image_1} width="200" height="200" alt=""/></div>
    <div class="card"><img src={image_2} width="200" height="200" alt=""/></div>

    <div class="card"><img src={image_0} width="200" height="200" alt=""/></div>
    <div class="card"><img src={image_1} width="200" height="200" alt=""/></div>
    <div class="card"><img src={image_2} width="200" height="200" alt=""/></div>
    
    <div class="card"><img src={image_0} width="200" height="200" alt=""/></div>
    <div class="card"><img src={image_1} width="200" height="200" alt=""/></div>
    <div class="card"><img src={image_2} width="200" height="200" alt=""/></div>
    
  </div> 
</div>

<div class="dots-wrapper">
  <button class="dot active"></button>
  <button class="dot"></button>
  <button class="dot"></button>
</div>

<br></br>
<div class='welcome-mainpage'>
  <section id="welcome">
            <h2><b>Welcome to Vancouver Black Library!</b></h2>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
    </section>
  </div>
</div>
      

    );
}

export default WelcomePageContent;

const wrapper = document.querySelector('.cards-wrapper');
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
//   add a click event listener to each dot
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
//       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
});