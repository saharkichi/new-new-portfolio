//WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <h1>Sahar Kichi</h1>
            <Navbar />
        </div>
    )
}

export default Header