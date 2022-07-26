// WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Homepage() {
    return (
        <div>
            <Footer />
            <Navbar />
        </div>
    )
}

export default Homepage