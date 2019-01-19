import React from 'react';
import { Link } from 'react-scroll';
import github from '../images/GitHub.png';
import email from '../images/Email.svg';
import phone from '../images/Phone.svg';
const Footer = (props) => {
  return (
    <div className="footer blue">
      <h5 className="header">Brendan Walker 2018</h5>
      <div className="info container">
        <p className="link"><img src={phone} />250-857-2365</p>
        <p>
          <img src={email} />
          <a href={"mailto:brenny.walker@gmail.com"}>brenny.walker@gmail.com</a>
        </p>
        <p>
          <img className="github" src={github} />
          <a href="https://github.com/brendonion" target="_blank" rel="noopener noreferrer">brendonion</a>
        </p>
      </div>
      <Link className="up-btn" activeClass="active" to="about" spy smooth offset={-60} duration={500} />
    </div>
  )
}

export default Footer
