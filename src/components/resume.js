//WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
import React from 'react';
import "./components.css";

function Resume() {
    return (
        <div id="Resume">
            <p>
               <h1> Resume </h1>
               <iframe src="https://docs.google.com/document/d/e/2PACX-1vTB8M_pXfCMVcddo3VVs74vY1MHujIk8O9Y3tnL-1bGWQy5SXyz55BgeJljKg4pnqUjFbkgs6WjKQTJ/pub?embedded=true" width="600" height="400" title ="resume"></iframe>
               <button class="btn"><i class="fa fa-download"></i> Download</button>
            </p>   
    </div>
  )
}

export default Resume