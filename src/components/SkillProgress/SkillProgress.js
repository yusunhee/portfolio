import React, { Component } from "react";
import { Circle, Line } from "rc-progress";

class SkillProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPageFocus: false, //페이지가 포커스 되었을 때 true
      percent: 0, //progress 값
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { isPageFocus } = this.props;

    //Career 페이지가 띄워지고 state의 isPageFocus 값이 false 일때
    //Career 페이지가 띄워져을때
    if (!prevState.isPageFocus && isPageFocus) {
      this.increase();
      this.setState({
        isPageFocus: isPageFocus,
      });
    }

    //Career에서 다른 페이지로 이동했을때 나머지 값들 초기화
    if (prevState.isPageFocus && !isPageFocus) {
      this.setState({
        isPageFocus: false,
        percent: 0,
      });
    }
  }

  //progressbar 값 증가시키는 메소드
  increase = () => {
    const { percent } = this.state;
    const { percentVal } = this.props;
    const newPercent = percent + 1; //percent 값을 1씩 증가시켜 저장해놓는 변수

    if (newPercent >= percentVal + 1) {
      clearTimeout(this.tm); //timer를 clear함
      return;
    }
    this.setState({ percent: newPercent });
    this.tm = setTimeout(this.increase, 50); //0.05초 마다 호출
  };

  render() {
    const { percent } = this.state;
    const { color, contents } = this.props;

    const containerStyle = {
      width: "400px",
    };

    return (
      <div className="skill-progress-container" style={containerStyle}>
        <Line percent={percent} strokeWidth="1" strokeColor={color} />
        <div className="graph-contents">{contents}</div>
      </div>
    );
  }
}

export default SkillProgress;
