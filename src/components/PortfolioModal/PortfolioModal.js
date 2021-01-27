import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PortfolioModal extends Component {
  render() {
    const { show, toggle, portfolioInfo } = this.props;

    let contentsComp = portfolioInfo.contents.map((contents) => {
      return (
        <div>
          {contents}
          <br />
        </div>
      );
    });

    return (
      <div>
        <Modal contentClassName="custom-modal" isOpen={show} toggle={toggle}>
          {/* <ModalHeader toggle={toggle}>{portfolioInfo.title}</ModalHeader> */}
          <ModalBody>
            <img src={portfolioInfo.image} width="100%" height="auto" />
            <i className="close-btn" onClick={toggle}>
              X
            </i>
            <div className="sub-title-container">{portfolioInfo.subTitle}</div>
            <div className="title-container">{portfolioInfo.title}</div>
            <div className="contents-container">{contentsComp}</div>
            <div className="period-container">
              <div className="container-title">PERIOD</div>
              <div className="container-contents">{portfolioInfo.period}</div>
            </div>
            <div className="work-container">
              <div className="container-title">WORK</div>
              <div className="container-contents">{portfolioInfo.work}</div>
            </div>
            <div className="tool-container">
              <div className="container-title">TOOL</div>
              <div className="container-contents">{portfolioInfo.tool}</div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PortfolioModal;
