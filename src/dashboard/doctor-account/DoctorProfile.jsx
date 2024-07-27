import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadCloudinary from '../../utils/uploadCloudinary'
import { json, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL, token } from '../../config'
import HashLoader from 'react-spinners/HashLoader'

const DoctorProfile = ({ doctorData,onUpdateProfile }) => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '' }],
    experiences: [{ startingDate: '', endingDate: '', position: '', hospital: '' }],
    timeSlots: [{ day: '', startingTime: '', endingTime: "" }],
    about: "",
    photo: null
  })

  const [error, setError] = useState({})
  const [loadingFile, setLoadingFile] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  useEffect(() => {
    if (doctorData) {
      setFormData({
        ...doctorData,
        photo: doctorData?.photo || null
      })
    }
  }, [doctorData])

  const validateForm = () => {
    const newError = {}

    if (!formData.name) newError.name = "Name field is required";

    if (!formData.phone) newError.phone = "Phone field is required"

    if (!formData.bio) newError.bio = "Bio field is required"

    if (!formData.gender) newError.gender = "Gender field is required"

    if (!formData.specialization) newError.specialization = "specialization field is required"

    if (!formData.ticketPrice) newError.ticketPrice = "Ticket price required"

    if (!formData.about) newError.about = "About field is required"

    if (formData.qualifications.some(q => !q.startingDate || !q.endingDate || !q.degree || !q.university)) {
      newError.qualifications = "All qualifications fields are required"
    }

    if (formData.experiences.some(e => !e.startingDate || !e.endingDate || !e.position || !e.hospital)) {
      newError.experiences = "All experience fields is required"
    }

    if (formData.timeSlots.some(t => !t.day || !t.startingTime || !t.endingTime)) {
      newError.timeSlots = "All time slots are required"

    }
    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]

    if (file) {
      setLoadingFile(true)

      try {
        const data = await uploadCloudinary(file)
        setFormData({ ...formData, photo: data?.url })
        setLoadingFile(false)
      } catch (error) {
        toast.error("Failed to upload file")
        setLoadingFile(false)
      }
    }

  }

  const updateProfileHandler = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)

    if (!validateForm()) {
      setLoadingSubmit(false)
      return
    };

    try {
      const res = await fetch(`${BASE_URL}/doctor/${doctorData._id}`, {
        method: 'PUT',
        headers: {
          'content-type': "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (!res.ok) {
        throw Error(result.message)
      }

      toast.success(result.message)
      onUpdateProfile()
      setLoadingSubmit(false)
    } catch (error) {
      toast.error(error.message)
      setLoadingSubmit(false)
    }

  }

  // reusable function for adding items 

  const addItem = (key, item) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }))
  }

  // reusable input change function 

  const handleReusableInputChange = (key, index, e) => {
    const { name, value } = e.target

    setFormData(prevFormData => {
      const updateItems = [...prevFormData[key]]

      updateItems[index][name] = value

      return {
        ...prevFormData,
        [key]: updateItems
      }
    })
  }

  // reusable delete function 

  const deleteItem = (key, index) => {
    setFormData(prevItem => ({ ...prevItem, [key]: prevItem[key].filter((_, i) => i !== index) }))
  }

  const addQualifications = (e) => {
    e.preventDefault();

    addItem('qualifications', {
      startingDate: '', endingDate: '', degree: '', university: ''
    })
  }

  const handleQualificationChange = (e, index) => {
    handleReusableInputChange("qualifications", index, e)
  }

  const addExperience = (e) => {
    e.preventDefault();

    addItem('experiences', {
      startingDate: '', endingDate: '', position: '', hospital: ''
    })
  }

  const handleExperienceChange = (e, index) => {
    handleReusableInputChange('experiences', index, e)
  }

  const addTimeslote = (e) => {
    e.preventDefault()

    addItem('timeSlots', {
      day: '', startingTime: '', endingTime: ""
    })
  }

  const handleTimeslotsChange = (e, index) => {
    handleReusableInputChange('timeSlots', index, e)
  }

  const handleDelete = (key, index) => {

    deleteItem(key, index)

  }
  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
        Profile Information
      </h2>

      <form>
        <div className='mb-5'>
          <p className='form_label'>Name*</p>
          <input
            type="text"
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Full name'
            className='form_input'
          />
          {error.name && <p className='text-red-400'>{error.name}</p>}
        </div>

        <div className='mb-5'>
          <p className='form_label'>Email</p>
          <input
            type="text"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='form_input'
            readOnly
            aria-readonly="true"
            disabled
          />
        </div>

        <div className='mb-5'>
          <p className='form_label'>Phone*</p>
          <input
            type="number"
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            className='form_input'
          />
          {error.phone && <p className='text-red-400'>{error.phone}</p>}

        </div>

        <div className='mb-5'>
          <p className='form_label'>Bio*</p>
          <input
            type="text"
            name='bio'
            value={formData.bio}
            onChange={handleInputChange}
            className='form_input'
            maxLength={100}
          />
          {error.bio && <p className='text-red-400'>{error.bio}</p>}

        </div>

        <div className='mb-5'>
          <div className='grid grid-cols-3 gap-5 mb-[30px]'>
            <div>
              <p className='form_label'>
                Gender*
              </p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className='form_input py-3.5'
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {error.gender && <p className='text-red-400'>{error.gender}</p>}

            </div>

            <div className='mb-5'>
              <p className='form_label'>
                Specialization*
              </p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className='form_input py-3.5'
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>

              {error.specialization && <p className='text-red-400'>{error.specialization}</p>}

            </div>

            <div className='mb-5'>
              <p className='form_label'>Ticket Price*</p>
              <input
                type="text"
                placeholder='100'
                name='ticketPrice'
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className='form_input'
              />
              {error.ticketPrice && <p className='text-red-400'>{error.ticketPrice}</p>}

            </div>

          </div>
        </div>
        <div className="mb-5">
          <p className='form_label'>Qualifications*</p>
          {
            formData.qualifications?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className='grid grid-cols-2 gap-5'>
                    <div>
                      <p className='form_label'>
                        Starting Date*
                      </p>
                      <input
                        type="date"
                        name='startingDate'
                        value={item.startingDate}
                        className='form_input'
                        onChange={e => handleQualificationChange(e, index)}
                      />
                    </div>

                    <div>
                      <p className='form_label'>
                        Ending Date*
                      </p>
                      <input
                        type="date"
                        name='endingDate'
                        value={item.endingDate}
                        className='form_input'
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div>
                      <p className='form_label'>
                        Degree*
                      </p>
                      <input
                        type="text"
                        name='degree'
                        value={item.degree}
                        className='form_input'
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>

                    <div>
                      <p className='form_label'>
                        University*
                      </p>
                      <input
                        type="text"
                        name='university'
                        value={item.university}
                        className='form_input'
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>
                  </div>
                  {error.qualifications && <p className='text-red-400'>{error.qualifications}</p>}
                  <button
                    type='button'
                    onClick={() => handleDelete('qualifications', index)}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[20px] cursor-pointer'>
                    <AiOutlineDelete />
                  </button>



                </div>
              </div>
            ))
          }

          <button
            type='button'
            onClick={addQualifications}
            className='bg-[#000] py-2 rounded btn text-white h-fit cursor-pointer'>
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className='form_label'>Experience*</p>
          {
            formData.experiences?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className='grid grid-cols-2 gap-5'>
                    <div>
                      <p className='form_label'>
                        Starting Date*
                      </p>
                      <input
                        type="date"
                        name='startingDate'
                        value={item.startingDate}
                        className='form_input'
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>

                    <div>
                      <p className='form_label'>
                        Ending Date*
                      </p>
                      <input
                        type="date"
                        name='endingDate'
                        value={item.endingDate}
                        className='form_input'
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div>
                      <p className='form_label'>
                        Position*
                      </p>
                      <input
                        type="text"
                        name='position'
                        value={item.position}
                        className='form_input'
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>

                    <div>
                      <p className='form_label'>
                        Hospital*
                      </p>
                      <input
                        type="text"
                        name='hospital'
                        value={item.hospital}
                        className='form_input'
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>
                  </div>

                  {error.experiences && <p className='text-red-400'>{error.experiences}</p>}

                  <button
                    type='button'
                    onClick={() => handleDelete('experience', index)}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[20px] cursor-pointer'>
                    <AiOutlineDelete />
                  </button>

                </div>
              </div>
            ))
          }

          <button
            type='button'
            onClick={addExperience}
            className='bg-[#000] py-2 rounded btn text-white h-fit cursor-pointer'>
            Add Experience
          </button>
        </div>


        <div className="mb-5">
          <p className='form_label'>Time Slote*</p>
          {
            formData.timeSlots?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                    <div>
                      <p className='form_label'>
                        Day*
                      </p>
                      <select name="day"
                        value={item.day}
                        className='form_input py-3.5'
                        onChange={e => handleTimeslotsChange(e, index)}
                      >
                        <option value="">Select</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                      </select>
                    </div>

                    <div>
                      <p className='form_label'>
                        Starting Time*
                      </p>
                      <input
                        type="time"
                        name='startingTime'
                        value={item.startingTime}
                        className='form_input'
                        onChange={e => handleTimeslotsChange(e, index)}
                      />
                    </div>

                    <div>
                      <p className='form_label'>
                        Ending Time*
                      </p>
                      <input
                        type="time"
                        className='form_input'
                        name='endingTime'
                        value={item.endingTime}
                        onChange={e => handleTimeslotsChange(e, index)}
                      />
                    </div>

                    <div className='flex items-center'>
                      <button
                        type='button'
                        onClick={() => handleDelete('timeSlots', index)}
                        className='bg-red-600 p-2 mt-6 rounded-full text-white text-[18px] cursor-pointer'>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>


                </div>
              </div>
            ))
          }
          {error.timeSlots && <p className='text-red-400'>{error.timeSlots}</p>}
          <button
            type='button'
            onClick={addTimeslote}
            className='bg-[#000] py-2 rounded btn text-white h-fit cursor-pointer'>
            Add Timeslot
          </button>



        </div>

        <div className='mb-5'>
          <p className='form_label'>About*</p>

          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder='Write about you'
            onChange={handleInputChange}
            className='form_input'
          >

          </textarea>

          {error.about && <p className='text-red-400'>{error.about}</p>}

        </div>

        <div className="flex mb-5 items-center gap-3">

          {
            loadingFile ? (<HashLoader size={35} color='blue' />) : (

              formData.photo && (
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>

                  <img
                    src={formData.photo}
                    className='w-full rounded-full'
                  />

                </figure>
              )

            )
          }

          <div className='relative w-[130px] h-[50px]'>
            <input
              type="file"
              name='photo'
              id='customFile'
              onChange={handleFileChange}
              accept='.jpg, .png'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />

            <label
              htmlFor="customFile"
              className='flex items-center absolute top-0 left-0 w-full h-full px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className='mt-7'>
          <button
            disabled={loadingSubmit && true}
            type='submit'
            onClick={updateProfileHandler}
            className='text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg bg-primaryColor text-white'
          >
            {loadingSubmit ? (<HashLoader size={35} color='#ffffff' />) : 'Update Profile'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default DoctorProfile
