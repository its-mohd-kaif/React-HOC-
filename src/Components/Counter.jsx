import React, { useState } from 'react'
import "./Style.css"
function Counter() {
    const[count,setCount]=useState(0);
    const countHandler = () => {
        let tempValue = count+5;
        setCount(tempValue)
    }
  return (
    <div>
        <center>
            <h1>Counter</h1>
            <button onClick={countHandler}>Count</button>
            <h3>{count}</h3>
            <hr></hr>
        </center>
    </div>
  )
}

export default Counter