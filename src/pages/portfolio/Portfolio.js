import React, { Component } from "react";

import profileImg01 from "../../images/sns_contents_banner03.png";
import profileImg02 from "../../images/medical_ad_banner01.png";
import profileImg03 from "../../images/event_page03.png";
import profileImg04 from "../../images/platform_banner02.png";
import profileImg05 from "../../images/wide_thumbnail01.png";
import profileImg06 from "../../images/detail_page01.png";
import profileImg07 from "../../images/platform_banner01.png";
import profileImg08 from "../../images/home_page01.png";
import profileImg09 from "../../images/promotion_banner02.png";
import profileImg10 from "../../images/event_page02.png";
import profileImg11 from "../../images/event_page01.png";
import profileImg12 from "../../images/screen_saver01.png";
import profileImg13 from "../../images/promotion_banner01.png";
import profileImg14 from "../../images/main_page01.png";
import profileImg15 from "../../images/popup_banner01.png";
import profileImg16 from "../../images/promotion_banner03.png";
import profileImg17 from "../../images/detail_page02.png";
import profileImg18 from "../../images/web_banner01.png";
import profileImg19 from "../../images/mobile_app01.png";

import profileImg100 from "../../images/sheet_paper01.png";
import profileImg101 from "../../images/catalog01.png";
import profileImg102 from "../../images/brochure01.png";
import profileImg103 from "../../images/calling_card01.png";
import profileImg104 from "../../images/calendar01.png";
import profileImg105 from "../../images/placard_banner01.png";
import profileImg106 from "../../images/x_banner01.png";
import profileImg107 from "../../images/cover_of_magazine01.png";
import profileImg108 from "../../images/brochure02.png";
import profileImg109 from "../../images/outdoor_advertising01.png";
import profileImg110 from "../../images/x_banner02.png";
import profileImg111 from "../../images/space_of_a_magazine01.png";

import profileImg112 from "../../images/trophy01.png";
import profileImg113 from "../../images/video_editing01.png";

import Pagination from "components/Pagination";
import PortfolioModal from "components/PortfolioModal/PortfolioModal";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArr: [
        //웹/모바일(device)
        {
          idx: 1,
          image: profileImg01,
          filterVal: "device", //웹/모바일(device), 편집디자인(edit), 기타(etc) 필터값
          subTitle: "SNS CONTENTS",
          title: "인스타그램 콘텐츠",
          period: "2020.05.01 - 09.01",
          work: "기획 참여 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "메이준뉴트리 건강식품",
            "프로모션 이벤트 및",
            "체험단 모집 등의 콘텐츠 배너",
          ],
          fontColor: "black",
        },
        {
          idx: 2,
          image: profileImg02,
          filterVal: "device",
          subTitle: "MEDICAL AD BANNER",
          title: "의료광고 배너",
          period: "2018.07.20 - 07.21",
          work: "누끼 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "이오스안과 치료 장비",
            "SNS&포털사이트 등의",
            "온라인 광고 배너",
          ],
          fontColor: "black",
        },
        {
          idx: 3,
          image: profileImg03,
          filterVal: "device",
          subTitle: "EVENT PAGE",
          title: "이벤트 페이지",
          period: "2019.01.21 - 01.25",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps",
          contents: [
            "드림성형외과 제휴 고객",
            "현대백화점/우리은행/반얀트리",
            "뉴스레터 이벤트 페이지",
          ],
          fontColor: "white",
        },
        {
          idx: 4,
          image: profileImg04,
          filterVal: "device",
          subTitle: "PLATFORM BANNER",
          title: "플랫폼 배너",
          period: "2018.08.01 - 08.01",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "드림성형외과 중국어권",
            "메디투안 디엔핑",
            "윤곽 수술 광고 배너",
          ],
          fontColor: "black",
        },
        {
          idx: 5,
          image: profileImg05,
          filterVal: "device",
          subTitle: "WIDE THUMBNAIL",
          title: "와이드 섬네일",
          period: "2018.07.09 - 07.12",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: ["드림성형외페이과", "네이버 브랜드검색", "와이드 썸네일"],
          fontColor: "black",
        },
        {
          idx: 6,
          image: profileImg06,
          filterVal: "device",
          subTitle: "DETAIL PAGE",
          title: "상세 페이지",
          period: "2019.05.21 - 05.24",
          work: "디자인",
          tool: "Ps / Ai",
          contents: ["메이준뉴트리", "자사몰 단독상품", "상세 페이지"],
          fontColor: "black",
        },
        {
          idx: 7,
          image: profileImg07,
          filterVal: "device",
          subTitle: "PLATFORM BANNER",
          title: "프로모션 배너",
          period: "2019.07.29 - 07.30",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "드림클리닉 중국어권",
            "알리바바 사이트",
            "여름 시즌 클리닉 광고 배너",
          ],
          fontColor: "black",
        },

        {
          idx: 8,
          image: profileImg08,
          filterVal: "device",
          subTitle: "HOME PAGE",
          title: "홈페이지",
          period: "2018.04.10 - 06.29",
          work: "로고&메인&서브페이지 등 디자인 및 퍼블리싱",
          tool: "Ps / Ai / Html / Css",
          contents: [
            "중기경영지원단의 홈페이지 전반",
            "로고&메인&서브페이지 등",
            "웹/모바일 디자인 및 퍼블리싱",
          ],
          fontColor: "black",
        },
        {
          idx: 9,
          image: profileImg09,
          filterVal: "device",
          subTitle: "PROMOTION BANNER",
          title: "프로모션 배너",
          period: "2019.05.21 - 05.24",
          work: "누끼&제품 렌더링 및 디자인",
          tool: "Ps / Ai",
          contents: ["메이준뉴트리", "자사몰 단독 이벤트", "롤링배너"],
          fontColor: "black",
        },
        {
          idx: 10,
          image: profileImg10,
          filterVal: "device",
          subTitle: "EVENT PAGE",
          title: "이벤트 페이지",
          period: "2017.10.09 - 10.18",
          work: "디자인",
          tool: "Ps / Ai",
          contents: [
            "이오스안과 홈페이지 리뉴얼 및",
            "수험생&대학생 할인 혜택",
            "이벤트 페이지",
          ],
          fontColor: "white",
        },
        {
          idx: 11,
          image: profileImg11,
          filterVal: "device",
          subTitle: "EVENT PAGE",
          title: "이벤트 페이지",
          period: "2019.9.25 - 9.27",
          work: "디자인",
          tool: "Ps / Ai",
          contents: [
            "드림성형외과 중국어권",
            "20주년 할인 혜택",
            "이벤트 페이지",
          ],
          fontColor: "black",
        },
        {
          idx: 12,
          image: profileImg12,
          filterVal: "device",
          subTitle: "SCREEN SAVER",
          title: "스크린세이버",
          period: "2018.10.23 - 10.25",
          work: "디자인",
          tool: "Ps / Ai",
          contents: [
            "드림성형외과 원내의",
            "모든 Pc/Dsktop 등에",
            "화면보호기",
          ],
          fontColor: "white",
        },
        {
          idx: 13,
          image: profileImg13,
          filterVal: "device",
          subTitle: "PLATFORM BANNER",
          title: "플랫폼 배너",
          period: "2018.08.01 - 08.01",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "드림성형외과 중국어권",
            "메디투안 디엔핑",
            "윤곽 수술 광고 배너",
          ],
          fontColor: "black",
        },
        {
          idx: 14,
          image: profileImg14,
          filterVal: "device",
          subTitle: "MAIN PAGE",
          title: "메인페이지",
          period: "2015.05.09 - 06.05",
          work: "디자인",
          tool: "Ps / Ai",
          contents: [
            "이오스안과 홈페이지의",
            "메인페이지 리뉴얼",
            "디자인 시안 2 version",
          ],
          fontColor: "white",
        },
        {
          idx: 15,
          image: profileImg15,
          filterVal: "device",
          subTitle: "POPUP BANNER",
          title: "팝업 배너",
          period: "2019.05.21 - 05.24",
          work: "누끼&제품 렌더링 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "메이준뉴트리 자사몰",
            "웹 페이지에 노출 되는",
            "그루비 광고 팝업 배너",
          ],
          fontColor: "black",
        },
        {
          idx: 16,
          image: profileImg16,
          filterVal: "device",
          subTitle: "PROMOTION BANNER",
          title: "프로모션 배너",
          period: "2015.05.01 - 05.25",
          work: "디자인 및 퍼블리싱",
          tool: "Ps / Ai",
          contents: ["메이준뉴트리", "자사몰 단독 이벤트", "시즌배너"],
          fontColor: "black",
        },
        {
          idx: 17,
          image: profileImg17,
          filterVal: "device",
          subTitle: "DETAIL PAGE",
          title: "상세 페이지",
          period: "2019.05.21 - 05.24",
          work: "누끼&제품 렌더링 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "메이준뉴트리",
            "온라인 및 홈쇼핑 상품",
            "소셜커머스 상세 페이지",
          ],
          fontColor: "black",
        },
        {
          idx: 18,
          image: profileImg18,
          filterVal: "device",
          subTitle: "WEB BANNER",
          title: "온라인 광고 배너",
          period: "2019.05.21 - 05.24",
          work: "누끼&모델 보정 및 디자인 후 리사이징",
          tool: "Ps / Ai",
          contents: [
            "온라인&웹 페이지에",
            "노출 되는 드림성형외과",
            "광고 배너",
          ],
          fontColor: "black",
        },
        {
          idx: 19,
          image: profileImg19,
          filterVal: "device",
          subTitle: "MOBILE APP",
          title: "모바일 앱",
          period: "2015.05.01 - 05.25",
          work: "디자인 및 퍼블리상",
          tool: "Ps / Ai",
          contents: [
            "이오스안과 방문 전",
            "비대면 자동접수와",
            "사전문진을 위한 앱",
          ],
          fontColor: "black",
        },
        //편집디자인(edit)
        {
          idx: 20,
          image: profileImg100,
          filterVal: "edit",
          subTitle: "SHEET PAPER",
          title: "광고 시트 배너",
          period: "2018.05.21 - 05.24",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: ["드림성형외과", "압구정 CGV", "광고 시트배너"],
          fontColor: "black",
        },
        {
          idx: 21,
          image: profileImg101,
          filterVal: "edit",
          subTitle: "CATALOG",
          title: "카달로그",
          period: "2020.04.13 - 04.15",
          work: "누끼 및 디자인",
          tool: "Ps / Ai",
          contents: ["메이준 스킨케어", "홈쇼핑 제품", "홍보/설명 카달로그"],
          fontColor: "black",
        },
        {
          idx: 22,
          image: profileImg102,
          filterVal: "edit",
          subTitle: "BROCHURE",
          title: "브로슈어/책자",
          period: "2017.11.06 - 01.16",
          work: "디자인",
          tool: "Ps / Ai",
          contents: [
            "이오스안과",
            "담당의사 약력 및 마이챠트",
            "책자/브로슈어",
          ],
          fontColor: "white",
        },
        {
          idx: 23,
          image: profileImg103,
          filterVal: "edit",
          subTitle: "LOGO/CALLING CARD",
          title: "로고/명함",
          period: "2018.04.02 - 04.06",
          work: "디자인",
          tool: "Ai",
          contents: ["경영 컨설팅 업체", "비즈마켓 LOGO CIBI", "로고/명함"],
          fontColor: "black",
        },
        {
          idx: 24,
          image: profileImg104,
          filterVal: "edit",
          subTitle: "CALENDAR",
          title: "스케줄 캘린더",
          period: "2019.09.23 - 10.16",
          work: "기획 및 디자인",
          tool: "Ps / Ai",
          contents: ["드림메디컬그룹", "2020년도", "탁상용 달력"],
          fontColor: "black",
        },
        {
          idx: 25,
          image: profileImg105,
          filterVal: "edit",
          subTitle: "PLACARD BANNER",
          title: "플래카드",
          period: "2018.06.11 - 06.11",
          work: "디자인",
          tool: "Ai",
          contents: [
            "중소기업개발원",
            "기업성장전략 컨퍼런스",
            "베트남 다낭 출장 플래카드",
          ],
          fontColor: "black",
        },
        {
          idx: 26,
          image: profileImg106,
          filterVal: "edit",
          subTitle: "X-BANNER",
          title: "X-배너",
          period: "2017.02.01 - 02.13",
          work: "누끼 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "이오스안과",
            "학회발표자료 및 이벤트",
            "원내 X배너/미니배너",
          ],
          fontColor: "black",
        },
        {
          idx: 27,
          image: profileImg107,
          filterVal: "edit",
          subTitle: "COVER OF MAGAZINE",
          title: "매거진 표지",
          period: "2019.04.03 - 04.10",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: ["드림성형외과", "태국 연예인 모델", "잡지 표지"],
          fontColor: "black",
        },
        {
          idx: 28,
          image: profileImg108,
          filterVal: "edit",
          subTitle: "BROCHURE",
          title: "브로슈어",
          period: "2019.03.18 - 03.21",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: ["드림성형외과", "강남구 의료관광센터", "홍보 브로슈어"],
          fontColor: "black",
        },
        {
          idx: 29,
          image: profileImg109,
          filterVal: "edit",
          subTitle: "OUTDOOR ADVERTISING",
          title: "와이드 스크린 옥외광고",
          period: "2019.01.28 - 02.08",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: ["드림성형외과", "압구정역/교대역", "지하철 옥외광고"],
          fontColor: "black",
        },
        {
          idx: 30,
          image: profileImg110,
          filterVal: "edit",
          subTitle: "X-BANNER",
          title: "X-배너",
          period: "2019.06.19 - 09.21",
          work: "누끼&모델 보정 및 디자인",
          tool: "Ps / Ai",
          contents: [
            "드림성형외과",
            "태국&중국 박람회",
            "성형모델 수술 전후 X배너",
          ],
          fontColor: "black",
        },
        {
          idx: 31,
          image: profileImg111,
          filterVal: "edit",
          subTitle: "SPACE OF A MAGAZINE",
          title: "매거진 지면 광고",
          period: "2016.09.11 - 09.20",
          work: "디자인",
          tool: "Ps / Ai",
          contents: ["이오스안과", "군인잡지 HIM", "라섹 홍보전단"],
          fontColor: "black",
        },
        //기타(etc) 필터값
        {
          idx: 32,
          image: profileImg112,
          filterVal: "etc",
          subTitle: "TROPHY",
          title: "상패",
          period: "2019.02.04 - 02.06",
          work: "디자인",
          tool: "Ai",
          contents: ["드림성형외과", "K-뷰티산업협회", "공식인증 병원 상패"],
          fontColor: "black",
        },
        {
          idx: 33,
          image: profileImg113,
          filterVal: "etc",
          subTitle: "VIDEO EDITING",
          title: "영상 기획/편집",
          period: "2019.02.18 - 03.18",
          work: "영상 기획/편집",
          tool: "Ps / Ai / Ae",
          contents: [
            "드림성형외과 리얼모델",
            "메이킹영상 스토리보드 및",
            "스튜디오촬영 컨셉 기획",
            "https://youtu.be/J2IlVyhSaFo",
          ],
          fontColor: "black",
        },
      ], //포트폴리오 전체 json
      filterPortfolioArr: [], //필터상태 포트폴리오 json
      showPortfolioArr: [], //한페이지에 보여줘야 할 json
      totalCount: 0, //이벤트 영상 전체 갯수
      activePage: 1, //active 된 페이지
      rowCount: 6, //화면에 보여줄 갯수
      portfolioModal: false, //포트폴리오 상세보기 모달 상태
      portfolioInfo: {}, //선택된 포트폴리오 정보
    };
  }

  componentDidMount() {
    const { portfolioArr, rowCount } = this.state;
    let _portfolioArr = portfolioArr.slice(0, rowCount);

    this.setState({
      filterPortfolioArr: portfolioArr,
      showPortfolioArr: _portfolioArr,
      totalCount: portfolioArr.length,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { filterPortfolioArr } = this.state;
    const { rowCount, activePage } = this.state;
    let offset = rowCount * activePage - rowCount;

    if (prevState.activePage !== activePage) {
      let _portfolioArr = filterPortfolioArr.slice(offset, offset + rowCount);
      this.setState({ showPortfolioArr: _portfolioArr });
    }
  }

  //필터 눌렀을때 처리되는 메소드
  handleOnFilterClick = (num) => {
    const { portfolioArr, rowCount } = this.state;
    let _portfolioArr = portfolioArr;
    let filterPortfolioArr = [];
    let filterPortfolioLength;

    if (num === 0) {
      filterPortfolioArr = _portfolioArr;
    } else if (num === 1) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "device"
      );
    } else if (num === 2) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "edit"
      );
    } else if (num === 3) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "etc"
      );
    }

    filterPortfolioLength = filterPortfolioArr.length;
    _portfolioArr = filterPortfolioArr.slice(0, rowCount);

    this.setState({
      filterPortfolioArr: filterPortfolioArr,
      showPortfolioArr: _portfolioArr,
      totalCount: filterPortfolioLength,
      activePage: 1,
    });
  };

  //페이지 변경될때 호출되는 메소드
  handleOnPageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };

  //모달창 상태 변경 메소드
  toggleModal = (idx) => {
    const { portfolioModal, showPortfolioArr } = this.state;
    let portfolioInfo = showPortfolioArr.find((elem) => elem.idx === idx); //선택 된 포트폴리오 정보 모달로 넘겨주기 위해

    this.setState({
      portfolioModal: !portfolioModal,
      portfolioInfo: portfolioInfo,
    });
  };

  render() {
    const { showPortfolioArr, portfolioModal, portfolioInfo } = this.state;
    const { totalCount, rowCount, activePage } = this.state;

    let filterList = ["전체", "웹/모바일", "편집디자인", "기타"];
    let filterComp = filterList.map((filter, idx) => {
      return (
        <div
          className="filter"
          onClick={() => {
            this.handleOnFilterClick(idx);
          }}
        >
          {filter}
        </div>
      );
    });

    let portfolioComp = (showPortfolioArr || []).map((portfolio, idx) => {
      return (
        <div>
          <div
            className="screen"
            onClick={() => this.toggleModal(portfolio.idx)}
          >
            <span />
            <span />
            <span />
            <span />
            <img src={portfolio.image} />
            <div className={"sub-title-container " + portfolio.fontColor}>
              {portfolio.subTitle}
            </div>
            <div className={"title-container " + portfolio.fontColor}>
              {portfolio.title}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="portfolio-container">
        <div className="filter-container brackets">{filterComp}</div>
        <div className="list-container">
          <div className="portfolio-list">{portfolioComp}</div>
          <Pagination
            onPageChange={this.handleOnPageChange}
            total={totalCount}
            rowCount={rowCount}
            currentPage={activePage}
          />
          {portfolioModal && (
            <PortfolioModal
              show={portfolioModal}
              toggle={this.toggleModal}
              portfolioInfo={portfolioInfo}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
