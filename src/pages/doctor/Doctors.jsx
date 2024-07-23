import React, { useEffect, useState } from 'react'
import ComponentLoading from '../../component/helper/ComponentLoading'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../component/shared/DoctorCard'
import { motion } from 'framer-motion';
import Testimonials from '../../component/shared/Testimonials';

const Doctors = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className='bg-[#fff9ea]'>
        {isLoading ? (
          <ComponentLoading />
        ) : (
          <>
            <div className="container text-center">
              <h2 className='heading'>Find a Doctor</h2>
              <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                <input
                  type="text"
                  className='py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
                  placeholder='Search Doctor'
                />
                <button className='btn mt-0 rounded-[0px] rounded-r-md'>
                  Search
                </button>
              </div>
            </div>
            <section className="container px-[1rem] md:px-[2.7rem] lg:px-[5rem]">
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <DoctorCard doctor={doctor} />
                  </motion.div>
                ))}
              </div>
            </section>
            <Testimonials />
          </>
        )}
      </section>
    </>
  )
}

export default Doctors
