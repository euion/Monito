import React from "react";
import { Link, Switch } from "react-router-dom";
import LoginBtn from "../button/LoginBtn";
import "../../css/TopNav.css";

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <ul className="topnav-container">
          <ul>
            <Link to="/">로고 들어갈자리</Link>
          </ul>
          <ul className="topnav-middle-container">
            {/*스터디그룹~ 마이페이지까지는 어떤 기능이 있다기보다 링크 이동 버튼에 불과하므로 컴포넌트화 하지 않았음*/}
            <li>
              <Link to="/StudyGroupMain" className="link-text">
                스터디그룹
              </Link>
            </li>
            <li>
              <Link to="/UserCalendar" className="link-text">
                달력
              </Link>
            </li>
            <li>
              <Link to="/UserPlanner" className="link-text">
                플래너
              </Link>
            </li>
            <li>
              <Link to="/UserPageMain" className="link-text">
                마이페이지
              </Link>
            </li>
          </ul>
          <ul className="topnav-middle-container">
            <li>
              <LoginBtn />
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default TopNav;
