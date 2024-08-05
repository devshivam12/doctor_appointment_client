import React, { useEffect, useState } from 'react'
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import ComponentLoading from '../../component/helper/ComponentLoading';
import Error from '../../component/error/Error';
import DoctorCard from '../../component/shared/DoctorCard'
import { motion } from 'framer-motion';
import Testimonials from '../../component/shared/Testimonials';
import { useAsyncError } from 'react-router-dom';

const Doctors = () => {

  const [query, setQuery] = useState('')
  const [debounc, setDebounce] = useState('')
  const [searching, setSearching] = useState(false)

  const handleSearch = () => {
    setQuery(query.trim())
  }

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctor?query=${debounc}`)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(query)
      setSearching(false)
    }, 1000)

    setSearching(true)
    return () => clearTimeout(timeout)

  }, [query])

  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type="search"
              className='py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search Doctor'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className='btn mt-0 rounded-[0px] rounded-r-md'
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="px-[1rem]">
        <div className="container">
          {loading || searching && <ComponentLoading />}

          {error && <Error />}

          {!loading && !error && !searching && (
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
          )}
          <Testimonials />
        </div>
      </section>

    </>
  )
}

export default Doctors
