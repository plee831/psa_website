import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import resume from './images/resume.png';
import about_me from './images/gif.gif';
import about_name from './images/about_name.png';

class About extends Component {
  render() {
    return (
      <div id="about_background">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Link to="/">
          <img src={about_name} id="about_name" alt="title" />
        </Link>
        <div>
          <a href="https://www.instagram.com/psahns/">
            <i className="fa fa-instagram" id="instagram" />
          </a>
        </div>
        <div className="about_links">
          <Link to="/work" id="first_sub_header">
            Work
          </Link>
          <Link to="/contact" id="second_sub_header">
            Contact
          </Link>
        </div>
        <div>
          <img src={about_me} id="about_picture" alt="about_me" />
        </div>
        <div id="about_text">
          Peter Ahn is an artist and designer based in Los Angeles. He holds a
          BFA in Illustration from Art Center College of Design. In his spare
          time he enjoys visiting arboretums, tending to his cherry blossom
          tree, and dreams of being famous.
        </div>
        <div id="resume">
          <a href={resume} target="_blank">
            <i className="fa fa-registered" id="instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
