import React from 'react';
import moment from 'moment';
import { Link } from 'react-scroll';
import github from '../images/GitHub.png';
import email from '../images/Email.svg';
import linkedin from '../images/Linkedin.svg';

const Footer = (props) => {
  return (
    <div className="footer blue">
      <h5 className="header">Brendan Walker {moment().year()}</h5>
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
      <Link className="up-btn" activeClass="active" to="about" spy smooth offset={-60} duration={500} />
    </div>
  )
}

export default Footer
