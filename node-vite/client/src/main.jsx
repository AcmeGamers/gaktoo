import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Style Files
import "./css/predefined.css";
import "./css/styles.css";
import "./css/predefined-query.css";
import "./css/styles-query.css";

// Components
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
