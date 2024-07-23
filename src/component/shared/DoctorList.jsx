import React from 'react';
import { doctors } from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';
import { motion } from 'framer-motion';


const DoctorList = () => {
    return (
        <section className='px-[1rem] md:px-[2.7rem] lg:px-[5rem]'>
            <div className="container">
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center'>
                        Our great doctors
                    </h2>
                    <p className='text_para text-center'>
                        World-class care for everyone, Our health Systems offers unmatched, expert health care.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                {doctors.map((doctor, index) => (
                    <motion.div
                        key={doctor.id}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        
                    >
                        <DoctorCard doctor={doctor} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DoctorList;
