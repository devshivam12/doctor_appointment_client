import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import heroImage from '../assets/images/main-doctor.png';

import Expertise from '../component/shared/Expertise';
import About from '../component/shared/About';
const ServiceList = lazy(() => import('../component/shared/ServiceList'));
import Feature from '../component/shared/Feature';
import DoctorList from '../component/shared/DoctorList';
import Faqs from '../component/shared/Faqs';
import Testimonials from '../component/shared/Testimonials';

import Phone from '../assets/images/phone-call.png';
import Video from '../assets/images/video-chat.png';
import Comment from '../assets/images/comments.png';
import ComponentLoading from '../component/helper/ComponentLoading';

const Home = () => {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 2", "1.33 1"]
  })

  const controls = useAnimation();

  useEffect(() => {
    const rotateAnimation = async () => {
      while (true) {
        await controls.start({ rotate: 10, transition: { duration: 4, ease: 'linear' } });
        await controls.start({ rotate: -10, transition: { duration: 4, ease: 'linear' } });
      }
    };

    rotateAnimation();

    return () => controls.stop();
  }, [controls]);

  return (
    <>
      {/* ----hero section */}
      <section
        className="hero_section md:pt-[60px] md:px-[2.7rem] lg:px-[5rem] px-[1rem]"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[60px] items-center justify-between">
            {/* ----hero content */}
            <div className="lg:w-1/2">
              <div className="lg:w-[570px]">
                <h1 className="text-[26px] leading-[46px] text-headingColor font-[800] md:leading-[70px] md:text-[60px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic ea labore consectetur, impedit accusamus. Numquam aperiam laudantium accusamus cum.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>


              <div className="mt-[30px] lg:mt-[40px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para first-letter">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para first-letter">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para first-letter">Patient Satisfaction</p>
                </div>
              </div>
            </div>


            <div className="relative w-full lg:w-1/2 p-8 md:p-0 sm:flex justify-center items-center">
              <div className="relative aspect-square w-[100%] max-w-[500px] flex justify-center items-center">
                <img
                  src={heroImage}
                  loading='lazy'
                  className="absolute w-full h-full object-contain z-[10]" />

                <motion.div className="absolute w-[110%] h-[110%] bg-blue-50 opacity-90 rounded-full z-[1] flex items-center justify-center"
                  animate={controls}
                >

                  <motion.img
                   loading='lazy'
                    src={Phone}
                    className="w-[4rem] h-[4rem] md:w-[5rem] bg-white md:h-[5rem] rounded-full p-4 shadow-lg absolute -top-[30px] left-[20%]"
                  />

                  <motion.img
                   loading='lazy'
                    src={Comment}
                    className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] bg-white rounded-full p-4 shadow-lg absolute top-[40%] -left-[40px]"
                  />

                  <motion.img
                   loading='lazy'
                    src={Video}
                    className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] bg-white rounded-full p-4 shadow-lg absolute top-[30%] left-[90%]"
                  />

                </motion.div>

                <div className="absolute w-[85%] h-[85%] bg-blue-100 rounded-full opacity-80 z-[2]"></div>
                <div className="absolute w-[70%] h-[70%] border-solid border-2 border-white rounded-full z-[3]"></div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* hero section end */}

      <Expertise sectionRef={sectionRef} scrollYProgress={scrollYProgress} />

      {/* about section */}

      <About />

      <Suspense fallback={<ComponentLoading />}>
        <ServiceList sectionRef={sectionRef} scrollYProgress={scrollYProgress} />
      </Suspense>

      <Feature />

      <DoctorList />

      <Faqs />


      <Testimonials />


    </>
  );
};

export default Home;
