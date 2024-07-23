import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const DoctorProfile = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specilization: '',
    ticketPrice: 0,
    qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '' }],
    experiences: [{ startingDate: '', endingDate: '', position: '', hospital: '' }],
    timeSlots: [{ day: '', startingTime: '', endingTime: "" }],
    about: "",
    photo: null
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {

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
        </div>

        <div className='mb-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-[30px]'>
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
            </div>

            <div className='mb-5'>
              <p className='form_label'>
                Specialization*
              </p>
              <select
                name="specilization"
                value={formData.specilization}
                onChange={handleInputChange}
                className='form_input py-3.5'
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
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
            </div>

          </div>
        </div>

        <div className="mb-5">
          <p className='form_label'>Qualifications*</p>
          {
            formData.qualifications?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div>
                      <p className='form_label'>
                        Starting Date*
                      </p>
                      <input
                        type="date"
                        name='startingDate'
                        value={item.startingDate}
                        onChange={e => {
                          const newQualifications = [...formData.qualifications];
                          newQualifications[index].startingDate = e.target.value;
                          setFormData({ ...formData, qualifications: newQualifications });
                        }}
                        className='form_input'
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
                        onChange={e => {
                          const newQualifications = [...formData.qualifications];
                          newQualifications[index].endingDate = e.target.value;
                          setFormData({ ...formData, qualifications: newQualifications });
                        }}
                        className='form_input'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                    <div>
                      <p className='form_label'>
                        Degree*
                      </p>
                      <input
                        type="text"
                        name='degree'
                        value={item.degree}
                        onChange={e => {
                          const newQualifications = [...formData.qualifications];
                          newQualifications[index].degree = e.target.value;
                          setFormData({ ...formData, qualifications: newQualifications });
                        }}
                        className='form_input'
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
                        onChange={e => {
                          const newQualifications = [...formData.qualifications];
                          newQualifications[index].university = e.target.value;
                          setFormData({ ...formData, qualifications: newQualifications });
                        }}
                        className='form_input'
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const newQualifications = formData.qualifications.filter((_, i) => i !== index);
                      setFormData({ ...formData, qualifications: newQualifications });
                    }}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[20px] cursor-pointer'
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))
          }

          <button
            type="button"
            onClick={() => setFormData({ ...formData, qualifications: [...formData.qualifications, { startingDate: '', endingDate: '', degree: '', university: '' }] })}
            className='bg-[#000] py-2 rounded btn text-white h-fit cursor-pointer'
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className='form_label'>Experience*</p>
          {
            formData.experiences?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div>
                      <p className='form_label'>
                        Starting Date*
                      </p>
                      <input
                        type="date"
                        name='startingDate'
                        value={item.startingDate}
                        onChange={e => {
                          const newExperiences = [...formData.experiences];
                          newExperiences[index].startingDate = e.target.value;
                          setFormData({ ...formData, experiences: newExperiences });
                        }}
                        className='form_input'
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
                        onChange={e => {
                          const newExperiences = [...formData.experiences];
                          newExperiences[index].endingDate = e.target.value;
                          setFormData({ ...formData, experiences: newExperiences });
                        }}
                        className='form_input'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                    <div>
                      <p className='form_label'>
                        Position*
                      </p>
                      <input
                        type="text"
                        name='position'
                        value={item.position}
                        onChange={e => {
                          const newExperiences = [...formData.experiences];
                          newExperiences[index].position = e.target.value;
                          setFormData({ ...formData, experiences: newExperiences });
                        }}
                        className='form_input'
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
                        onChange={e => {
                          const newExperiences = [...formData.experiences];
                          newExperiences[index].hospital = e.target.value;
                          setFormData({ ...formData, experiences: newExperiences });
                        }}
                        className='form_input'
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const newExperiences = formData.experiences.filter((_, i) => i !== index);
                      setFormData({ ...formData, experiences: newExperiences });
                    }}
                    className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[20px] cursor-pointer'
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))
          }

          <button
            type="button"
            onClick={() => setFormData({ ...formData, experiences: [...formData.experiences, { startingDate: '', endingDate: '', position: '', hospital: '' }] })}
            className='bg-[#000] py-2 rounded btn text-white h-fit cursor-pointer'
          >
            Add Experience
          </button>
        </div>

        <div className="mb-5">
          <p className='form_label'>Time Slots*</p>
          {
            formData.timeSlots?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]'>
                    <div>
                      <p className='form_label'>
                        Day*
                      </p>
                      <select
                        name="day"
                        value={item.day}
                        onChange={e => {
                          const newTimeSlots = [...formData.timeSlots];
                          newTimeSlots[index].day = e.target.value;
                          setFormData({ ...formData, timeSlots: newTimeSlots });
                        }}
                        className='form_input py-3.5'
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
                        onChange={e => {
                          const newTimeSlots = [...formData.timeSlots];
                          newTimeSlots[index].startingTime = e.target.value;
                          setFormData({ ...formData, timeSlots: newTimeSlots });
                        }}
                        className='form_input'
                      />
                    </div>

                    <div>
                      <p className='form_label'>
                        Ending Time*
                      </p>
                      <input
                        type="time"
                        name='endingTime'
                        value={item.endingTime}
                        onChange={e => {
                          const newTimeSlots = [...formData.timeSlots];
                          newTimeSlots[index].endingTime = e.target.value;
                          setFormData({ ...formData, timeSlots: newTimeSlots });
                        }}
                        className='form_input'
                      />
                    </div>

                    <div className='flex items-center'>
                      <button
                        type="button"
                        onClick={() => {
                          const newTimeSlots = formData.timeSlots.filter((_, i) => i !== index);
                          setFormData({ ...formData, timeSlots: newTimeSlots });
                        }}
                        className='bg-red-600 p-2 mt-6 rounded-full text-white text-[18px] cursor-pointer'
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

          <button
            type="button"
            onClick={() => setFormData({ ...formData, timeSlots: [...formData.timeSlots, { day: '', startingTime: '', endingTime: '' }] })}
            className='bg-[#000] py-2 rounded btn text-white h-fit cursor-pointer'
          >
            Add Time Slot
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
          />
        </div>

        <div className="flex mb-5 items-center gap-3">
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
              <img
                src={formData.photo}
                className='w-full rounded-full'
                alt="Doctor's Profile"
              />
            </figure>
          )}

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
          type="submit"
          onClick={updateProfileHandler}
          className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default DoctorProfile
