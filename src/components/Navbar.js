import React, { Component } from 'react';
import { Link } from 'react-scroll';

import Modal from './reusables/Modal';

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

  render() {
    const dpdown = typeof document !== 'undefined' ? document.getElementById('dropdown-btn') : <div></div>
    return (
      <div className="navbar">
        <button 
          id="dropdown-btn"
          className={this.state.dropdownActive ? "dropdown-btn active" : "dropdown-btn"}
          onClick={() => this.handleDropdown()}
        />
        <Modal
          button={dpdown}
          closeModal={() => this.handleDropdown()}
          show={this.state.dropdownActive}
        >
          <div className="dropdown-menu container">
            <Link className="link" activeClass="active" onClick={() => this.handleDropdown()} to="about" spy smooth offset={-60} duration={500}>ABOUT</Link>
            <Link className="link" activeClass="active" onClick={() => this.handleDropdown()} to="experience" spy smooth offset={-60} duration={500}>EXPERIENCE</Link>
            <Link className="link" activeClass="active" onClick={() => this.handleDropdown()} to="education" spy smooth offset={-60} duration={500}>EDUCATION</Link>
            <Link className="link" activeClass="active" onClick={() => this.handleDropdown()} to="skills" spy smooth offset={-60} duration={500}>SKILLS</Link>
            <Link className="link" activeClass="active" onClick={() => this.handleDropdown()} to="projects" spy smooth offset={-60} duration={500}>PROJECTS</Link>
          </div>
        </Modal>
        <div className="section-header">
          <Link className="link" activeClass="active" to="about" spy smooth offset={-60} duration={500}>ABOUT</Link>
          <Link className="link" activeClass="active" to="experience" spy smooth offset={-60} duration={500}>EXPERIENCE</Link>
          <Link className="link" activeClass="active" to="education" spy smooth offset={-60} duration={500}>EDUCATION</Link>
          <Link className="link" activeClass="active" to="skills" spy smooth offset={-60} duration={500}>SKILLS</Link>
          <Link className="link" activeClass="active" to="projects" spy smooth offset={-60} duration={500}>PROJECTS</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
