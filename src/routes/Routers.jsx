import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Home = lazy(() => import('../pages/Home'));
const Service = lazy(() => import('../pages/Service'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const Contact = lazy(() => import('../pages/Contact'));
const Doctors = lazy(() => import('../pages/doctor/Doctors'));
const DoctorDetails = lazy(() => import('../pages/doctor/DoctorDetails'));

import LoadingGif from '../component/helper/LoadingGif';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Routers = () => {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<div><LoadingGif /></div>}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/doctors" element={<PageWrapper><Doctors /></PageWrapper>} />
            <Route path="/doctors/:id" element={<PageWrapper><DoctorDetails /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/register" element={<PageWrapper><Signup /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Service /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default Routers;
