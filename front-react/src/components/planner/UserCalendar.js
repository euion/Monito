import React from "react";
import TopNav from "../nav/TopNav";
import UserCalendarBox from "./plannerBox/UserCalendarBox";
import DefaultFooter from "../nav/DefaultFooter";
class UserCalendar extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <UserCalendarBox />
        <DefaultFooter />
      </div>
    );
  }
}

export default UserCalendar;
