import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticate, user, children }) => {
    const location = useLocation();
    
    // Redirect if user is authenticated and tries to access login or register page
    if (isAuthenticate && (location.pathname === '/login' || location.pathname === '/register')) {
        return user?.role === 'patient' ? <Navigate to='/user/find/doctor' /> : <Navigate to='/doctor/profile/me' />;
    }

    // Redirect if user is not authenticated and trying to access protected routes
    if (!isAuthenticate && !location.pathname.includes('/login') && !location.pathname.includes('/register')) {
        return <Navigate to='/login' />;
    }

    // Additional role-based protection can go here

    return <>{children}</>; // Render child components if all checks pass
}

export default CheckAuth;

