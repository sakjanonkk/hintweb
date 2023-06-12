import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Design from "./components/Design";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Design />
  </React.StrictMode>
);
