import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router';
//import Loading from '../pages/Loading';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivetRoute;