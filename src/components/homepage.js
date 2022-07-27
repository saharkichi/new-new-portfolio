// WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <Navbar />
            <Aboutme />
            <Contact />
            <Resume />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Homepage