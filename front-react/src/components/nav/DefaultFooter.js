import React from "react";
import "../../css/TopNav.css";

// DefaultFooter의 CSS는 TopNav에 같이작성하였음

class DefaultFooter extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <br />
        <p className="footer-title">MONITO</p>
        <p className="footer-txt">
          Copyright 20세기 사람들 All rights reserved
        </p>
      </div>
    );
  }
}

export default DefaultFooter;
