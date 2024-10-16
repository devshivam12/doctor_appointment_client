import React, { useContext, useState } from 'react'
import userImg from '../../assets/images/doctor-img01.png'
// import { authContext } from '../../context/AuthContext'

import MyBookings from './MyBookings'
import MySettings from './MySettings'

// import useFetchData from '../../hooks/useFetchData'
// import { BASE_URL } from '../../config'

import ComponentLoading from '../../component/helper/ComponentLoading'
import Error from '../../component/error/Error'
import { useGetAllDoctorQuery, useGetDoctorQuery } from '../../redux/api/api'
import SearchBar from './SearchBar'

const DoctorListPage = () => {

  // const { dispatch } = useContext(authContext)
  const [tab, setTab] = useState('bookings')

  const { data } = useGetAllDoctorQuery()
  console.log(data)


  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    })
  }

  // const { data: userData, loading, error } = useFetchData(`${BASE_URL}/user/profile/me`)


  return (
    // <section>
    //   <div className='max-w-[1170px] px-5 mx-auto'>

    //     {
    //       loading && !error && <ComponentLoading />
    //     }

    //     {
    //       error && !loading && <Error errorMsg={error} />
    //     }

    //     {
    //       !loading && !error && (
    //         <div className='grid md:grid-cols-3 gap-10'>
    //           <div className='pb-[50px] px-[30px] rounded-md'>
    //             <div className='flex items-center justify-center'>
    //               <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
    //                 <img
    //                   className='w-full rounded-full'
    //                   src={userData.photo} />
    //               </figure>
    //             </div>

    //             <div className="text-center mt-4">
    //               <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
    //                 {userData.name}
    //               </h3>
    //               <p className='text-textColor text-[15px] leading-6 font-medium'>
    //                 {userData.email}
    //               </p>
    //               <p className='text-textColor text-[15px] leading-6 font-medium'>
    //                 Blood Type : <span className='ml-2 text-headingColor text-[22px] leading-0'>{userData.bloodType}</span>
    //               </p>

    //             </div>

    //             <div className='mt-[50px] md:mt-[100px]'>
    //               <button
    //                 onClick={handleLogout}
    //                 className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
    //                 Logout
    //               </button>

    //               <button className='text-white w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md'>
    //                 Delete Account
    //               </button>
    //             </div>

    //           </div>

    //           <div className='md:col-span-2 md:px-[30px]'>
    //             <div>
    //               <button
    //                 onClick={() => setTab('bookings')}
    //                 className={` ${tab === "bookings" && 'bg-primaryColor font-normal text-white'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
    //                 My Bookings
    //               </button>

    //               <button
    //                 onClick={() => setTab('settings')}
    //                 className={` ${tab === "settings" && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
    //                 Profile Settings
    //               </button>
    //             </div>

    //             {
    //               tab === 'bookings' ? <MyBookings /> : <MySettings user={userData} />
    //             }
    //           </div>
    //         </div>
    //       )
    //     }
    //   </div>
    // </section>
    <section>
      <div className='w-full max-w-[1170px] px-5 mx-auto'>
        <SearchBar />
      </div>
    </section>
  )
}

export default DoctorListPage
