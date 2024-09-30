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
import MyAccount from '../dashboard/user-account/MyAccount';
import Dashboard from '../dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../redux/reducers/auth';
import CheckAuth from '../component/common/checkAuth';
// import { useSelector } from 'react-redux';

const Routers = ({ isAuthenticate, user }) => {
  const location = useLocation();

  return (
    <>

      <Suspense fallback={<div><LoadingGif /></div>}>
        <Routes>
          <Route
            path="/"
            element={
              <CheckAuth isAuthenticate={isAuthenticate} user={user}>
                <Home />
              </CheckAuth>
            }
          />
          <Route
            path="/user/profile/me"
            element={
              <CheckAuth isAuthenticate={isAuthenticate} user={user}>
                <MyAccount />
              </CheckAuth>
            }
          />
          <Route
            path="/doctor/profile/me"
            element={
              <CheckAuth isAuthenticate={isAuthenticate} user={user}>
                <Dashboard />
              </CheckAuth>
            }
          />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Suspense>

    </>
  );
};

export default Routers;
