import React from "react";
import verifyImg from "./icon.png";
import styles from "./index.module.css";

export const UserCard = React.memo(
  ({ avatar, first_name, last_name, verified, verifyHandler, id }) => {
    console.log("RENDER", id);
    (
      <div className={styles.wrapper}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <h3 className={styles.header}>{last_name}</h3>
        <p className={styles.label}>{first_name}</p>
        {verified ? (
          <img className={styles.verify} src={verifyImg} />
        ) : (
          <button
            className={styles.verifyButton}
            onClick={() => verifyHandler(id)}
          >
            verify
          </button>
        )}
      </div>
    );
  }
);
