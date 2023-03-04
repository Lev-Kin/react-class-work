import React from "react";
import { Outlet } from "react-router-dom";
import {AddToCartButton} from '../addToCartButton';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './index.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectName, login, logout } from "../../redux/slices/userAuth";


export const MainMenu = () => {
  const navigate = useNavigate();

  const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route;
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectName);

  const dispatch = useDispatch();
  const navigateToCart = () => navigate('/cart');
  const handleLogin = () => {
    if(isAuth){
        dispatch(logout());
    } else {
        dispatch(login());
    }
}



  return (
    <>
      <nav className={styles.wrapper}>
         <p className={styles.userName}>{isAuth ? userName : 'Please log in'}</p>
        {/* <NavLink  to='/login' className={activeClassName}>logout</NavLink> */}
        <button className={styles.route} onClick={handleLogin}>{isAuth ? 'Logout' : 'Login'}</button>
        <NavLink to='/contacts' className={activeClassName}>contacts</NavLink>
        <NavLink to='/' className={activeClassName}>shop</NavLink>
        <AddToCartButton handleClick={navigateToCart} size="s"/>
      </nav>
      <Outlet/>
    </>
  );
};
