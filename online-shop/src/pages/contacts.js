import React, {useState} from "react";
import { selectAdress, selectPhone, changeCity } from "../redux/slices/contacts";
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles/contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const {street, city} = useSelector(selectAdress);
  const phone = useSelector(selectPhone);

  const [isEditting, setIsEditting] = useState(false);

  const handleCityChange = ({code, target: {value}}) => {
    if (code === 'Enter') {
      dispatch(changeCity(value));
      setIsEditting(false);
    }
  };

  const switchCityEdit = () => {
    setIsEditting(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Contacts</h2>
      
      <div className={styles.addres}>
        City:  {
          isEditting ? 
          <input className={styles.input} onKeyDown={handleCityChange} autoFocus/> 
          : <span onClick={switchCityEdit}>{city}</span>
        }        
      </div>
      <div className={styles.addres}>
        Street: <span>{street}</span>
      </div>
      <div className={styles.addres}>
        Telephone: <span>{phone}</span>
      </div>
    </div>
  );
};
