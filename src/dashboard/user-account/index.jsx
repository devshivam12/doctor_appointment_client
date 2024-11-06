import React, { useContext, useEffect, useState } from 'react'
import userImg from '../../assets/images/doctor-img01.png'
// import { authContext } from '../../context/AuthContext'

import MyBookings from './MyBookings'
import MySettings from './MySettings'

// import useFetchData from '../../hooks/useFetchData'
// import { BASE_URL } from '../../config'

import ComponentLoading from '../../component/helper/ComponentLoading'
import Error from '../../component/error/Error'
import { useGetAllDoctorQuery, useGetDoctorQuery } from '../../redux/api/api'
import SearchBar from './common/SearchBar'
import Sidebar from './common/Sidebar'
import DoctorListing from './DoctorListing'

const DoctorListPage = () => {

  // const { dispatch } = useContext(authContext)
  const [tab, setTab] = useState('bookings')

  const [filterData, setFilterData] = useState({
    query: "",
    specialization: "",
    minRating: "",
    maxRating: "",
    minPrice: "",
    maxPrice: "",
    location: "",
    page: 1,
    limit: 10
  })

  const [loading, setLoading] = useState(false)

  const { data: doctorData, isLoading, isError, refetch } = useGetAllDoctorQuery(filterData)
  console.log("doctorData", doctorData)

  const updateFilter = (newFilter) => {
    setFilterData(prev => ({ ...prev, ...newFilter }))
  }

  useEffect(() => {
    refetch()
  }, [filterData, refetch])

  return (
    <div className='w-full max-w-[1270px] px-2 mx-auto mt-[3rem]'>
      <div className='w-full'>
        <SearchBar />
      </div>

      <div className='w-full mt-[3rem]'>
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-3 h-full">
            <Sidebar onFilterChange={updateFilter} />
          </div>

          <div className="col-span-9">
            {isLoading ? (
              <ComponentLoading />
            )
              : (
                <DoctorListing doctorData={doctorData} isLoading={isLoading} isError={isError} />

              )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default DoctorListPage
