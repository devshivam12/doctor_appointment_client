import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../config';
import { authContext } from '../context/AuthContext';
import HashLoader from 'react-spinners/HashLoader';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(true);

  const { dispatch } = useContext(authContext);

  const navigate = useNavigate();

  const handlePassword = () => {
    setPassword(!password);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        }
      });
      // console.log("Login token",token)
      toast.success(result.message);
      setLoading(false);

      navigate('/');

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNhYjExYWNkOWY4N2Y0ZjQyZWVlZSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MjI2OTQ4NDUsImV4cCI6MTcyMzk5MDg0NX0.YaCI3BrxQpg1sQCs8D_auHsaNLDm4SScAHu_1vZJFWg

  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNhYjExYWNkOWY4N2Y0ZjQyZWVlZSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MjI2OTQ4NDUsImV4cCI6MTcyMzk5MDg0NX0.YaCI3BrxQpg1sQCs8D_auHsaNLDm4SScAHu_1vZJFWg

  // for patient : - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNhYjExYWNkOWY4N2Y0ZjQyZWVlZSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MjI2OTM1MTAsImV4cCI6MTcyMzk4OTUxMH0.M-YON3i1JjrEZOQtIVJy89Tjwc4UYY-fprZvF8rMBL8

  // patient localStorage = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTVlYTI4ZWY0NjAxZjJiYTQ1M2UyYiIsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNzIyNjkzNjEwLCJleHAiOjE3MjM5ODk2MTB9.3sge79FB6xbpItRr8DOuShE07wG8hi_K6lCYnYxa8Qk

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNhYjExYWNkOWY4N2Y0ZjQyZWVlZSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MjI2OTM5MjcsImV4cCI6MTcyMzk4OTkyN30.U1paKxahj9P_iMWs_uMRQEnyVksOUKiMxq6SWT_NWEg

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNhYjExYWNkOWY4N2Y0ZjQyZWVlZSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MjI2OTM5MjcsImV4cCI6MTcyMzk4OTkyN30.U1paKxahj9P_iMWs_uMRQEnyVksOUKiMxq6SWT_NWEg

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTVlYTI4ZWY0NjAxZjJiYTQ1M2UyYiIsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNzIyNjk0MzY2LCJleHAiOjE3MjM5OTAzNjZ9.dzRGCEHTAJQTqolIKKZqQL8uRKLVoPVxjLowATltXE8

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTVlYTI4ZWY0NjAxZjJiYTQ1M2UyYiIsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNzIyNjk0MzY2LCJleHAiOjE3MjM5OTAzNjZ9.dzRGCEHTAJQTqolIKKZqQL8uRKLVoPVxjLowATltXE8

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
