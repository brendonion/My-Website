import React from 'react';
import lighthouse from '../images/LighthouseLabs.png';
import udemy from '../images/Udemy.svg';

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
            <h2>Udemy</h2>
            <h4>Online Courses</h4>
            <img src={udemy} />
          </div>
          <div className="description">
            <h3>Since June 2017</h3>
            <ul>
              <li>An online platform with thousands of courses readily available</li>
              <li>Use it to compliment my work and to keep up with ever-changing technology</li>
              <li>Taken courses for C++, Jest, React Native, Golang, Sketch, and many more</li>
            </ul>
          </div>
        </div>
        <div className="info">
          <div className="title">
            <span className="circle"></span>
            <h2>Lighthouse Labs</h2>
            <h4>Web Development Bootcamp</h4>
            <img src={lighthouse} />
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
