import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const Eggs = () => {
  const { counter: eggs, inc, dec } = useCounter(10);

  return (
    <div>
      <img alt="kartinka" />
      <h1> Eggs </h1>
      <p>{eggs}</p>
      <ul>
        <li>
          <button onClick={dec}>-</button>
        </li>
        <li>
          <button onClick={inc}>+</button>
        </li>
      </ul>
    </div>
  );
};
