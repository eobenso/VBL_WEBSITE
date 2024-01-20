import React from 'react';
import Home from './pages/index.js';
import AboutOurCatalogue from './pages/AboutOurCatalogue.js'
import HoganAlleyResources from './pages/HoganAlleyResources.js'
import OtherLocalResources from './pages/OtherLocalResources.js'
import BlackBusinessDirectory from './pages/BlackBusinessDirectory.js'
import VBLEvents from './pages/VBLEvents.js'
import LocalEvents from './pages/LocalEvents.js'
import Merch from './pages/Merch.js'
import Donate from './pages/Donate.js'
import VolunteerWithUs from './pages/VolunteerWithUs.js';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about-our-catalogue' element={<AboutOurCatalogue />}></Route>
                <Route path='/hogan-s-alley-resource' element={<HoganAlleyResources />}></Route>
                <Route path='/other-local-resource' element={<OtherLocalResources/>}></Route>
                <Route path='/black-business-directory' element={<BlackBusinessDirectory />}></Route>
                <Route path='/vbl-events' element={<VBLEvents />}></Route>
                <Route path='/local-events' element={<LocalEvents />}></Route>
                <Route path='/merch' element={<Merch />}></Route>
                <Route path='/donate' element={<Donate />}></Route>
                <Route path='/volunteer-with-us' element={<VolunteerWithUs />}></Route>

            </Routes>
        </Router>
    );
}

export default App;