import React from 'react';
import './App.css';
import Aboutme from "./components/aboutme";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" element={<Homepage/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
                
            </BrowserRouter>
            <Footer/>
         </div>
    )
}

export default App;

