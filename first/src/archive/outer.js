import React, { useState } from "react";
import { App } from "./app";

export const Outer = React.memo(() => {
  const [isAppShown, setIsAppShown] = useState(true);

  return (
    <>
      <button onClick={() => setIsAppShown((prev) => !prev)}>toggle APP</button>
      {isAppShown && <App />}
    </>
  );
}, (prevProps, nextProps) => {
  if () {}
  return 
})
