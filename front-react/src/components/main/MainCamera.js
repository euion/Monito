import React from "react";
import CamButton from "../button/CameraBtn";
import { Link } from "react-router-dom";
import TopNav from "../nav/TopNav";

class MainCamera extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <Link to="/">
          <h1 style={{ textAlign: "center" }}>Monito</h1>
        </Link>
        <CamButton />
      </div>
    );
  }
}

export default MainCamera;
