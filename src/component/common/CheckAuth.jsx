import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const CheckAuth = ({ isAuthenticate, user, children }) => {
    const location = useLocation()

    console.log(location.pathname, isAuthenticate)

    if (location.pathname === '/') {
        if (!isAuthenticate) {
            return <Navigate to='/login' />
        }
        else {
            if (user?.role === 'patient') {
                return <Navigate to='/user/find/doctor' />
            }
            else if (user?.role === 'doctor') {
                return <Navigate to='/doctor/profile/me' />
            }
        }
    }

    if (
        !isAuthenticate &&
        !(
            location.pathname.includes('/login') ||
            location.pathname.includes('/register')
        )) {
        return <Navigate to='/login' />
    }
    if (isAuthenticate &&
        (
            location.pathname.includes('/login') ||
            location.pathname.includes('/register')
        )
    ) {
        if (user?.role === 'patient') {
            return <Navigate to='/user/find/doctor' />
        }
        else if (user?.role === 'doctor') {
            return <Navigate to='/doctor/profile/me' />
        }
    }

    if (
        isAuthenticate &&
        user?.role !== 'patient' &&
        location.pathname.includes('patient')
    ) {
        return <Navigate to='/unauth-page' />
    }
    else if (
        isAuthenticate &&
        user?.role !== 'doctor' &&
        location.pathname.includes('doctor')
    ) {
        return <Navigate to='/unauth-page' />
    }

    return (
        <>
            {children}
        </>
    )
}

export default CheckAuth
