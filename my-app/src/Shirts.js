import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import shirts from './images/shirts.png';
import './App.css';

class Shirts extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={website_name} id="name_header" alt="title" />
        </Link>
        <div className="page_links">
          <Link to="/about" id="first_sub_header">
            About
          </Link>
          <Link to="/contact" id="second_sub_header">
            Contact
          </Link>
        </div>
        <div id="shirts">
          <img src={shirts} id="shirts_image" alt="shirts" />
        </div>
      </div>
    );
  }
}

export default Shirts;
