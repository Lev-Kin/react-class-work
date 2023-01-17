import React from "react";
import { UserInput } from "./components/user-input";
import { UserCard } from "./components/user-card";
import { UserList } from "./components/user-list";

export const App = () => {
  return (
    <>
      <UserInput />
      <UserList />
    </>
  );
};
