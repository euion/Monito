import React, { Component } from "react";
import "../../css/Main.css";
import MainCamera from "../main/MainCamera";
import { Link } from "react-router-dom";

class MainStartBtn extends Component {
  render() {
    return (
      <div>
        <Link to="/MainCamera">
          <button className="MainStartBnt">시작하기</button>
        </Link>
      </div>
    );
  }
}

export default MainStartBtn;
