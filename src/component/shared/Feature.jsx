import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import featureImage from '../../assets/images/feature-img.png';
import videoIcon from '../../assets/images/video-icon.png';
import avatarIcon from '../../assets/images/avatar-icon.png';

const Feature = () => {
    return (
        <section className='md:px-[2.7rem] lg:px-[5rem]'>
            <div className="container">
                <div className="flex items-center justify-between flex-col lg:flex-row">

                    <div className='xl:w-[670px]'>
                        <h2 className='heading'>
                            Get virtual treatment
                        </h2>

                        <ul className='pl-4'>
                            <li className='text_para'>
                                1. Schedule the appointment directly.
                            </li>

                            <li className='text_para'>
                                2. Search for your physician here, and contact their office
                            </li>

                            <li className='text_para'>
                                3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                            </li>
                        </ul>

                        <Link to='/'>
                            <button className='btn'>
                                Learn More
                            </button>
                        </Link>
                    </div>

                    <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                        <motion.img
                            src={featureImage}
                            loading='lazy'
                            className='w-3/4'
                        />

                        <motion.div
                            className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-lg'
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                        >
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[6px] lg:gap-[3]'>
                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                                        Tue, 24
                                    </p>

                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                                        10:00
                                    </p>
                                </div>
                                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                                    <img loading='lazy' src={videoIcon} />
                                </span>
                            </div>

                            <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                                Consultation
                            </div>

                            <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                                <img loading='lazy' src={avatarIcon} />
                                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Shivam Mittal</h4>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Feature;
