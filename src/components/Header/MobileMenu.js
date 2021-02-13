import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-menu-container">
        <input type="checkbox" id="menuicon" />
        <label for="menuicon">
          <span />
          <span />
          <span />
        </label>
        <div className="sidebar">
          <ReactFullpage
            render={({ state, fullpageApi }) => {
              return (
                <div className="side-menu-container">
                  <div
                    className="menu-text"
                    onClick={() => fullpageApi.moveTo(1, 0)}
                  >
                    INTRO
                  </div>
                  <div
                    className="menu-text"
                    onClick={() => fullpageApi.moveTo(2, 0)}
                  >
                    PROFILE
                  </div>
                  <div
                    className="menu-text"
                    onClick={() => fullpageApi.moveTo(3, 0)}
                  >
                    CAREER
                  </div>
                  <div
                    className="menu-text"
                    onClick={() => fullpageApi.moveTo(4, 0)}
                  >
                    PORTFOLIO
                  </div>
                  <div
                    className="menu-text"
                    onClick={() => fullpageApi.moveTo(5, 0)}
                  >
                    CONTACT
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default MobileMenu;