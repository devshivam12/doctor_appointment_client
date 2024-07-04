import React from 'react'
import faqImg from '../../assets/images/faq-img.png'

import { motion } from 'framer-motion'

import { faqs } from '../../assets/data/faqs'
import FaqsCard from './FaqsCard'

const Faqs = () => {
    return (
        <section className='md:px-[2.7rem] lg:px-[5rem] px-[1rem]'>
            <div className="container">
                <div className="flex justify-betweem gap-[50px] lg:gap-0">
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='w-1/2 hidden md:block'>
                        <img
                            loading='lazy'
                            src={faqImg}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transitionDelay : 2000 }}
                        className='w-full md:w-1/2'>
                        <h2 className='heading'>
                            Most questions by our beloved patients
                        </h2>

                        <ul className='mt-[38px]'>
                            {
                                faqs.map((item, index) => (
                                    <FaqsCard item={item} key={index} />
                                ))
                            }
                        </ul>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default Faqs
