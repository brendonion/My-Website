import React from 'react';
import freshworks from '../images/Freshworks.png';
import TBooth from '../images/TBooth.png';

const Experience = (props) => {
  return (
    <div id="experience" className="section blue">
      <h1 className="header">EXPERIENCE</h1>
      <div className="experience container">
        <div className="present">PRESENT</div>
        <div className="timeline"></div>
        <div className="info">
          <div className="title">
            <span className="circle"></span>
            <h2>Freshworks Studio</h2>
            <h4>Junior Full Stack Web Developer</h4>
            <img src={freshworks} />
          </div>
          <div className="description">
            <h3>Since May 2017</h3>
            <ul>
              <li>Develop the front end of many projects using React and Redux</li>
              <li>Develop web APIs using NodeJS or Lumen</li>
              <li>Style page components to match designs as close as possible, as well as make the pages mobile friendly</li>
              <li>Discuss best practices with teammates in respect to file management and code maintainability</li>
              <li>Research and develop demo apps using latest technologies such as GraphQL, Blockchain, and Unity just to name a few</li>
            </ul>
          </div>
        </div>
        <div className="info">
          <div className="title">
            <span className="circle"></span>
            <h2>T-booth Wireless</h2>
            <h4>Sales Associate</h4>
            <img src={TBooth} />
          </div>
          <div className="description">
            <h3>July 2016 - March 2017</h3>
            <ul>
              <li>Sold phones and accessories in a personable way</li>
              <li>Kept up to date with the latest mobile technologies</li>
              <li>Performed outstanding customer service to every person who stopped by</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
