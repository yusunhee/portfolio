import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "pages/intro/Intro";
import Profile from "pages/profile/Profile";
import Career from "pages/career/Career";
import Portfolio from "pages/portfolio/Portfolio";
import Contact from "pages/contact/Contact";

class FullPage extends Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section ", destination);
  }

  afterLoad(origin, destination, direction) {
    console.log("after load ", destination);
    const { handlePageChange } = this.props;

    handlePageChange(destination.anchor);
  }

  render() {
    return (
      <div className="abs">
        <ReactFullpage
          anchors={["Intro", "Profile", "Career", "Portfolio", "Contact"]}
          scrollOverflow={true}
          navigation={true}
          navigationPosition={"left"}
          navigationTooltips={[
            "Intro",
            "Profile",
            "Career",
            "Portfolio",
            "Contact",
          ]}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <Intro />
                </div>
                <div className="section">
                  <Profile />
                </div>
                <div className="section">
                  <Career
                    isPageFocus={
                      !state.destination ||
                      state.destination.anchor === "Career"
                        ? true
                        : false
                    } //Career 페이지에 포커싱 되어있을때
                  />
                </div>
                <div className="section">
                  <Portfolio />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default FullPage;
