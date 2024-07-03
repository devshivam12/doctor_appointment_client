import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../assets/data/services';
import { motion, useTransform } from 'framer-motion';


const Services = ({ sectionRef, scrollYProgress }) => {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNavigatorClick = (index) => {
        setCurrentCardIndex(index);
    };

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <>
            <motion.section
                ref={sectionRef}
                style={{
                    scale,
                }}
                className="py-12"
            >

                <div className="container mx-auto px-4 md:px-16">
                    <div className='xl:w-[670px] mx-auto mb-8 text-center'>
                        <h2 className='heading lg:text-5xl font-bold text-headingColor mb-4'>
                            Our medical services
                        </h2>
                        <p className='text-base lg:text-lg text-textColor'>
                            World-class care for everyone. Our health system offers unmatched, expert health care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                        {services.slice(currentCardIndex, currentCardIndex + 3).map((item, index) => (
                            <ServiceCard key={index} item={item} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-6">
                        {Array.from({ length: Math.ceil(services.length / 3) }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavigatorClick(index * 3)}
                                className={`w-5 h-5 mx-1 rounded-full ${currentCardIndex === index * 3 ? 'bg-primaryColor px-5 duration-100' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Services;
