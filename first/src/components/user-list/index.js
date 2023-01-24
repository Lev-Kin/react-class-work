import React from 'react';
import { UserCard } from '../user-card';
import styles from './index.module.css';

export const UserList = ({users}) => (
        <div className={styles.wrapper}>
            { users.map((props) => <UserCard {...props} />) }
        </div>
    );
