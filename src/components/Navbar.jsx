import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="section-header">
          <button>ABOUT</button>
          <button>EXPERIENCE</button>
          <button>EDUCATION</button>
          <button>SKILLS</button>
          <button>PROJECTS</button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Navbar
