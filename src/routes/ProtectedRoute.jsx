import React, { useContext } from 'react'
// import { authContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const ProtectedRoute = ({ children, allowedRoles }) => {
    // const { token, role } = useContext(authContext)

    if(!token){
        return <Navigate to='/login' replace={true} />;
    }

    const isAllowed = allowedRoles.includes(role);
    const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />
    
    return accessibleRoute
}

export default ProtectedRoute
