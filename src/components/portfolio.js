// WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
import React from 'react';
import "./components.css";
const Proj1img = require("./assets/Screenshot3.png");

function Portfolio() {
    return (
    <div id="Portfolio">
        <h1>Portfolio</h1>
        <a href="https://saharkichi.github.io/mood-matcher/"> <img className="project1" src={Proj1img} alt="MoodMatcher"></img> </a>
    </div>
    )
}

export default Portfolio