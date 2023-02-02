import React, { useState, useEffect, useMemo, useCallback } from "react";
import { UserInput } from "./components/user-input";
import { UserList } from "./components/user-list";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => setInputValue(value);


  const rawVerifyHandler = (userId) => {
    setUsers(
      (
        oldUsers
      ) =>
        oldUsers.map(({ verified, ...user }) => ({
          ...user,
          verified: user.id === userId ? !verified : verified,
        }))
    );
  };

  const verifyHandler = useCallback(rawVerifyHandler, [setUsers]);


  useEffect(() => {

    const handler = (event) => {
      if (event.code === 'Enter') {
        console.log('KEYDOWN!!!!!');
      }     
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((data) => data.json())
      .then(({ data }) =>
        setUsers(data.map((user) => ({ ...user, verified: false })))
      );
  }, [counter]);

  const filteredUsers = useMemo(() => {
    return users.filter(
      ({ last_name, first_name }) =>
        last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
        first_name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [users]);


  return (
    <div>
      <button
        style={{ marginLeft: "200px" }}
        onClick={() => setCounter({})}
      >
        FETCH DATA
      </button>
      <UserInput onInputChange={onInputChange} value={inputValue} />
      <UserList users={filteredUsers} verifyHandler={verifyHandler} />
    </div>
  );
};
