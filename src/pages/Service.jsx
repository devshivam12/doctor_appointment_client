import React, { useState, useEffect } from 'react'
import ComponentLoading from '../component/helper/ComponentLoading'
import { services } from '../assets/data/services'
import ServiceCard from '../component/shared/ServiceCard'

const Service = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='px-[1rem] md:px-[2.7rem] lg:px-[5rem]'>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {services.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Service
