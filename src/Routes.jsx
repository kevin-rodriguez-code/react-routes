import React from "react";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Rout() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Projects' element={<Projects />}></Route>
                <Route path='/Resume' element={<Resume />}></Route>
            </Routes>
        </Router>   
    )
}

export default Rout;