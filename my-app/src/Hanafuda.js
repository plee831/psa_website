import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import hanafuda from './images/hanafuda.png';
import resume from './images/resume.png';
import './App.css';

class Hanafuda extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Link to="/">
          <img src={website_name} id="name_header" alt="title" />
        </Link>
        <div id="resume">
          <a href={resume} target="_blank">
            <i className="fa fa-registered" id="instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/psahns/">
            <i className="fa fa-instagram" id="instagram" />
          </a>
        </div>
        <div className="page_links">
          <Link to="/about" id="first_sub_header">
            About
          </Link>
          <Link to="/contact" id="second_sub_header">
            Contact
          </Link>
        </div>
        <div id="centered">
          <div id="surface_design_work_title">"Hanafuda"</div>
        </div>
        <div id="centered">
          <div id="surface_design_work_text">
            "Hanafuda is an intaglio print that represent memories of family
            gatherings. I have vivid recollections of my family members enjoying
            each others company and playing games of Go-Stop"
          </div>
        </div>
        <div id="centered">
          <div id="padding_top-50px">
            <img src={hanafuda} id="hyperdrive_image" alt="hanafuda" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hanafuda;
