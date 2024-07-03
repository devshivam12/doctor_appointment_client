import React, { useEffect, useState } from 'react';
import Loading from '../../assets/images/giphy1.webp';

const LoadingGif = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [countDown, setCountDown] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countDown < 100) {
        setCountDown(prevCountDown => prevCountDown + 1)
      }
      else {
        setIsLoading(false)
      }
    }, 30)

    const countDownInterval = setInterval(() => {
      setCountDown(prevCountDown => prevCountDown - 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(countDownInterval)
    }

  }, [countDown])
  return (
    <div className="loading-gif flex items-center justify-center h-screen">
      {isLoading ? (
        <>
          <img src={Loading} className="bg-transparent mix-blend-multiply" alt="Loading..." />
          <p className="text-4xl text-black absolute bottom-8">Loading... {countDown}</p>
        </>
      ) : null}
    </div>
  );
};

export default LoadingGif;
