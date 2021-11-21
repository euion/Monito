import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/Mypage.css";

class Mypagebox extends React.Component {
    render() {
      return (
          <div>
            <div className="mypageboxflex">
              <div className="mypagebox">
                <div>개인 정보 수정</div>
                <Link to="/UserPageEdit">
                  <button className="mypageeditbtn">수정</button>
                </Link>
              </div>
              <div className="mypagebox">
                <div>측정 결과 분석</div>
                <Link to="/UserMeasurement">
                  <button className="mypageeditbtn">확인하기</button>
                </Link>
              </div>
            </div>
            <div className="mypageboxflex">
              <div className="mypagebox">
                <div>자세 및 심박수</div>
                  <button className="mypageeditbtn">설정</button>
              </div>
              <div className="mypagebox">
                <div>디데이 설정</div>
                  <button className="mypageeditbtn">설정</button>
              </div>
            </div>
          </div>
      )
    }
  }
  
  export default Mypagebox;