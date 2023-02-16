// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import New from "./components/New";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Newscom from "./components/Newscom";

export default class App extends Component {
  f = "dhanush";
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <New />
        </div>
      </>
    );
  }
}
