import React, { Component } from "react";
import profileImg from "../../images/profile_sh.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        {/* width 1145px 이상일때 보여줌 */}
        <div className="width-size-up">
          <div className="left-contents">
            <div className="profile-text">MEDIA ART &amp; WEBDESIGN</div>
            <div className="profile-contents">
              <pre className="hashtag">
                <img className="profile-img" src={profileImg} />
              </pre>
              <diV className="on-mouse">
                <p className="text">#이웃집토토로💜</p>
                <p className="text">#스노우보드🤍</p>
                <p className="text">#유바비💛</p>
                <p className="text">#커피💖</p>
                <p className="text">#초콜렛🤎</p>
              </diV>
            </div>
          </div>
          <div className="right-contents">
            <div className="main-title">About_Me</div>

            <div className="contents-text">
              <div className="text-a">
                <span>
                  연구하고 노력하고 끊임없는 의문을 던지는 디자이너,{" "}
                  <b>
                    문제 해결을 위해 고민할 줄 알고 그 문제를 해결할 줄 아는
                    능력을 키우는 것. 아마 이건 끝없는 노력을 통해서만 이루어질
                    수 있는 것
                  </b>
                  이라고 생각합니다.
                  <br />
                  <br />
                  <b>
                    아이디어를 내고 컨셉을 고민하며, 소비자의 need와 want를
                    제대로 표현할 수 있는 노하우.{" "}
                  </b>
                  그것은 책상에 가만히 앉아 고민만 하지 말고 직접 발로 뛰어야
                  한다는 것입니다.
                  <br />
                  <br />
                  그들이 필요한 것과 원하는 곳에 가보고 체험하고 느꼈고 그
                  와중에 자료를 모색해야 만이 커뮤니케이션을 원활히 할 수
                  있습니다.
                  <br />
                  <br />
                  학창시절 및 사회 현장에서 맺었던 작은 인연들과{" "}
                  <b>
                    다방면의 디자인 작업들과 촬영, 기획, 편집 등은 앞으로 해
                    나가야 할 작업들의 좋은 기반이 되었고 그만큼 실수도 줄일 수
                    있는 한번 더 생각하는 신중함
                  </b>
                  을 배우게 되었습니다.
                  <br />
                  <br />
                  이러한 경험을 거치면서 디자인 컨셉을 잡으면{" "}
                  <b>
                    모든 프로젝트가 완성되기까지 크리에이티브를 최상으로 이끌 수
                    있는 디자이너가 되겠다
                  </b>
                  는 목표를 가질 수 있었습니다.
                </span>
              </div>
              <div className="text-b">
                <span>
                  자신의 단점을 알기에 최선을 다하는 삶의 자세와 사람들과 쉽고
                  편하게 어울릴 수 있는 장점과 모르는 건 끝까지 알아내고야 마는
                  집요함.
                  <br />
                  <br />
                  <b>
                    계획한 일을 끝까지 추진해 가는 적극성, 포기를 모르는 삶에
                    대한 거침없는 호기심과 꾸준한 자기계발에 대한 집념
                  </b>
                  이 바로 저의 장점입니다.
                  <br />
                  <br />
                  주말에는 웹서핑을 즐길 줄 알며 인터넷과 갖가지 컴퓨터
                  활용능력을 가지고 있고 때로는 서점에서 책 서핑을 하고 정보를
                  얻습니다.
                  <br />
                  <br />각 브랜드들의 판촉활동과 홍보전략 디자인을 보기 위해
                  여러 장소와 사람들을 만나고 여행을 하며 트렌드를 공부하고
                  문화와 사회의 흐름을 읽어냅니다.{" "}
                  <b>
                    더 나아가 좋은 아이디어가 발견되면 항상 메모하는 습관,
                    스크랩하는 습관이 있으며 사물을 똑바로 바라볼 수 있는 냉철함
                  </b>
                  을 기르기 위해 노력하고 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* width 1144px 미만일때 보여줌 */}
        <div className="width-size-down">
          <div className="top-contents">
            <div className="profile-text">MEDIA ART &amp; WEBDESIGN</div>
            <img className="profile-img" src={profileImg} />
          </div>
          <div className="down-contents">
            <div className="main-title">Yusunhee_Portfolio.</div>
            <div className="contents-text">
              <span>
                연구하고 노력하고 끊임없는 의문을 던지는 디자이너, 문제 해결을
                위해 고민할 줄 알고 그 문제를 해결할 줄 아는 능력을 키우는 것.
                <br />
                아마 이건 끝없는 노력을 통해서만 이루어질 수 있는 것이라고
                생각합니다.
                <br />
                <br />
                아이디어를 내고 컨셉을 고민하며, 소비자의 need와 want를 제대로
                표현할 수 있는 노하우. 그것은 책상에 가만히 앉아 고민만 하지
                말고 직접 발로 뛰어야 한다는 것입니다.
                <br />
                <br />
                그들이 필요한 것과 원하는 곳에 가보고 체험하고 느꼈고 그 와중에
                자료를 모색해야 만이 커뮤니케이션을 원활히 할 수 있습니다.
                <br />
                <br />
                학창시절에 사회 현장에서 맺었던 작은 인연들 즉, 다방면의 디자인
                작업들과 촬영, 기획, 편집 등은 앞으로 해 나가야 할 작업들의 좋은
                기반이 되었고 그만큼 실수도 줄일 수 있는 한번 더 생각하는
                신중함을 배우게 되었습니다.
                <br />
                <br />
                이러한 경험을 거치면서 기발한 디자인 컨셉을 잡으면 모든
                프로젝트가 완성되기까지 사람과 소비자 간의 크리에이티브를
                최상으로 이끌 수 있는 디자이너가 되겠다는 목표를 가질 수
                있었습니다.
              </span>
              <span>
                자신의 단점을 알기에 최선을 다하는 삶의 자세와 사람들과 쉽고
                편하게 어울릴 수 있는 장점과 모르는 건 끝까지 알아내고야 마는
                집요함.
                <br />
                <br />
                계획한 일을 끝까지 추진해 가는 적극성, 포기를 모르는 삶에 대한
                거침없는 호기심과 꾸준한 자기계발에 대한 짐념이 바로 저의
                장점입니다.
                <br />
                <br />
                주말에는 웹서핑을 즐길 줄 알며 인터넷과 갖가지 컴퓨터 활용능력을
                가지고 있고 때로는 서점에서 책 서핑을 하고 정보를 얻습니다.
                <br />
                <br />각 브랜드들의 판촉활동과 홍보전략 디자인을 보기 위해
                대학로나 동대문에 나가 문화와 사회의 흐름을 읽어내고, 더 나아가
                좋은 아이디어가 발견되면 항상 메모하는 습관, 스크랩하는 습관이
                있으며 사물을 똑바로 바라볼 수 있는 냉철함을 기르기 위해
                노력하고 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
