import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";
const ColorComponent = ({ fetchApi }) => {
  return (
    <div>
      <center>
        <h1>Color</h1>
        <button onClick={fetchApi}>Color Api</button>
        <hr></hr>
      </center>
    </div>
  );
};

export default HigherOrderComponent(
  ColorComponent,
  "https://dummyjson.com/users/filter?key=hair.color&value=Black"
);
