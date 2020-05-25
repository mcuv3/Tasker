import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStoreAuth from "./store/auth-store";
import configureStoreTasks from "./store/tasks-store";

configureStoreAuth();
configureStoreTasks();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
