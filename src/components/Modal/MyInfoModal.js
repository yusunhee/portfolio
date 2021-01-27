import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isOpen, toggle } = this.props;
    
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>내 정보</ModalHeader>
          <ModalBody>내정보 내용</ModalBody>
          <ModalFooter><Button onClick={toggle}>닫기</Button></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Header;
