import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");

const element = (
  <Router>
    <App />
  </Router>
);

const container = document.getElementById("root");
ReactDOM.render(element, container);
