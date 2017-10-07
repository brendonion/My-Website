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
              <div className="present">PRESENT</div>
              <div className="timeline"></div>
              <div className="info">
                <div className="title">
                  <span className="circle"></span>
                  <h2>Freshworks Studio</h2>
                  <h4>Junior Web Developer</h4>
                  <img src={"/assets/Freshworks.png"} />
                </div>
                <div className="description">
                  <h3>Since May 2017</h3>
                  <ul>
                    <li>Develop the front end of many projects using React and Redux</li>
                    <li>Style page components to fit the designs as close as possible, as well as make the pages very responsive</li>
                    <li>Discuss best practices with teammates in respect to file management and code maintanability</li>
                  </ul>
                </div>
              </div>
              <div className="info">
                <div className="title">
                  <span className="circle"></span>
                  <h2>T-booth Wireless</h2>
                  <h4>Sales Associate</h4>
                  <img src={"/assets/TBooth.png"} />
                </div>
                <div className="description">
                  <h3>July 2016 - March 2017</h3>
                  <ul>
                    <li>Sold phones and accessories in a personable way</li>
                    <li>Kept up to date with the latest technologies</li>
                    <li>Performed outstanding customer service to every person who stopped by</li>
                  </ul>
                </div>
              </div>
              <div className="info">
                <div className="title">
                  <span className="circle"></span>
                  <h2>Cordova Bay Golf</h2>
                  <h4>Groundskeeper</h4>
                  <img src={"/assets/CordovaBay.png"} />
                </div>
                <div className="description">
                  <h3>May 2013 - August 2015</h3>
                  <ul>
                    <li>Maintained the course with a variety of equipment</li>
                    <li>Completed tasks on a tight schedule</li>
                    <li>Worked together with teammates and managed time effectively</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h1 className="header">EDUCATION</h1>
            <div className="education container">
            <div className="present"></div>
              <div className="timeline"></div>
              <div className="info">
                <div className="title">
                  <span className="circle"></span>
                  <h2>Lighthouse Labs</h2>
                  <h4>Web Development Bootcamp</h4>
                  <img src={"/assets/LighthouseLabs.png"} />
                </div>
                <div className="description">
                  <h3>March 2017 - May 2017</h3>
                  <ul>
                    <li>A fully immersive program where students learn the foundations of web development</li>
                    <li>Made use of modern day technologies for web apps</li>
                    <li>Worked closely with classmates on projects and gained knowledge from local developers</li>
                  </ul>
                </div>
              </div>
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
