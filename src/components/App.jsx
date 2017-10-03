import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="section half">
            <div className="container">
              <img className="profile-pic" src="/assets/LighthouseProfile.jpg" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
