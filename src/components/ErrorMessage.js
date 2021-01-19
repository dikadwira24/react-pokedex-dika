import React, { Component } from "react";
import "../styles/ErrorMessage.css";

export default class ErrorMessage extends Component {
  render() {
    if (this.props.errorCode === "404")
      return (
        <div className="errorMessage">
          <h3>
          Pokemon tidak ditemukan.
          </h3>
        </div>
      );
    else {
      return (
        <div className="errorMessage">
          <h3>Pokemon tidak ditemukan.</h3>
        </div>
      );
    }
  }
}
