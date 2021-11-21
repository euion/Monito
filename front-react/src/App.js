import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import MainCamera from "./components/main/MainCamera";
import Login from "./components/login_signup/login";
import Signup from "./components/login_signup/signup";
import UserMeasurement from "./components/mypage/UserMeasurement";
import UserPageEdit from "./components/mypage/UserPageEdit";
import UserPageMain from "./components/mypage/UserPageMain";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/MainCamera" element={<MainCamera />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserMeasurement" element={<UserMeasurement/>} />
        <Route path="/UserPageEdit" element={<UserPageEdit/>} />
        <Route path="/UserPageMain" element={<UserPageMain/>} />
      </Routes>
    </div>
  );
}

export default App;
