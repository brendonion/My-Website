import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);           
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target != this.props.button) {
      this.props.closeModal();
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  render() {
    document.addEventListener('mousedown', this.handleClickOutside);
    const modalTimeout = 200;
    return (
      <CSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={modalTimeout}
        transitionLeaveTimeout={modalTimeout}>
        {this.props.show &&
          <div ref={this.setWrapperRef}>
            { this.props.children }
          </div>
        } 
      </CSSTransitionGroup>
    )
  }
}

export default Modal
