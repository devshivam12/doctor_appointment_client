import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../config';

import HashLoader from 'react-spinners/HashLoader';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/thunk/authThunk';
import axios from 'axios';
import { userExists, userNotExists } from '../redux/reducers/auth';
import { getOrSavedFromStorage } from '../libs/feature';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(true);

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handlePassword = () => {
    setPassword(!password);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const toastId = toast.loading("Logging in....");

    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(`${BASE_URL}/auth/login`, formData, config);
      console.log(response.data.user)


      // Use response.status to check if the login was successful
      dispatch(userExists(response.data.user));
      // console.log(response.data.user.role)
      if (response.status === 200) {
        if (response.data.user.role) {
          getOrSavedFromStorage({
            key: 'role',
            value: response.data.user.role,
            get: false,
          });
        }
        toast.update(toastId, { render: response.data.message, type: "success", isLoading: false, autoClose: 3000 });
        navigate('/'); // Redirect if successful
      }
    } catch (error) {
      toast.update(toastId, { render: error?.response?.data?.message || "Something went wrong", type: "error", isLoading: false, autoClose: 3000 });
      dispatch(userNotExists(true));
      console.log(error);
    } finally {
      setLoading(false); // Stop loading in both success and error scenarios
    }
  };



  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg p-10 sm:p-10 md:p-10 shadow-md'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello <span className='text-primaryColor'>Welcome</span>
        </h3>

        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input
              type="email"
              placeholder='Enter your Email '
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
            />
          </div>

          <div className='mb-5 flex items-center justify-between'>
            <input
              type={password ? 'password' : 'text'}
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
            />
            <div className='-ml-10 cursor-pointer'>
              {password ? <FaEye size={20} onClick={handlePassword} /> : <FaEyeSlash onClick={handlePassword} />}
            </div>
          </div>

          <div className='mt-7'>
            <button
              disabled={loading && true}
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
            >
              {loading ? (<HashLoader size={35} color='#ffffff' />) : 'Login'}
            </button>
          </div>

          <p className='mt-5 text-textColor text-center'>
            Don't have an account? <Link to='/register' className='text-primaryColor'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;
