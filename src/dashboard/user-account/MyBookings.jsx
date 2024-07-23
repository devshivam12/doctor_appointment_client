import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import ComponentLoading from '../../component/helper/ComponentLoading'
import Error from '../../component/error/Error'
import DoctorCard from '../../component/shared/DoctorCard'

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/user/appointments/my-appointments`)
  return (
    <div>
      {loading && !error && <ComponentLoading />}

      {error && !loading && <Error errorMsg={error} />}

      {!loading && !error && (
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
         {
           appointments.map(doctor => (
               <DoctorCard doctor={doctor} key={doctor.id} />
             )
           )
         }
       </div>
      )}

      {
        !loading && !error && appointments.length === 0 && (
          <h2 className='text-headingColor leading-7 mt-5 text-center text-[20px] font-semibold'>You did not book any doctor yet!</h2>
        )
      }
    </div>
  )
}

export default MyBookings
