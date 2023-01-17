import React, { useState } from "react";

function hardCalculation() {
  console.log("hard calculation");
  return 0;
}

export const App = () => {
  let [counter, setCounter] = useState(() => hardCalculation());
  // let [obj, setObj] = useState({ a: 2, b: 100 });

  console.log("RENDER");

  const onClickHandler = () => {
    setCounter(counter - 1);
  };

  // const onClickHandler = () => {
  // setObj((prevObj) => ({ ...prevObj, a: 3}));
  // setObj({...obj, a: 2223});
  // };

  // const onClickHandler = () => {
  //   setTimeout(() => {
  //     const newCounter = counter - 1;
  //     console.log(newCounter);
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 2000);
  // };

  return (
    <>
      <h1>Counter</h1>
      <div> {counter} </div>
      <button onClick={onClickHandler}>-</button>
      <button>+</button>
    </>
  );
};
