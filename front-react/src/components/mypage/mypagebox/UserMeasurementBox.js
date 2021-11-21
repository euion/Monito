import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/Mypage.css";

class UserMeasurementBox extends React.Component {
    render() {
      return (
          <div className="usermeasurementbox">
              <div>스터디 1</div>
              <div>2021.11.21(일)</div>
              <div>학습시간 : 1:30:56</div>
              <div>표</div>
              <div>솔루션</div>
          </div>
      )
    }
  }
  
  export default UserMeasurementBox;