import React from 'react';
const profileimg = require("./assets/avatar.jpeg");

function Aboutme() {
    return (
        <div id="Aboutme">
            <img className="about--img" src={profileimg} alt="avatar"></img>
            <p>
            My name is Sahar Kichi! I recently moved downtown Toronto in 2021 after living in Burlington my entire life! I am a complete newbie when it comes to web development and coding after deciding to choose this career choice over my orginial plan of law school. I recently graduated from Ryerson University with a Bachelor of Arts in Criminology and looking forward to complete my program at the University of Toronto. Ive learnt relevant languages such as HTML, CSS, React, Javascript and more!
            </p>
        </div>
    )
}

export default Aboutme