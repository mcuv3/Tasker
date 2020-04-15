import React from "react";

const Buttoms = (props) => {
  return (
    <div>
      <button onClick={props.update}>Update</button>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default Buttoms;
