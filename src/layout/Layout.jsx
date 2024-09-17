import React, { useState, useEffect } from 'react';
import Header from '../component/header/Header';
import Routers from '../routes/Routers';
import Footer from '../component/footer/Footer';
import LoadingGif from '../component/helper/LoadingGif';

const Layout = () => {
  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (

    <div>
      <Header />
      <main>

        <Routers />

      </main>
      <Footer />
    </div>

  );
};

export default Layout;
