import { useContext } from "react";
import AppContext from "./context";

const Component = () => {
  const { token } = useContext(AppContext);
  return <p>{token}</p>;
};

export { Component as default };
