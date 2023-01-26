import React, { useState, useEffect, useMemo, useCallback } from "react";
import { UserInput } from "./components/user-input";
import { UserList } from "./components/user-list";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => setInputValue(value);
  // useEffect еще чтото

  const verifyHandler = useCallback(
    (userId) => {
      setUsers(
        users.map(({ verifind, ...user }) => ({
          ...user,
          verified: user.id === userId ? !verifind : verifind,
        }))
      );
    },
    [setUsers, users]
  );

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((data) => data.json())
      .then(({ data }) =>
        setUsers(data.map((user) => ({ ...user, verified: false })))
      );
  }, []);

  const filteredUsers = useMemo(
    () =>
      users.filter(
        ({ last_name, first_name }) =>
          last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
          first_name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, users]
  );

  console.log(users); //=========

  return (
    <div>
      <button
        style={{ marginLeft: "200px" }}
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>
      <UserInput onInputChange={onInputChange} value={inputValue} />
      <UserList users={filteredUsers} verifyHandler={verifyHandler} />
    </div>
  );
};
