import React, { Component } from "react";

class PortfolioPage extends Component {
  render() {
    return (
      <div style={{ background: "#123456" }} className="portfolio-container">
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
