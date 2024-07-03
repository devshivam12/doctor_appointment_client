import React from 'react'
import faqImg from '../../assets/images/faq-img.png'

import { faqs } from '../../assets/data/faqs'
import FaqsCard from './FaqsCard'

const Faqs = () => {
    return (
        <section className='md:px-[2.7rem] lg:px-[5rem]'>
            <div className="container">
                <div className="flex justify-betweem gap-[50px] lg:gap-0">
                    <div className='w-1/2 hidden md:block'>
                        <img
                            loading='lazy'
                            src={faqImg}
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
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
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Faqs
