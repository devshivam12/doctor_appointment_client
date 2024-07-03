import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const ServiceCard = ({ item }) => {
    return (
        <motion.div
            className='bg-white shadow-cardShadow rounded-lg py-6 px-4 lg:py-8 lg:px-6 text-center'
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex justify-center mb-4'>
                <img 
                loading='lazy'
                src={item.icon} 
                alt={item.name} 
                className='w-16 h-16' />
            </div>
            <h2 className='text-lg lg:text-xl font-bold text-headingColor mb-4'>
                {item.name}
            </h2>
            <p className='text-sm lg:text-base text-textColor mb-4'>
                {item.desc}
            </p>
            <div className='flex justify-center mt-6'>
                <Link to='/doctors' className='w-11 h-11 rounded-full border border-solid border-headingColor flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-5 h-5' />
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
