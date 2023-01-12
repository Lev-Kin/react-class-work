import React from "react";
import ReactDOM from "react-dom/client";
import { Age } from "./components/age";
import { Eggs } from "./components/eggs";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Age />
    <Eggs />
  </div>
);