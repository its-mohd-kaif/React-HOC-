import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const GenderComponent = ({fetchApi}) => {
  return (
    <div>
      <center>
        <h1>Gender</h1>
        <button onClick={fetchApi}>Gender Api</button>
        <hr></hr>
      </center>
    </div>
  );
};

export default HigherOrderComponent(
  GenderComponent,
  "https://dummyjson.com/users/filter?key=gender&value=male"
);
