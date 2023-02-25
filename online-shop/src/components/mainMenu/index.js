import React from "react";
import { Outlet } from "react-router-dom";
import { AddToCartButton } from "../addToCartButton";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import {
  selectIsAuth,
  selectName,
  login,
  logout,
} from "../../redux/slices/userAuth";
import { useDispatch, useSelector } from "react-redux";

export const MainMenu = () => {
  const navigate = useNavigate();
  const activeClassName = ({ isActive }) =>
    isActive ? styles.activeRoute : styles.route;
  const dispath = useDispatch();

  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectName);
  const navigateToCart = () => navigate("/cart");

  function handLogin () {
    if(isAuth){
      dispath(logout())
    } else {
      dispath(login())
    }
}

  console.log(isAuth);
  return (
    <>
      <nav className={styles.wrapper}>
        {isAuth && (
          <p className={styles.userName}>{isAuth ? userName : "Plz"}</p>
        )}
        {/* <NavLink  to='/login' className={activeClassName}>Login</NavLink> */}
        <button className={styles.route} onClick={handLogin}>
          {isAuth ? "Logout" : "Login"}
        </button>
        <NavLink to="/contacts" className={activeClassName}>
          contacts
        </NavLink>
        <NavLink to="/" className={activeClassName}>
          shop
        </NavLink>
        <AddToCartButton handleClick={navigateToCart} size="s" />
      </nav>
      <Outlet />
    </>
  );
};
