import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { selectAuth } from '../features/authSlice';
import { useSelector } from 'react-redux';


const PrivateRoutes = () => {
    const { token } = useSelector(selectAuth);

    return token ? <Outlet /> : <Navigate to="/login" />
};



export default PrivateRoutes