// WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
import React from 'react';
import header from './header';
import footer from './footer';

function homepage() {
    return (
        <p>
            {[header, footer]}
        </p>
    )
}

export default homepage