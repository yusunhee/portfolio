import React, { Component } from "react";

class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-menu-container">
        <input type="checkbox" id="menuicon"></input>
        <label for="menuicon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div class="sidebar"></div>
      </div>
    );
  }
}

export default MobileMenu;
