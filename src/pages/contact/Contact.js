import React, { Component } from "react";

import WorkspaceHwky from "components/Illustrations/WorkspaceHwky";
import WorkingLatePukg from "components/Illustrations/WorkingLatePukg";
import Rpm6 from "components/Illustrations/Rpm6";

class Contact extends Component {
  copyToClipboard = () => {
    /* Get the text field */
    // let copyText = document.getElementById("myInput");
    let copyText = document.getElementsByClassName("zzz");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  };

  copyStringToClipboard = (str) => {
    // Create new element
    var el = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    // el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);
    alert("e-mail이 복사되었습니다. ✿˘◡˘✿");
  };

  render() {
    return (
      <div className="contact-container">
        <div class="contact">
          <div id="container">
            <h2>contact</h2>
            <form action="#" method="post" id="contact_form">
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
                  this.copyStringToClipboard("yusunhee_@naver.com")
                }
              >
                {" "}
                mail
              </i>
            </div>
            <div>
              <a href="https://www.instagram.com/yusunhee_/" target="_blank">
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
