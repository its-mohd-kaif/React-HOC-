import { useContext } from "react";
import { noteContext } from "../App";

const HigherOrderComponent = (Component, url) => {
  const HOC = () => {
    let user = useContext(noteContext);
    const fetchApi = () => {
      fetch(url)
        .then((response) => response.json())
        .then((val) => {
          user.setData(val.users);
        });
    };

    return <Component fetchApi={fetchApi} />;
  };
  return HOC;
};

export default HigherOrderComponent;
