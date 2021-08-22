import React, { useReducer, useEffect } from "react";
import storage from "localforage";
import AppContext from "./context";
import Component from "./Component";

const update = (state, update) => update;

const App = () => {
  const [token, dispatchToken] = useReducer(update);

  useEffect(() => {
    storage.getItem("token").then((token) => {
      dispatchToken(token);
    });
  }, []);

  return (
    <AppContext.Provider value={{ token, dispatchToken }}>
      <Component />
    </AppContext.Provider>
  );
};

export default App;
