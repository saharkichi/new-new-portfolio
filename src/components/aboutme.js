//WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them
import React from 'react';

function Aboutme() {
    return (
        <div>
            <img src="./assets/avatar.jpeg" alt="avatar"/>
            <p>
            My name is Sahar Kichi! I recently moved downtown Toronto in 2021 after living in Burlington my entire life! I am a complete newbie when it comes to web development and coding after deciding to choose this career choice over my orginial plan of law school. I recently graduated from Ryerson University with a Bachelor of Arts in Criminology and looking forward to complete my program at the University of Toronto. Ive learnt relevant languages such as HTML, CSS, React, Javascript and more!
            </p>
        </div>
    )
}

export default Aboutme