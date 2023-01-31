import React from "react";
import { UserCard } from "../user-card";
import styles from "./index.module.css";

export const UserList = ({ users, verifyHandler }) => (
  <div className={styles.wrapper}>
    {users.map((props) => {
      return (
        <UserCard {...props} verifyHandler={verifyHandler} key={props.id} />
      );
    })}
  </div>
);
