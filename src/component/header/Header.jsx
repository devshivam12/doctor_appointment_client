import React, { useState, useContext, useEffect } from 'react';
import Logo from '../../assets/images/image.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';
// import { useSelector } from 'react-redux';
import { CiBellOn } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';


import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { BiClinic } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { logoutUser } from '../../redux/reducers/auth';


const navLinks = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
  {
    path: '/services',
    display: 'Messages',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = ({ patientData, doctorData, isAuthenticate }) => {
  console.log(patientData)
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  // console.log(patientData)
  // console.log(doctorData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const role = useSelector((state) => state.auth.role)
  console.log(role)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown)
  }

  const handleLogout = async () => {
    const result = await dispatch(logoutUser())
    if (result.success.message) {
      navigate('/')
    }
  }
  return (
    <header className='header flex items-center sticky top-0 left-0 shadow-sm bg-white md:px-[2.7rem] lg:px-[3rem] px-[1rem]'>
      <div className="container flex items-center justify-between ">
        {/* logo */}
        <div className='sm:mr-[2px]'>
          <img src={Logo} alt="Logo" className='md:w-[6rem] w-[4rem] sm:w-[5rem] mix-blend-multiply' />
        </div>

        {/* menu */}
        <div className='navigation md:flex hidden'>
          <ul className='menu flex items-center sm:gap-[1rem] md:gap-[1rem] lg:gap-[3rem]'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={navClass => navClass.isActive ? 'text-primaryColor leading-7 font-[600] text-[16px]' : 'text-textColor leading-7 font-[500] text-[16px] hover:text-primaryColor'}
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* nav right */}
        <div className="flex items-center">

          {
            !isAuthenticate && (
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-10 text-white font-[600] h-[44px] flex items-center justify-center rounded-[10px]'>
                  Login
                </button>
              </Link>

            )
          }
          <span className=' md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>

        <div className='flex items-center justify-center gap-5'>

          <div>
            <TfiHelpAlt size={25} className='cursor-pointer' />
          </div>

          <div>
            <CiBellOn size={30} className='cursor-pointer' />
          </div>

          <div className='relative cursor-pointer' onClick={toggleDropDown}>
            <div>
              {isAuthenticate && role === 'patient' && patientData?.data?.role === role ? (
                <img src={patientData?.data?.photo} alt="User" className="w-[35px] h-[35px] rounded-full" />
              ) : isAuthenticate && role === 'doctor' && doctorData?.data?.role === role ? (
                <img src={doctorData?.data?.photo} alt="User" className="w-[35px] h-[35px] rounded-full" />
              ) : (
                <span>Loading...</span>
              )}
            </div>

            {
              dropDown && (
                <div className='absolute w-[15rem] bg-white right-0 border rounded-sm shadow-lg z-50 mt-1'>
                  <Link to={`/profile/${patientData?.data?._id}`} className='flex items-center justify-start px-[1rem] py-[1rem] text-gray-700 hover:bg-gray-100 leading-tight'>
                    <img src={patientData?.data?.photo} className='w-[40px] h-[40px] rounded-full' /> <span className='ml-[1rem]'>
                      <p>{patientData.data.name}</p>
                    </span>
                  </Link>
                  <div className='h-[0.7px] w-full m-auto border border-slate-100'></div>
                  <Link to={`/profile/${patientData?.data?._id}`} className='flex items-center justify-start px-[1rem] py-[1rem] text-gray-700 hover:bg-gray-100 leading-tight'>
                    <CgProfile size={20} /> <span className='ml-[1rem]'>Your profile</span>
                  </Link>
                  <Link to='/account-settings' className='flex items-center justify-start px-[1rem] py-[1rem] text-gray-700 hover:bg-gray-100 leading-tight'>
                    <CiSettings size={20} /> <span className='ml-[1rem]'>Account settings</span>
                  </Link>
                  <Link to='/your-bookings' className='flex items-center justify-start px-[1rem] py-[1rem] text-gray-700 hover:bg-gray-100 leading-tight'>
                    <BiClinic size={20} /> <span className='ml-[1rem]'>Your bookings</span>
                  </Link>
                  <Link to='/transaction-history' className='flex items-center justify-start px-[1rem] py-[1rem] text-gray-700 hover:bg-gray-100 leading-tight'>
                    <GrTransaction size={20} /> <span className='ml-[1rem]'>Transaction history</span>
                  </Link>
                  <div className='h-[0.7px] w-full m-auto border border-slate-100'></div>
                  <p
                    onClick={handleLogout}
                    className='flex items-center justify-start px-[1rem] py-[1rem] text-gray-900 hover:bg-gray-100 cursor-pointer leading-tight'
                  >
                    <CiLogout size={20} /> <span className='ml-[1rem]'>Log out</span>
                  </p>
                </div>
              )
            }

          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`navigation px-[1rem] md:px-[0] md:hidden fixed top-0 left-0 w-full h-full bg-white z-[9998] flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <button className="absolute flex items-center justify-center top-10 right-5 text-3xl h-[2rem] w-[2rem] rounded-full bg-primaryColor" onClick={toggleMenu}>
          <BiX color='white' />
        </button>
        <ul className='menu flex flex-col items-center gap-0'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? 'text-primaryColor' : 'text-textColor'}
              >
                {link.display}
              </NavLink>

            </li>
          ))}
        </ul>
        <div className='md:hidden block'>
          <Link to='/'>
            <figure className='w-[4rem] h-[4rem] rounded-full cursor-pointer'>
              {/* <img src={user?.photo} alt="User" className='w-[7rem] ' /> */}
            </figure>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
