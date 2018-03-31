import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          image: '/assets/Covault.png',
          name: 'Covault',
          type: 'Web Application',
          description: 'An asset management web app where brand users can invite other users, upload assets, create ad sets, and use those ad sets for co-op opportunities in which dealer users can make promotional campaigns.',
          stack: 'React, Redux, Jest, Enzyme, Video-React, React-Dropzone, Node.js',
        },
        {
          image: '/assets/SwiftEditor.png',
          name: 'Swift Editor',
          type: 'Web Application',
          description: 'A web app for writers to manage their work. Editor, owner, and associate users can chat in real time, send/pay invoices, review work in progress, and update job statuses using an intuitive interface.',
          stack: 'React, Redux, Pusher.js, Stripe, React-Bootstrap, Node.js',
        },
        {
          image: '/assets/RevvedUp.png',
          name: 'Revved Up',
          type: 'Web Application',
          description: 'An online vehicle bidding web app where dealers can bid on vehicle auctions, chat in real time, and search for local wholesellers.',
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
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div id="projects" className="projects section">
        <h1 className="header">PROJECTS</h1>
        <Carousel
          showIndicators={false}
          infiniteLoop
          autoPlay
          stopOnHover
        >
          {images.length && images.map((image, index) => (
            <div key={index} className="container">
              <div className="project-carousel">
                <img src={image.image} />
                <h2>{image.name}</h2>
                <h3>{image.type}</h3>
                <p>{image.description}</p>
                <span>Tech Stack:</span>
                <p>{image.stack}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Projects
