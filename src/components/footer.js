//WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
import React from 'react';

function Footer() {
    return (
        <div>
            <a href="https://github.com/saharkichi" img="./assets/download.png" alt="GitHub"> </a>
            <a href="https://www.linkedin.com/in/sahar-kichi-414077240/" img="./assets/download-1.png" alt="LinkedIn"> </a> 
            <a href="https://open.spotify.com/user/saharkichi" img="./assets/spotify-logo.png" alt="Spotify"> </a>
        </div >
    )
}

export default Footer