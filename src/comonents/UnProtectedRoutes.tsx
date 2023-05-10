
import { Outlet, Navigate } from 'react-router-dom';
import { selectAuth } from '../features/authSlice';
import { useSelector } from 'react-redux';

// const UnProtectedRoutes = ({children}: {children: any}) => {
const UnProtectedRoutes = () => {
    const { token } = useSelector(selectAuth);
    // console.log("Token:", token);
    // token ? console.log("Token T:", token):console.log("Token F:", token);
    // token !== undefined ? console.log("Token TT:", token):console.log("Token FF:", token);

    return token 
        ? <Navigate to="/dashboard" /> 
        : <Outlet />


};


export default UnProtectedRoutes