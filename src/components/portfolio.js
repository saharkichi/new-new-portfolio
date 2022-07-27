import React from 'react';
import "./components.css";
const Proj1img = require("./assets/Screenshot3.png");
const Proj2img = require("./assets/screenshot.png");
const Jate = require("./assets/Jate.png");
const MVC = require("./assets/mvc.png");
const weather = require("./assets/weather.png");
const pg = require("./assets/pg.png");

function Portfolio() {
    return (
    <div id="Portfolio">
            <h1>Project 1: MoodMatcher</h1>
            <div>
                <a href="https://saharkichi.github.io/mood-matcher/"> <img className="project1" src={Proj1img} alt="MoodMatcher"></img></a>
                <a href="https://github.com/saharkichi/mood-matcher"> Github Repository</a>
                <a href="https://saharkichi.github.io/mood-matcher/"> Deployed App</a>
            </div>
            <div>
                <h1>Project 2: PlantOverflow</h1>
                    <a href="https://beautiful-glacier-bay-92549.herokuapp.com/"> <img className="project2" src={Proj2img} alt="PlantOverflow"></img></a>
                    <a href="https://github.com/saharkichi/PlantOverflow"> Github Repository</a>
                    <a href="https://beautiful-glacier-bay-92549.herokuapp.com/"> Deployed App</a>
            </div>
            <div>
                <h1>Project: Edit This Text</h1>
                    <a href="https://mighty-dawn-12190.herokuapp.com/"> <img className="jate" src={Jate} alt="Jate Editor APP"></img></a>
                    <a href="https://github.com/saharkichi/edit-this-text"> Github Repository</a>
                    <a href="https://mighty-dawn-12190.herokuapp.com/"> Deployed App</a>
            </div>
            <div>
                <h1> Project: MVC Tech Blog</h1>
                    <a href="https://fast-crag-06988.herokuapp.com/"> <img className="MVC" src={MVC} alt="MVC Tech Blog"></img></a>
                    <a href="https://github.com/saharkichi/MVC-tech-blog"> Github Repository</a>
                    <a href="https://fast-crag-06988.herokuapp.com/"> Deployed App</a>
            </div>
            <div>
                <h1> Project: Super Duper Weather App</h1>
                    <a href="https://saharkichi.github.io/super-duper-weather-app/"> <img className="weather" src={weather} alt="Super Duper Weather App"></img></a>
                    <a href="https://github.com/saharkichi/super-duper-weather-app"> Github Repository</a>
                    <a href="https://saharkichi.github.io/super-duper-weather-app/"> Deplpoyed App</a>
            </div>
            <div>
                <h1> Project: Password Generator</h1>
                    <a href="https://saharkichi.github.io/PS-G/"> <img className="pg" src={pg} alt="Password Generator"></img></a>
                    <a href="https://github.com/saharkichi/PS-G"> Github Repository</a>
                    <a href="https://saharkichi.github.io/PS-G/"> Deployed App</a>
            </div>
    </div>
    )
}

export default Portfolio