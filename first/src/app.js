import React, { useState, useEffect, useMemo } from "react";
import { UserInput } from "./components/user-input";
import { UserList } from "./components/user-list";

export const App = () => {
  const [users, setUsers] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => setInputValue(value);
  // useEffect еще чтото

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((data) => data.json())
      .then(({ data }) => setUsers(data));
  }, []);

  // const filteredOld = users.filter(
  //   ({ last_name, first_name }) =>
  //     last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
  //     first_name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  const filteredUsers = useMemo(() => {
    console.log('Use memo launch!');
    return users.filter(
      ({ last_name, first_name }) =>
        last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
        first_name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, users]);

  console.log("render");

  return (
    <div>
      <UserInput onInputChange={onInputChange} value={inputValue} />
      <UserList users={filteredUsers} />
    </div>
  );
};
