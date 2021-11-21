import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../../css/Mypage.css";
import MypageBtn from "../button/MypageBtn";
import TopNav from "../nav/TopNav";
import Mypagebox from "./mypagebox/Mypagebox";


class UserPageMain extends React.Component {
  render() {
    return (
        <div>
            <TopNav />
            <div className="mypagemain">
              <Mypagebox/>
            </div>
        </div>
    )
  }
}

export default UserPageMain;