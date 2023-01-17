import { useState } from "react";

export const useCounter = (amount = 1) => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + amount);
  };

  const dec = () => {
    setCounter(counter === 0 ? counter : counter - amount);
  };

  return { counter, inc, dec };
};
