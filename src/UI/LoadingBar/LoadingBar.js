import React from "react";
import "./LoadingBar.scss";

const LoadingBar = (props) => {
  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  );
};

export default LoadingBar;
