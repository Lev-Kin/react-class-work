import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/userAuth';


export const PrivateRoute = () => {
    const isAuth = useSelector(selectIsAuth);

    if (!isAuth) {
        return <Navigate to='/'/>
    }

    return (
       <Outlet/>
    )
};