import React, { createContext, useContext, useState } from "react";
import AgeComponent from "./Components/AgeComponent";
import ColorComponent from "./Components/ColorComponent";
import Counter from "./Components/Counter";
import DisplayComponent from "./Components/DisplayComponent";
import GenderComponent from "./Components/GenderComponent";

export const noteContext = createContext(useContext);

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ data, setData }}>
        <Counter />
        <AgeComponent />
        <ColorComponent />
        <GenderComponent />
        <DisplayComponent/>
      </noteContext.Provider>
    </div>
  );
}

export default App;
