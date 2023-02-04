import React, { useState } from "react";
import { One } from "./one";

export const valContext = React.createContext();

export const App = () => {
  const [val, setVal] = useState("hi there again!");

  console.log("RENDER APP");

  return (
    <valContext.Provider value={val}>
      <h1>App</h1>
      <button onClick={() => setVal((prev) => prev + 1)}></button>
      <One />
    </valContext.Provider>
  );
};
