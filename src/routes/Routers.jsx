import React, { Suspense, lazy, Component } from 'react';
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
// import { useSelector } from 'react-redux';

const Routers = () => {
  // const location = useLocation();

  // const { user, role } = useSelector((state) => state.auth)

  // const isUser = user?.data


  return (
    <>

      <Suspense fallback={<div><LoadingGif /></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} /> */}
          <Route path='/login' element={  <Login />} />
          <Route path="/register" element={<Signup />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/services" element={<Service />} /> */}
          {/* <Route path='/user/profile/me' element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>} />

          <Route path='/doctor/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} /> */}

        </Routes>
      </Suspense>

    </>
  );
};

export default Routers;
