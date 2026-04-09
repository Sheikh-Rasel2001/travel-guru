import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Loading></Loading>
    }

    if(!user) {
        return <Navigate to='/auth/signUp' state={{ from: location }}></Navigate>
    }

    return children;
};

export default PrivateRoute;