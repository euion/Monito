import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../../css/Mypage.css";
import TopNav from "../nav/TopNav";


class UserMeasurement extends React.Component {
  render() {
    return (
        <div>
            <TopNav />
            <div>측정 결과 분석</div>
        </div>
    )
  }
}

export default UserMeasurement;