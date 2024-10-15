import React, { Suspense, lazy, Component, useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Service = lazy(() => import('../pages/Service'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const Contact = lazy(() => import('../pages/Contact'));
const Doctors = lazy(() => import('../pages/doctor/Doctors'));
const DoctorDetails = lazy(() => import('../pages/doctor/DoctorDetails'));

import LoadingGif from '../component/helper/LoadingGif';
import Dashboard from '../dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../redux/reducers/auth';
import CheckAuth from '../component/common/checkAuth';
import Userprofile from '../dashboard/user-account/Userprofile';
import DoctorListPage from '../dashboard/user-account/DoctorListPage';
// import { useSelector } from 'react-redux';

const Routers = ({ isAuthenticate, user }) => {
  const location = useLocation();

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<CheckAuth isAuthenticate={isAuthenticate} user={user}><Home /></CheckAuth>} />

          <Route path="/login" element={
            <ProtectedRoute isAuthenticate={isAuthenticate} user={user}>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/user/find/doctor" element={
            <ProtectedRoute isAuthenticate={isAuthenticate} user={user}>
              <DoctorListPage />
            </ProtectedRoute>
          } />

          <Route path="/profile/:id" element={
            <ProtectedRoute isAuthenticate={isAuthenticate} user={user}>
              <Userprofile />
            </ProtectedRoute>
          } />

          <Route path="/doctor/profile/me" element={
            <ProtectedRoute isAuthenticate={isAuthenticate} user={user}>
              <Dashboard />
            </ProtectedRoute>
          } />

          {/* Add other routes as needed */}
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
