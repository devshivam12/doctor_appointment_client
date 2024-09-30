import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const ProtectedRoute = ({ allowedRoles, children }) => {

    const { isAuthenticate, role } = useSelector((state) => state.auth)
    console.log(isAuthenticate)
    if (!isAuthenticate) {
        return <Navigate to='/login' replace />
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to='/unauthorized' replace />
    }
    return children

}

export default ProtectedRoute
