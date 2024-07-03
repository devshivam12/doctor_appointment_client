import React from 'react';
import { motion } from 'framer-motion'
import heroImage from '../../assets/images/hero-img01.png';
import heroImage2 from '../../assets/images/hero-img02.png';
import heroImage3 from '../../assets/images/hero-img03.png';
import aboutCarding from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='md:px-[2.7rem] lg:px-[5rem]'>
      <div className="container">
        <div className="flex items-start justify-between gap-[50px] lg:gap-[130px] xl:gap-[50px] flex-col lg:flex-row">

          {/* about img */}
          <div className="relative flex gap-[30px] justify-end z-10">

            <div>
              <img  
              loading='lazy' 
              src={heroImage} 
              className='w-full' 
              />
            </div>
            <div className='mt-[30px] flex flex-col gap-[30px]'>
              <img  
              loading='lazy' 
              src={heroImage2} 
              className='w-full' 
              />
              <img  
              loading='lazy' 
              src={heroImage3} 
              className='w-full' 
              />
            </div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ ease: "easeOut", duration: 3, repeat:Infinity, repeatType: "loop" }}
              className="absolute z-20 bottom-5 right-[30%] w-[200px] md:w-[300px] md:right-[50%]">
              <img  
              loading='lazy' 
              src={aboutCarding}  
              />
            </motion.div>
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 flex flex-col justify-around mt-[50px] lg:mt-0">
            <h2 className='heading'>
              Proud to be one of the nation best
            </h2>
            <p className='text_para'>
              Apollo Hospitals Enterprise Limited is an Indian multinational healthcare group headquartered in Chennai. It is the largest for-profit private hospital network in India, with a network of 71 owned and managed hospitals.. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero.
            </p>
            <p className='text_para mt-[30px]'>
              Out best is we something strive for each day, caring for out patient not lookin back at what we accomplish but toward what we can do tomorrow. Providing the best. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, esse?
            </p>
            <Link to='/'>
              <button className='btn'>
                Learn More
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
