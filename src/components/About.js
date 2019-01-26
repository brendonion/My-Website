import React from 'react';
import lighthouse from '../images/LighthouseProfile.jpeg';
import linkedin from '../images/Linkedin.svg';
import email from '../images/Email.svg';
import github from '../images/GitHub.png';

const About = (props) => {
  return (
    <div id="about" className="section">
      <div className="profile container">
        <img className="profile-pic" src={lighthouse} />
        <div className="meta-container">
          <h1>Brendan Walker</h1>
          <h3>Full Stack Web Developer</h3>
          <p>I'm a web developer who has a passion for technology and is enthusiastic about making intuitive UI. After spending some time at my cousin's tech company and seeing all the collaboration and creativity, I knew right away that this was something I wanted to pursue. I strive every day to write cleaner and more modular code, and in doing so I discover more possibilities of the web.</p>
        </div>
      </div>
      <div className="info container">
        <p className="link">
          <img src={linkedin} />
          <a href="https://www.linkedin.com/in/brendan-walker-0a728713b/" target="_blank">LinkedIn</a>
        </p>
        <p>
          <img src={email} />
          <a href={"mailto:brenny.walker@gmail.com"}>Email</a>
        </p>
        <p>
          <img className="github" src={github} />
          <a href="https://github.com/brendonion" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
      </div>
    </div>
  )
}

export default About
