import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  offset: "30px",
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider template={AlertTemplate} {...alertOptions}>
    <App />
  </AlertProvider>
);

reportWebVitals();
