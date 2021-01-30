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
                <p className="text">#스노우보드🏂</p>
                <p className="text">#여행✈️</p>
                <p className="text">#꽃🌼</p>
                <p className="text">#와인🍷</p>
                <p className="text">#커피☕</p>
                <p className="text">#초콜렛🍫</p>
              </diV>
            </div>
          </div>
          <div className="right-contents">
            <div className="main-title">About_Me</div>

            <div className="contents-text">
              <div className="text-a">
                <span>
                  <p className="title">📌열정과 노력</p>
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
                    정확히 파악하고 표현할 수 있는 노하우.{" "}
                  </b>
                  <br />
                  <br />
                  여러 분야에서 체험하며 느꼈고 그 와중에 자료를 모색해야 만이
                  커뮤니케이션을 원활히 할 수 있습니다.
                  <br />
                  <br />
                  <br />
                  <p className="title">📌 긍정과 꾸준함</p>
                  자신의 단점을 알기에 최선을 다하는 삶의 자세. 사람들과
                  친근하고 편하게 스며드는 장점. 모르는 건 끝까지 알아내고야
                  마는 집요함.
                  <br />
                  <br />
                  <b>
                    계획한 일을 끝까지 추진해 가는 적극성. 긍정적인 마음가짐으로
                    도전하며 포기하지 않는 근성. 거침없는 호기심과 꾸준한
                    자기계발에 대한 집념
                  </b>
                  이 바로 저의 장점입니다.
                </span>
              </div>
              <div className="text-b">
                <span>
                  <p className="title">📌 다양한 경험</p>
                  학창시절 및 사회 현장에서 맺었던 소중한 인연들과{" "}
                  <b>
                    촬영, 기획, 편집, 디자인 등 다방면의 경험들은 앞으로 해
                    나가야 할 작업들의 좋은 기반이 되었고, 그만큼 실수를 줄일 수
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
                  <br />
                  <br />
                  <br />
                  <p className="title">📌 건강한 취미활동</p>
                  주말에는 웹서핑을 즐길 줄 알며 인터넷과 갖가지 컴퓨터
                  활용능력을 가지고 있고, 때로는 길거리를 돌아다니면서 또는
                  서점에서 책 서핑을 하면서 정보를 얻습니다.
                  <br />
                  <br />각 브랜드들의 판촉활동과 홍보전략 디자인을 보기 위해
                  여러 장소 방문과 사람들을 만나고 여행을 하며 트렌드를 공부하고
                  느끼며 문화와 사회의 흐름을 읽어냅니다.{" "}
                  <b>
                    <br />
                    <br />더 나아가 좋은 아이디어가 발견되면 항상 메모하는 습관,
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
                <p className="title">📌열정과 노력</p>
                연구하고 노력하고 끊임없는 의문을 던지는 디자이너,{" "}
                <b>
                  문제 해결을 위해 고민할 줄 알고 그 문제를 해결할 줄 아는
                  능력을 키우는 것. 아마 이건 끝없는 노력을 통해서만 이루어질 수
                  있는 것
                </b>
                이라고 생각합니다.
                <br />
                <br />
                <b>
                  아이디어를 내고 컨셉을 고민하며, 소비자의 need와 want를 정확히
                  파악하고 표현할 수 있는 노하우.{" "}
                </b>
                <br />
                <br />
                여러 분야에서 체험하며 느꼈고 그 와중에 자료를 모색해야 만이
                커뮤니케이션을 원활히 할 수 있습니다.
                <br />
                <br />
                <br />
                <p className="title">📌 긍정과 꾸준함</p>
                자신의 단점을 알기에 최선을 다하는 삶의 자세. 사람들과 친근하고
                편하게 스며드는 장점. 모르는 건 끝까지 알아내고야 마는 집요함.
                <br />
                <br />
                <b>
                  계획한 일을 끝까지 추진해 가는 적극성. 긍정적인 마음가짐으로
                  도전하며 포기하지 않는 근성. 거침없는 호기심과 꾸준한
                  자기계발에 대한 집념
                </b>
                이 바로 저의 장점입니다.
              </span>
            </div>
            <div className="text-b">
              <span>
                <p className="title">📌 다양한 경험</p>
                학창시절 및 사회 현장에서 맺었던 소중한 인연들과{" "}
                <b>
                  촬영, 기획, 편집, 디자인 등 다방면의 경험들은 앞으로 해 나가야
                  할 작업들의 좋은 기반이 되었고, 그만큼 실수를 줄일 수 있는
                  한번 더 생각하는 신중함
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
                <br />
                <br />
                <br />
                <p className="title">📌 건강한 취미활동</p>
                주말에는 웹서핑을 즐길 줄 알며 인터넷과 갖가지 컴퓨터 활용능력을
                가지고 있고, 때로는 길거리를 돌아다니면서 또는 서점에서 책
                서핑을 하면서 정보를 얻습니다.
                <br />
                <br />각 브랜드들의 판촉활동과 홍보전략 디자인을 보기 위해
                  여러 장소 방문과 사람들을 만나고 여행을 하며 트렌드를 공부하고
                  느끼며 문화와 사회의 흐름을 읽어냅니다.{" "}
                <b>
                  <br />
                  <br />더 나아가 좋은 아이디어가 발견되면 항상 메모하는 습관,
                  스크랩하는 습관이 있으며 사물을 똑바로 바라볼 수 있는 냉철함
                </b>
                을 기르기 위해 노력하고 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
