import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Footer from './Footer';
const profileimg = require("./assets/avatar.jpeg");

function Homepage() {
    return (
        <div id="Aboutme">
        <img className="about--img" src={profileimg} alt="avatar"></img>
        <p>
        My name is Sahar Kichi! I recently moved downtown Toronto in 2021 after living in Burlington my entire life! I am a complete newbie when it comes to web development and coding after deciding to choose this career choice over my orginial plan of law school. I recently graduated from Ryerson University with a Bachelor of Arts in Criminology and looking forward to complete my program at the University of Toronto. Ive learnt relevant languages such as HTML, CSS, React, Javascript and more!
        </p>
    </div>
    )
}

export default Homepage