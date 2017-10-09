import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <CSSTransitionGroup
            transitionName="mounted"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
            transitionAppearTimeout={2000}
          >
            <About />
          </CSSTransitionGroup>
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
