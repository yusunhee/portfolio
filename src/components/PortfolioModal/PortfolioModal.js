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
          <ModalBody className={portfolioInfo.fontColor}>
            <img src={portfolioInfo.image} width="100%" height="auto" />
            <span className="close-btn" onClick={toggle}>
              X
            </span>
            <div className="sub-title-container">{portfolioInfo.subTitle}</div>
            <div className="title-container">{portfolioInfo.title}</div>
            <div className="contents-container">{contentsComp}</div>
            <div className="period-container">
              <div className="container-title">작업기간</div>
              <div className="container-contents">{portfolioInfo.period}</div>
            </div>
            <div className="work-container">
              <div className="container-title">기여도</div>
              <div className="container-contents">{portfolioInfo.work}</div>
            </div>
            <div className="tool-container">
              <div className="container-title">작업 툴</div>
              <div className="container-contents">{portfolioInfo.tool}</div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PortfolioModal;