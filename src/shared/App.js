import React, { Component } from "react";
import Header from "components/Header/Header";
import FullPage from "components/FullPage/FullPage";
import Launcher from "components/Launcher/Launcher";

import { connect } from "react-redux";
import { setAppState } from "store/modules/AppConfig";

const mapStateToProps = ({}) => ({});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSetTimeOut: false, //런쳐 화면 보여주기 위한 state 값
      showPageName: null, //현재 보여지는 페이지 저장
    };
  }

  componentDidMount() {
    const { setAppState } = this.props;
    setAppState(this.state); //App의 state 값을 저장
  }

  componentDidUpdate(prevProps, prevState) {
    const { setAppState } = this.props;

    if (this.state !== prevState) {
      setAppState(this.state);
    }
  }

  //현재 보여지는 페이지 이름 가지고 오는 method
  handlePageChange = (pageName) => {
    this.setState({
      showPageName: pageName,
    });
  };

  render() {
    const { isSetTimeOut, showPageName } = this.state;

    if (!isSetTimeOut) {
      setTimeout(() => {
        this.setState({ isSetTimeOut: true });
      }, 2000);
    }

    return (
      <div>
        {!isSetTimeOut && (
          <div style={{ width: "100%", height: "100%" }}>
            <Launcher />
          </div>
        )}
        {isSetTimeOut && (
          <div className="app-container">
            <FullPage
              className="full-page"
              handlePageChange={this.handlePageChange}
            />
            <Header showPageName={showPageName} />
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, { setAppState })(App);
