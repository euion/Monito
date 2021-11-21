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
import StudyGroup from "./components/StudyGroup/StudyGroup";
import StudyGroup1 from "./components/StudyGroup/StudyGroup1";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/MainCamera" element={<MainCamera />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserMeasurement" element={<UserMeasurement />} />
        <Route path="/UserPageEdit" element={<UserPageEdit />} />
        <Route path="/UserPageMain" element={<UserPageMain />} />
        <Route path="/StudyGroup" element={<StudyGroup />} />
        <Route path="/StudyGroup1" element={<StudyGroup1 />} />
      </Routes>
    </div>
  );
}

export default App;
