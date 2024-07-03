import React, { Suspense, lazy } from 'react'
import Home from '../pages/Home'
const Service = lazy(() => import('../pages/Service'))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const Contact = lazy(() => import('../pages/Contact'))
const Doctors = lazy(() => import('../pages/doctor/Doctors'))
const DoctorDetails = lazy(() => import('../pages/doctor/DoctorDetails'))

import LoadingGif from '../component/helper/LoadingGif'

import { Routes, Route } from 'react-router-dom'


const Routers = () => {
  return (
    <>
      <Suspense fallback={<div><LoadingGif /></div>}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:id' element={<DoctorDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Service />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Routers
