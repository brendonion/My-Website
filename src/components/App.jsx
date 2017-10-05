import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="section">
            <div className="profile container">
              <img className="profile-pic" src="/assets/LighthouseProfile.jpg" />
              <div className="meta-container">
                <h1>Brendan Walker</h1>
                <h3>Web Developer</h3>
                <p>I’m a web developer who has a passion for technology and design. I was inspired to work for the tech industry while touring my cousin’s tech company. I knew right away that this was something I wanted to pursue. Thus, I’m ever so eager to code and discover the possibilities of the web.</p>
              </div>
            </div>
            <div className="info container">
              <p><img src="/assets/Phone.png" />250-857-2365</p>
              <p className="link" ><img src="/assets/Email.png" />brenny.walker@gmail.com</p>
              <p>
                <img className="github" src="/assets/GitHub.png" />
                <a href="https://github.com/brendonion" target="_blank">brendonion</a>
              </p>
            </div>
          </div>
          <div className="section blue">
            <h1 className="header">EXPERIENCE</h1>
            <div className="experience container">
              PLACEHOLDER
            </div>
          </div>
          <div className="section">
            <h1 className="header">EDUCATION</h1>
            <div className="education container">
              PLACEHOLDER
            </div>
          </div>
          <div className="section blue">
            <h1 className="header">SKILLS</h1>
            <div className="skills">
              <div className="skill container">
                <img src="/assets/Javascript.png" />
                <p>Javascript</p>
              </div>
              <div className="skill container">
                <img src="/assets/HTML.png" />
                <p>HTML</p>
              </div>
              <div className="skill container">
                <img src="/assets/CSS.png" />
                <p>CSS</p>
              </div>
              <div className="skill container">
                <img src="/assets/Sass.png" />
                <p>SASS</p>
              </div>
              <div className="skill container">
                <img src="/assets/React.png" />
                <p>React</p>
              </div>
              <div className="skill container">
                <img src="/assets/Redux.png" />
                <p>Redux</p>
              </div>
              <div className="skill container">
                <img src="/assets/Golang.png" />
                <p>Golang</p>
              </div>
              <div className="skill container">
                <img src="/assets/Ruby.png" />
                <p>Ruby</p>
              </div>
              <div className="skill container">
                <img src="/assets/Postgres.png" />
                <p>Postgres</p>
              </div>
              <div className="skill container">
                <img src="/assets/Bootstrap.png" />
                <p>Bootstrap</p>
              </div>
              <div className="skill container">
                <img src="/assets/Rails.png" />
                <p>Rails</p>
              </div>
              <div className="skill container">
                <img src="/assets/Express.png" />
                <p>Express</p>
              </div>
              <div className="skill container">
                <img src="/assets/MongoDB.png" />
                <p>MongoDB</p>
              </div>
              <div className="skill container">
                <img src="/assets/Firebase.png" />
                <p>Firebase</p>
              </div>
              <div className="skill container">
                <img src="/assets/jQuery.png" />
                <p>jQuery</p>
              </div>
              <div className="skill container">
                <img src="/assets/Node.png" />
                <p>Node</p>
              </div>
            </div>
          </div>
          <div className="section">
            <h1 className="header">PROJECTS</h1>
            <div className="container">
              PLACEHOLDER
            </div>
          </div>
          <div className="footer blue">
            <h5 className="header">Brendan Walker</h5>
            <div className="info container">
              <p><img src="/assets/Phone.png" />250-857-2365</p>
              <p className="link" ><img src="/assets/Email.png" />brenny.walker@gmail.com</p>
              <p>
                <img className="github" src="/assets/GitHub.png" />
                <a href="https://github.com/brendonion" target="_blank">brendonion</a>
              </p>
            </div>
            <button className="up-btn" />
          </div>
        </div>
      </div>
    )
  }
}

export default App
