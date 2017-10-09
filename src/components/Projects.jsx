import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10,
      images: [
        {
          image: '/assets/RevvedUp.png',
          name: 'Revved Up',
          type: 'Web Application',
          description: 'An online vehicle bidding web app where dealers can bid on vehicle auctions, chat in realtime, and search for local wholesellers.',
          stack: 'React, Redux, Deepstream.io, Material UI, Node.js',
        },
        {
          image: '/assets/BallEscaper.png',
          name: 'Ball Escaper',
          type: 'Mobile Application',
          description: 'A simple game where you control a small ball with a virtual joystick and try to avoid other balls.',
          stack: 'React Native, Node.js',
        },
        {
          image: '/assets/BookingLogo.png',
          name: 'One Room Booking',
          type: 'Web Application',
          description: 'A small web app where users can book meetings for a single room in real time.',
          stack: 'React, Redux, Firebase, Material UI, Node.js',
        }, 
        {
          image: '/assets/hCore.png',
          name: 'hCORE',
          type: 'Web Application',
          description: 'A game where a random topic is generated and each player types a response related to that topic. Users can downvote their least favourite response to win.',
          stack: 'React, Websockets, MongoDB, Node.js',
        }
      ],
      selection: 0,
      show: false,
    }
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    let selection = this.state.selection;
    let images = this.state.images;
    if (seconds == 0) {
      seconds = 10;
      this.setState({seconds: seconds, selection: selection + 1, show: false});
    } else if (seconds == 1 && selection == images.length - 1) {
      seconds = 10;
      this.setState({seconds: seconds, selection: 0, show: false});
    } else {
      this.setState({seconds: seconds, show: true});
    }
  }

  handleRightArrow() {
    let selection = this.state.selection;
    let images = this.state.images;
    if (selection == images.length - 1) {
      this.setState({seconds: 10, selection: 0, show: false});
    } else {
      this.setState({seconds: 10, selection: selection + 1, show: false});
    }
  }

  handleLeftArrow() {
    let selection = this.state.selection;
    let images = this.state.images;
    if (selection == 0) {
      this.setState({seconds: 10, selection: images.length - 1, show: false});
    } else {
      this.setState({seconds: 10, selection: selection - 1, show: false});
    }
  }

  render() {
    let images = this.state.images;
    let selection = this.state.selection;
    return (
      <div id="projects" className="projects section">
        <h1 className="header">PROJECTS</h1>
        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
        {this.state.show &&
          <div className="container">
            <div className="project-carousel">
              <img src={images[selection].image} />
              <h2>{images[selection].name}</h2>
              <h3>{images[selection].type}</h3>
              <p>{images[selection].description}</p>
              <span>Tech Stack:</span>
              <p>{images[selection].stack}</p>
            </div>
          </div>
        }
        </CSSTransitionGroup>
        <div className="btn-container">
          <button className="left-arrow" onClick={() => this.handleLeftArrow()} />
          <button className="right-arrow" onClick={() => this.handleRightArrow()} />
        </div>
      </div>
    )
  }
}

export default Projects
