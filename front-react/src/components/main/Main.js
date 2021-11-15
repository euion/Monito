import React, {Component} from "react";
import { Link, Switch } from "react-router-dom";
import MainStartBtn from "../button/MainStartBtn";
import '../../css/Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
      <div className="Main1">하나뿐인 나의 학습메이트,</div>
      <div className="Main3">
        <b className="Main2">MONITO</b>와 함께 학습해보세요
      </div><br/>
      <div className="Main4">MONITO는 당신의 학습습관을 교정함과 동시에 다양한 피드백을 제공합니다.</div><br/>
      <MainStartBtn/>
      </div>
    );
  }
}

export default Main;
