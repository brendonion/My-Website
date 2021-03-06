import React from 'react';
import Carousel from 'nuka-carousel';
import covault from '../images/Covault.png';
import swifty from '../images/SwiftEditor.png';
import revved from '../images/RevvedUp.png';
import ball from '../images/BallEscaper.png';
import booking from '../images/BookingLogo.png';
import core from '../images/hCore.png';
import laser from '../images/LaserGuy.png';

const images = [
  {
    image: covault,
    name: 'Covault',
    type: 'Web Application',
    description: 'An asset management web app where brand users can invite other users, upload assets, create ad sets, and use those ad sets for co-op opportunities in which dealer users can make promotional campaigns.',
    stack: 'React, Redux, Jest, Enzyme, Video-React, React-Dropzone, Node.js',
  },
  {
    image: swifty,
    name: 'Swift Editor',
    type: 'Web Application',
    description: 'A web app for writers to manage their work. Editor, owner, and associate users can chat in real time, send/pay invoices, review work in progress, and update job statuses using an intuitive interface.',
    stack: 'React, Redux, Pusher.js, Stripe, React-Bootstrap, Node.js',
  },
  {
    image: revved,
    name: 'Revved Up',
    type: 'Web Application',
    description: 'An online vehicle bidding web app where dealers can bid on vehicle auctions, chat in real time, and search for local wholesellers.',
    stack: 'React, Redux, Deepstream.io, Material UI, Node.js',
  },
  {
    image: ball,
    name: 'Ball Escaper',
    type: 'Mobile Game',
    description: 'A simple game where you control a small ball with a virtual joystick and try to avoid other balls.',
    stack: 'React Native, Node.js',
  },
  {
    image: booking,
    name: 'One Room Booking',
    type: 'Web Application',
    description: 'A small web app where users can book meetings for a single room in real time.',
    stack: 'React, Redux, Firebase, Material UI, Node.js',
  }, 
  {
    image: core,
    name: 'hCORE',
    type: 'Web Game',
    description: 'A game where a random topic is generated and each player types a response related to that topic. Users can downvote their least favourite response to win.',
    stack: 'React, Websockets, MongoDB, Node.js',
  },
  {
    image: laser,
    name: 'Laser Guy',
    type: 'Unity Game',
    description: 'A classic platformer game made with the Unity engine. All the assets were made from scratch by yours truly.',
    stack: 'Unity, C#, PyxelEdit, Bfxr (sound effects), BeepBox (music)',
  }
];

const Projects = (props) => {
  const imageGroup = images.map((image, index) => {
    return (
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
    )
  });

  return (
    <div id="projects" className="projects section">
      <h1 className="header">PROJECTS</h1>
      {images.length > 0 && 
        <Carousel
          autoplay
          wrapAround
          dragging
          easing="easeCubic"
          edgeEasing="easeCubic"
          transitionMode="scroll"
          swiping
          pauseOnHover
          autoplayInterval={5000}
        >
          {imageGroup}
        </Carousel>
      }
    </div>
  )
}

export default Projects;
