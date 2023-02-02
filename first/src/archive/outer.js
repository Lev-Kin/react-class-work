import React, { useState } from "react";
import { App } from "./app";

export const Outer = () => {
  const [isAppShown, setIsAppShown] = useState(true);

  return (
    <>
      <button onClick={() => setIsAppShown((prev) => !prev)}>toggle APP</button>
      {isAppShown && <App />}
    </>
  );
};
