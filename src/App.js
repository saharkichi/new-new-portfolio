import React, {useState} from 'react';
import './App.css';
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    
    return (
        <div className="App">
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/Homepage' element={<Homepage/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Resume" element={<Resume/>}/>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
         </div>
    );
}

export default App;
