import React, { useState, useEffect, memo } from 'react';
import Header from '../component/header/Header';
import Routers from '../routes/Routers';
import Footer from '../component/footer/Footer';

const Layout = ({ patientData, doctorData, isAuthenticate, user }) => {
  console.log(user)
  return (

    <div>
      <Header patientData={patientData} doctorData={doctorData} />
      <main>

        <Routers isAuthenticate={isAuthenticate} user={user} />

      </main>
      <Footer />
    </div>

  );
};

export default memo(Layout);
