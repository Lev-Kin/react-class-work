import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

export const Age = () => {
  const { counter: age, inc, dec } = useCounter();

  return (
    <>
      <hr />
      <h2> Ages counter </h2>
      <div>{age}</div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <hr />
    </>
  );
};
