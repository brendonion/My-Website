import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <CSSTransitionGroup
          transitionName="mounted"
          transitionAppear
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

export default App
