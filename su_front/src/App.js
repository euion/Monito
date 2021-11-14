//import react from React;
import React from "react";
import MainComponent from "./components/MainScreen/MainComponent";
import CameraComponent from "./components/CameraScreen/CameraComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainComponent />} />
        <Route path="/cameraScreen" element={<CameraComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
