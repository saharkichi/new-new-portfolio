// WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <Navbar />
            <Footer />
        </div>
    )
}

export default Homepage