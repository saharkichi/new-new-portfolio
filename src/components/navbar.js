// WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React from 'react';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Navbar() {
    return (
        <div className="navbar">
            <a href="./Aboutme">About Me &nbsp; &nbsp;</a>
            <a href="./Portfolio">Portfolio &nbsp; &nbsp;</a>
            <a href="./Contact">Contact Me &nbsp; &nbsp;</a>
            <a href="./Resume">Resume &nbsp; &nbsp;</a>
        </div>
    )
}

export default Navbar