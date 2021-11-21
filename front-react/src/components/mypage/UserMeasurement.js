import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../../css/Mypage.css";
import TopNav from "../nav/TopNav";
import UserMeasurementBox from "./mypagebox/UserMeasurementBox";
import UserMeasurementSidebar from "./mypagebox/UserMeasurementSidebar";


class UserMeasurement extends React.Component {
  render() {
    return (
        <div>
            <TopNav />
            <UserMeasurementSidebar/>
            <div className="usermeasurementtext">측정 결과 분석</div> 
            <UserMeasurementBox />
            <UserMeasurementBox />
        </div>
    )
  }
}

export default UserMeasurement;