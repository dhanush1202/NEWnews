import PropTypes from "prop-types";
import React, { Component } from "react";

export class Newscom extends Component {
  static propTypes = {};
 
  render() {
    let { title, description, imgurl, newsurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: " 18rem", height: " 23rem", }}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target='_blank' className="btn btn-dark">
              Get full news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscom;
