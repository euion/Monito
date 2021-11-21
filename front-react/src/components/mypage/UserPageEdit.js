import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../../css/Mypage.css";
import MypageBtn from "../button/MypageBtn";
import TopNav from "../nav/TopNav";


class UserPageEdit extends React.Component {
  render() {
    return (
        <div>
            <TopNav />
            <div className = "mypageeditt">
              <div className="mypageedittext">개인 정보 수정</div>
              <div className="mypageedit"></div>
              <div className="mypageeditbtn1">
              <Link to="/UserPageMain">
                <button className="mypageeditbtn">적용</button>
              </Link>
              <Link to="/UserPageMain">
                <button className="mypageeditbtn">취소</button>
              </Link>
            </div>
            </div>
        </div>
    )
  }
}

export default UserPageEdit;