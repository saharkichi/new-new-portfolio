// WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React from 'react';
import Aboutme from './aboutme';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';

function Navbar() {
    return (
        <div>
            <a href="./aboutme">About Me</a>
            <a href="./portfolio">Portfolio</a>
            <a href="./contact">Contact Me</a>
            <a href="./resume">Resume</a>
        </div>
    )
}

export default Navbar