import React from 'react';

const About = (props) => {
  return (
    <div id="about" className="section">
      <div className="profile container">
        <img className="profile-pic" src="/assets/LighthouseProfile.jpg" />
        <div className="meta-container">
          <h1>Brendan Walker</h1>
          <h3>Web Developer</h3>
          <p>I’m a web developer who has a passion for technology and design. I was inspired to work for the tech industry while touring my cousin’s company in Denmark. I knew right away that this was something I wanted to pursue. Thus, I’m ever so eager to code and discover the possibilities of the web.</p>
        </div>
      </div>
      <div className="info container">
        <p><img src="/assets/Phone.png" />250-857-2365</p>
        <p><img src="/assets/Email.png" /><a href={"mailto:brenny.walker@gmail.com"}>brenny.walker@gmail.com</a></p>
        <p>
          <img className="github" src="/assets/GitHub.png" />
          <a href="https://github.com/brendonion" target="_blank">brendonion</a>
        </p>
      </div>
    </div>
  )
}

export default About
