import React, { useContext, useEffect, useState } from 'react';
// import signupImg from '../../assets/images/signup.gif';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
// import { authContext } from '../../context/AuthContext';


const MySettings = ({ user }) => {
    // const { dispatch } = useContext(authContext);
    const [selectFile, setSelectFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        photo: null,
        gender: "",
        bloodType: ""
    });

    useEffect(() => {
        setRegisterData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType });
    }, [user]);

    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const data = await uploadImageCloudinary(file);
        setSelectFile(data.url);
        setRegisterData({ ...registerData, photo: data.url });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/user/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(registerData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            // dispatch({
            //     type: "DATA_UPDATE",
            //     payload: {
            //         user: data.user,
            //         token : data.token
            //     }
            // });

            setLoading(false);
            toast.success(data.message);
            navigate('/users/profile/me');

        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    };

    return (
        <div className='mt-[2rem]'>
            <form onSubmit={submitHandler}>
                <div className='mb-5'>
                    <input
                        type="name"
                        placeholder='Enter your Name'
                        name='name'
                        value={registerData.name}
                        onChange={handleChange}
                        className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                        required
                    />
                </div>

                <div className='mb-5'>
                    <input
                        type="email"
                        placeholder='Enter your Email '
                        name='email'
                        value={registerData.email}
                        onChange={handleChange}
                        className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                        aria-readonly
                        readOnly
                    />
                </div>

                <div className='mb-5 flex items-center justify-between'>
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        value={registerData.password}
                        onChange={handleChange}
                        className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                    />
                </div>

                <div className='mb-5 flex items-center justify-between'>
                    <input
                        type="text"
                        placeholder='Blood Type'
                        name='bloodType'
                        value={registerData.bloodType}
                        onChange={handleChange}
                        className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                        required
                    />
                </div>

                <div className='mb-5 flex flex-col sm:flex sm:items-center sm:flex-row sm:justify-between md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:items-center lg:justify-between'>
                    <label
                        htmlFor=""
                        className='text-headingColor font-bold text-[16px] leading-7'
                    >
                        Gender:
                        <select
                            name="gender"
                            value={registerData.gender}
                            onChange={handleChange}
                            className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                    {registerData.photo && (
                        <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                            <img
                                src={registerData.photo}
                                className='w-full rounded-full'
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
                            {selectFile ? selectFile.name : "Upload Photo"}
                        </label>
                    </div>
                </div>

                <div className='mt-7'>
                    <button
                        disabled={loading}
                        type='submit'
                        className='w-full bg-primaryColor text-white text-[18px] leading-[40px] rounded-lg px-4 py-3'
                    >
                        {loading ? (<HashLoader size={25} color='#ffffff' />) : ('Update')}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MySettings;
