import React, { Component } from "react";

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextState = {};

    return nextState;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="intro-container">
        <div className="intro-content">MEDIA ART &amp; WEBDESIGN</div>
      </div>
    );
  }
}

export default Intro;
