import React from 'react';

function About() {
    return (
    <div className="centered-page">
        <h1>About Page</h1>
        <img src="https://via.placeholder.com/250"></img>
        <p>
            I am a Fullstack developer that is eager to learn new technologies! 
        </p>
        <br></br>
        <p>
            Please feel free to contact me for any inquiries regarding new opportunities via:
            <ul >
                <li> <a href="https://www.linkedin.com/in/brad-samuel-251805/">LinkedIn</a> </li>
                <li> <a href="https://github.com/Brad-Sam25">Github</a> </li>
                <li> <a href="mailto:bradsamuel97@gmail.com">Email</a> </li>
            </ul>
        </p>
    </div>
    );
}

export default About;