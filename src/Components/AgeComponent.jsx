import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const AgeComponent = ({fetchApi }) => {
  return (
    <div>
      <center>
        <h1>Age</h1>
        <button onClick={fetchApi} >Age Api</button>
        <hr></hr>
      </center>
    </div>
  );
}

export default HigherOrderComponent(AgeComponent,"https://dummyjson.com/users/filter?key=age&value=30")


