import React from 'react';

const About = (props) => {
  return (
    <div id="about" className="section">
      <div className="profile container">
        <img className="profile-pic" src="/assets/LighthouseProfile.jpeg" />
        <div className="meta-container">
          <h1>Brendan Walker</h1>
          <h3>Web Developer</h3>
          <p>I'm a web developer who has a passion for technology and is enthusiastic about making intuitive UI. After spending some time at my cousin's tech company and seeing all the collaboration and creativity, I knew right away that this was something I wanted to pursue. I strive every day to write cleaner and more modular code, and in doing so I discover more possibilities of the web.</p>
        </div>
      </div>
      <div className="info container">
        <p className="link"><img src="/assets/Phone.png" />250-857-2365</p>
        <p>
          <img src="/assets/Email.png" />
          <a href="mailto:brenny.walker@gmail.com">brenny.walker@gmail.com</a>
        </p>
        <p>
          <img className="github" src="/assets/GitHub.png" />
          <a href="https://github.com/brendonion" target="_blank">brendonion</a>
        </p>
      </div>
    </div>
  )
}

export default About
