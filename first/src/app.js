import React, { useRef, useEffect, useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState("");
//   const inputRef = useRef();
const rerenderCounter = useRef(0);
const firstRender = useRef(false);


  useEffect(() => {
    if (firstRender.current) {
        console.log("UPDATE");
        rerenderCounter.current++;
        console.log(rerenderCounter.current);
    } else {
        console.log('MOUNT');
        firstRender.current = true;
    }    
  });

  // useEffect(() => {
  //     if (inputRef.current) {
  //         console.log('FOCUS!');
  //         inputRef.current.value;
  //     }
  // });

  return (
    <>
      <input
        value={inputVal}
        type="text"
        onChange={({ target: { value } }) => setInputVal(value)}
      />
      <br />
      <h1>RENDER COUNTER: {rerenderCounter.current}</h1>
      {/* <input type="number" ref={inputRef} /> */}
    </>
  );
};
