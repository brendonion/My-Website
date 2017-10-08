import React, { Component } from 'react';

import Modal from './reusables/Modal.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownActive: false,
    }
    this.handleWidth = this.handleWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidth);
  }

  handleWidth() {
    this.setState({dropdownActive: false});
  }

  handleDropdown() {
    this.setState({dropdownActive: !this.state.dropdownActive});
  }

  handleNavigation(section) {
    document.getElementById(section).scrollIntoView();
    window.scroll(0, window.scrollY - 60);
    this.handleWidth();
  }

  render() {
    return (
      <div className="navbar">
        <button 
          id="dropdown-btn"
          className={this.state.dropdownActive ? "dropdown-btn active" : "dropdown-btn"}
          onClick={() => this.handleDropdown()}
        />
        <Modal
          button={document.getElementById('dropdown-btn')}
          closeModal={() => this.handleDropdown()}
          show={this.state.dropdownActive}
        >
          <div className="dropdown-menu container">
            <button onClick={() => this.handleNavigation('about')}>ABOUT</button>
            <button onClick={() => this.handleNavigation('experience')}>EXPERIENCE</button>
            <button onClick={() => this.handleNavigation('education')}>EDUCATION</button>
            <button onClick={() => this.handleNavigation('skills')}>SKILLS</button>
            <button onClick={() => this.handleNavigation('projects')}>PROJECTS</button>
          </div>
        </Modal>
        <div className="section-header">
          <button onClick={() => this.handleNavigation('about')}>ABOUT</button>
          <button onClick={() => this.handleNavigation('experience')}>EXPERIENCE</button>
          <button onClick={() => this.handleNavigation('education')}>EDUCATION</button>
          <button onClick={() => this.handleNavigation('skills')}>SKILLS</button>
          <button onClick={() => this.handleNavigation('projects')}>PROJECTS</button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Navbar
