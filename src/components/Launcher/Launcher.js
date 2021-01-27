import React, { Component } from "react";

class Launcher extends Component {
  render() {
    return (
      <div className="launcher-container">
        <div className="loading-container">
          <div className="bubble1 bubble"></div>
          <div className="bubble2 bubble"></div>
          <div className="bubble3 bubble"></div>
        </div>
        <div className="text">Loading</div>
      </div>
    );
  }
}

export default Launcher;
