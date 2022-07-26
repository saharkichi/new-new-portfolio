// WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React from 'react';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Navbar() {
    return (
        <div class="Navbar">
            <a href="./Aboutme">About Me</a>
            <a href="./Portfolio">Portfolio</a>
            <a href="./Contact">Contact Me</a>
            <a href="./Resume">Resume</a>
        </div>
    )
}

export default Navbar