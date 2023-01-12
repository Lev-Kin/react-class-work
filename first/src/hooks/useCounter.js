import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter === 0 ? counter : counter - 1);
  };

  return {counter, inc, dec};
};
