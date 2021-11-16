import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginBtn extends React.Component {
  //버튼을 누르면 로그인 -> 로그아웃으로 바뀜 기능적인 면 구현 아직 안함
  constructor(props) {
    super(props);
    this.state = {
      isBtnOn: false,
    };
  }

  changeLoginbtn = () => {
    this.setState((state) => ({
      isBtnOn: !state.isBtnOn,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.changeLoginbtn}>
          <p>{this.state.isBtnOn ? "login/signup" : "logout"}</p>
        </button>
      </div>
    );
  }
}

export default LoginBtn;
