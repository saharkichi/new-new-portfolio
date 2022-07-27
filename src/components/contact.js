// WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address
import "./components.css"
import React, { useState } from 'react';

function Contact() {
const [formState, setFormState] = useState({
name: '',
email: '',
message: '',
})


const [errorMessage, setErrorMessage] = useState('');
const { name, email, message } = formState;

const handleSubmit = (e) => {e.preventDefault(); if (!errorMessage) {
console.log('Submit Form', formState);
}
}

const handleChange = (e) => {
if (!e.target.value.length) {
setErrorMessage(`${e.target.name} is required.`);
} else {
setErrorMessage('');
}
if (!errorMessage) {
setFormState({ ...formState, [e.target.name]: e.target.value });
console.log('Handle Form', formState);
}
}

return (
<section>
    <form id="contact-form" onSubmit={handleSubmit}>
        <div>
                <label htmlFor="name">Name:</label>
            <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}/>
        </div>
            <div>
                    <label htmlFor="email">Email address:</label>
                <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}/>
            </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        defaultValue={message}
                        onBlur={handleChange}/>
                </div>
        {errorMessage && (
            <div>           
                <p className="error-text">{errorMessage}</p>
            </div>
)
} 
        <button type="submit">Submit</button>
    </form>

</section>

)
}

export default Contact
