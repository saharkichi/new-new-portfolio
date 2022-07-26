// WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address
import React from 'react';
import "./components.css";

function Contact() {
    return (
        <div>
            <h1> Contact Me!</h1>
            <p>
                <form>
                    <input type="text" placeholder="Enter name" />
                    <br>
                        <input type="email" placeholder="Enter your email" />
                    </br>
                        <textarea cols="60" rows="30" placeholder="Leave a message"></textarea>
                    <br>
                        <button type="submit"></button>
                    </br>
                </form>
            </p>
        </div>     
    )
}

export default Contact