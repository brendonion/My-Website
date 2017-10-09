import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer blue">
      <h5 className="header">Brendan Walker</h5>
      <div className="info container">
        <p><img src="/assets/Phone.png" />250-857-2365</p>
        <p>
          <img src="/assets/Email.png" />
          <a href={"mailto:brenny.walker@gmail.com"}>brenny.walker@gmail.com</a>
        </p>
        <p>
          <img className="github" src="/assets/GitHub.png" />
          <a href="https://github.com/brendonion" target="_blank">brendonion</a>
        </p>
      </div>
      <button onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0} className="up-btn" />
    </div>
  )
}

export default Footer
