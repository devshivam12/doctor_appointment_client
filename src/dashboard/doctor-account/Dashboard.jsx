import React, { useEffect, useState } from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import ComponentLoading from '../../component/helper/ComponentLoading'
import Error from '../../component/error/Error'
import Tabs from './Tabs'
import { IoIosInformationCircle } from "react-icons/io";
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from '../../pages/doctor/DoctorAbout'
import DoctorProfile from './DoctorProfile'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const { data, loading, error, fetchData } = useFetchData(`${BASE_URL}/doctor/profile/me`)
  // const [tab, setTab] = useState('overview')
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate()

  const handleClick = (tab) => {
    setActiveTab(tab)
  }

  const handleProfileUpdate = () => {
    setActiveTab('overview')
    navigate('/doctors/profile/me')
    fetchData()

    window.scrollTo({ top : 0, behavior : 'smooth'})
  }

  useEffect(() => {
    const urlTab = window.location.pathname.split('/')[3];
    console.log(urlTab)
    if (urlTab && ['overview', 'appointments', 'settings'].includes(urlTab)) {
      setActiveTab(urlTab)
    }
  }, [data])


  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <ComponentLoading />}
        {error && !loading && <Error />}

        {
          !loading && !error && (
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={activeTab} setTab={handleClick} />

              <div className='lg:col-span-2'>
                {
                  data.isApproved === 'pending' && (
                    <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg'>
                      <IoIosInformationCircle />

                      <span className='sr-only'>Info</span>

                      <div className="ml-3 text-sm font-medium">
                        To get approvel please complete your profile. We I'll review manually and approved within 3 Days
                      </div>

                    </div>
                  )
                }

                <div className='mt-8'>
                  {activeTab === "overview" && (
                    <div>
                      <div className='flex items-center gap-4 mb-10'>
                        <figure className='max-w-[200px] max-h-[200px]'>
                          <img
                            src={data?.photo} alt=""
                            className='w-full'
                          />
                        </figure>

                        <div>
                          <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                            {data.specialization}
                          </span>

                          <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-4'>
                            {data.name}
                          </h3>

                          <div className='flex items-center gap-[6px]'>
                            <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                              <img src={starIcon} alt="" />
                              {data.averageRating}
                            </span>

                            <span className='text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                              ({data.totalRating})
                            </span>
                          </div>

                          <p className='text_para font-[15px] lg:max-w-[390px] leading-6'>
                            {data?.bio}
                          </p>
                        </div>
                      </div>
                      <DoctorAbout
                        name={data.name}
                        qualifications={data.qualifications}
                        about={data.about}
                        experiences={data.experiences}
                      />
                    </div>
                  )}

                  {activeTab === "appointments" && (
                    <div>
                      Appointments
                    </div>
                  )}

                  {activeTab === "settings" && (
                    <DoctorProfile
                      doctorData={data}
                      onUpdateProfile={handleProfileUpdate}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Dashboard
