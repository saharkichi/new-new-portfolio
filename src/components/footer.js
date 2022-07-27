//WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
import React from 'react';
import "./components.css"

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/saharkichi"> <img id="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/sahar-kichi-414077240/"> <img id="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" alt="Linkedin"/></a> 
            <a href="https://open.spotify.com/user/saharkichi"> <img id="spotify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1024px-Spotify_icon.svg.png?20191006032433" alt="Spotify"/></a>
        </div>
    )
}

export default Footer
