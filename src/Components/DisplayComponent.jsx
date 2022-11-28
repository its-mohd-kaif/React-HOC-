import React, { useContext } from "react";
import { noteContext } from "../App";

function DisplayComponent() {
  let user = useContext(noteContext);


  return (
    <div>
      <center>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Color</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {user.data.map((item, index) => (
              <tr key={index}>
                <td>{item.age}</td>
                <td>{item.hair.color}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default DisplayComponent;
