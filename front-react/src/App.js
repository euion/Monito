import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import MainCamera from "./components/main/MainCamera";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/MainCamera" element={<MainCamera />} />
      </Routes>
    </div>
  );
}

export default App;
