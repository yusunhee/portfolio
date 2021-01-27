import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

let paginationItem = (page, onPageChange, active) => {
  return (
    <div
      key={"pagination" + page}
      className={classnames({ active: active }, "paginationItem")}
      onClick={() => onPageChange(page)}
    >
      {page}
    </div>
  );
};

let paginationItemList = (
  pagerPage,
  pagerCount,
  currentPage,
  onPageChange,
  totalPage
) => {
  let start = pagerCount * pagerPage - (pagerCount - 1);
  let end = pagerCount * pagerPage;
  let paginationItemList = [];

  for (let i = start; i <= end; i++) {
    if (i <= totalPage) {
      paginationItemList.push(
        paginationItem(i, onPageChange, i === currentPage)
      );
    }
  }

  return <div className="paginationItemList">{paginationItemList}</div>;
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.propsToState = this.propsToState.bind(this);
    this.prevNext = this.prevNext.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillMount() {
    this.propsToState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsToState(nextProps);
  }

  propsToState(props) {
    this.setState({
      ...props,
      totalPage: Math.ceil(props.total / props.rowCount),
      pagerPage: Math.ceil(props.currentPage / props.pagerCount),
    });
  }

  onPageChange(page) {
    this.props.onPageChange(page);
  }

  prevNext(type) {
    let pagerPage = this.state.pagerPage;
    switch (type) {
      case "prev":
        pagerPage -= 1;
        break;
      case "next":
        pagerPage += 1;
        break;
    }
    let page = this.state.pagerCount * (pagerPage - 1) + 1;
    this.onPageChange(page);
  }

  render() {
    return (
      <div className="pagination">
        <div
          //   style={this.state.pagerPage > 1 ? {} : { display: "none" }}
          className="pagination-prev"
          onClick={this.state.pagerPage > 1 ? () => this.prevNext("prev") : {}}
        >
          {"<"}
        </div>

        {paginationItemList(
          this.state.pagerPage,
          this.state.pagerCount,
          this.state.currentPage,
          this.onPageChange,
          this.state.totalPage
        )}
        <div
          className="pagination-next"
          onClick={
            this.state.pagerPage <
            Math.ceil(this.state.totalPage / this.state.pagerCount)
              ? () => this.prevNext("next")
              : {}
          }
        >
          {">"}
        </div>
      </div>
    );
  }
}
Pagination.propTypes = {
  currentPage: PropTypes.number,
  pagerCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
};
Pagination.defaultProps = {
  currentPage: 1,
  pagerCount: 5,
};

export default Pagination;
