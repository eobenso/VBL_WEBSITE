import React from 'react';
import Home from './pages/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;