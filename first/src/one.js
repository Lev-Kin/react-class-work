import React, { useState } from "react";
import { Two } from "./two";

export const One = () => {
  console.log("RENDER ONE");
  return (
    <>
      <h1>One</h1>
      <Two />
    </>
  );
};
