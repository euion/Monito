import React from "react";
import TopNav from "../nav/TopNav";
import UserPlannerBox from "./plannerBox/UserCalendarBox";
import DefaultFooter from "../nav/DefaultFooter";

class UserPlanner extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <UserPlannerBox />
        <DefaultFooter />
      </div>
    );
  }
}

export default UserPlanner;
