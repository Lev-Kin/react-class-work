import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/userAuth";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  if(!isAuth){
    return <Navigate to="/" />
  }
  return (<Outlet/>);
};
