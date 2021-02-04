import React, { Component } from "react";
import Logo from "components/Header/Logo";
import Menu from "components/Header/Menu";
import SideNav from "components/Header/SideNav";
import MobileMenu from "components/Header/MobileMenu";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClickLogo = () => {};

  toggleModal = () => {
    this.setState({
      myInfoModalStatus: !this.state.myInfoModalStatus,
    });
  };

  render() {
    const { showPageName } = this.props;

    return (
      <div>
        <div className="abs header">
          {showPageName === "Intro" && <Logo />}
          <Menu showPageName={showPageName} />
          {showPageName !== "Portfolio" && (
            <SideNav showPageName={showPageName} />
          )}
        </div>
        <div className="abs mobile-header">
          <div className="page-name">{showPageName}</div>
          <div>
            <MobileMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
