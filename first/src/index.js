import React from "react";
import ReactDOM from "react-dom/client";

const TEXT = "Hello word";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div id="one" className="smth">
      <h1>{TEXT}</h1>
      <h1>{Math.random > 0.5 ? "One" : "TWO"}</h1>
      <h1>{Math.random > 0.5 ? <hr /> : <img alt="some image" />}</h1>
      <hr />
      <p>bla bla</p>
      <label htmlFor="inp">click me</label>
      <input id="inp" type="text" />
    </div>
    <div id="two">Another div</div>
  </>
);
