import React, { Component } from "react";
import emailjs from "emailjs-com";

import WorkspaceHwky from "components/Illustrations/WorkspaceHwky";

class Contact extends Component {
  //contact에서 submit 하면 email로 전송 하는 method
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "yusunhee", //service id
        "yusunhee_", //template id
        e.target,
        "user_RiBkZLrXNrRz2z4Y8ailp" //user id
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //메일 버튼 눌렀을때 클립보드에 복사
  copyStringToClipboard = (str) => {
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("e-mail이 복사되었습니다. ✿˘◡˘✿");
  };

  render() {
    return (
      <div className="contact-container">
        <div class="contact">
          <div id="container">
            <h2>contact</h2>
            <form action="#" id="contact_form" onSubmit={this.sendEmail}>
              <div class="name">
                <label for="name"></label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  id="name_input"
                  required
                />
              </div>
              <div class="email">
                <label for="email"></label>
                <input
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="email_input"
                  required
                />
              </div>
              <div class="subject">
                <label for="subject"></label>
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  id="subject_input"
                  required
                />
              </div>
              <div class="message">
                <label for="message"></label>
                <textarea
                  name="message"
                  placeholder="message"
                  id="message_input"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div class="submit">
                <input type="submit" value="submit" id="form_button" />
              </div>
            </form>
          </div>
        </div>

        <div className="image-area">
          <ul>
            <li>
              <div class="image">
                <WorkspaceHwky />
              </div>
              <div class="shadow"></div>
            </li>
          </ul>

          <div className="stats">
            <div>
              <a href="https://open.kakao.com/o/sjHGitPc" target="_blank">
                <i className="icon-bubbles box"> talk</i>
              </a>
            </div>
            <div>
              <i
                className="icon-drawer2 box"
                onClick={() =>
                  this.copyStringToClipboard("sunhee.yu18@gmail.com")
                }
              >
                {" "}
                mail
              </i>
            </div>
            <div>
              <a href="https://www.instagram.com/yusunheee/" target="_blank">
                <i className="icon-instagram box"> sns</i>
              </a>
            </div>
            <div>
              <a href="https://github.com/yusunhee" target="_blank">
                <i className="icon-github box"> git</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
