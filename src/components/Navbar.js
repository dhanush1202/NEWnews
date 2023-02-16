import PropTypes from "prop-types";
import React, { Component } from "react";

import New from "./New";
import Newscom from "./Newscom";

export class Navbar extends Component {
  static propTypes = {};


  render() {
    return (
      <div className="bg-dark">
        <ul className="nav nav-tabs">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              NEWnews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Top news
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sports
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
