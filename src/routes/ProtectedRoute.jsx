import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const ProtectedRoute = ({ children, user, redirect = '/login', allowedRoles }) => {

    const { role } = useSelector((state => state.auth))

    if (!role) return <Navigate to={redirect} />
    const isAllowed = allowedRoles.includes(role)
    return isAllowed ? children : <Navigate to={redirect} />
    
}

export default ProtectedRoute
