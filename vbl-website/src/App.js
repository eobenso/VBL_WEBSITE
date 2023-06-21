import React from 'react';
import Home from './pages/index.js';
import CollaborateWithUs from './pages/CollaborateWithUs.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/collaborate-with-us' element={<CollaborateWithUs />}></Route>
            </Routes>
        </Router>
    );
}

export default App;