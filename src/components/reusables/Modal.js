import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

let modalTimeout = 200;
export default class Modal extends React.Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target != this.props.button) {
      this.props.closeModal();
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  render() {
    
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

