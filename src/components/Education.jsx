import React from 'react';

const Education = (props) => {
  return (
    <div id="education" className="section">
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
  )
}

export default Education
