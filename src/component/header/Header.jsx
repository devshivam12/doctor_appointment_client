import React, { useState } from 'react';
import Logo from '../../assets/images/image.png';
import { NavLink, Link } from 'react-router-dom';
import useImage from '../../assets/images/avatar-icon.png';
import { BiMenu, BiX } from 'react-icons/bi';

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
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header flex items-center sticky top-0 left-0 z-[99999] shadow-sm bg-white md:px-[2.7rem] lg:px-[5rem] px-[1rem]'>
      <div className="container flex items-center justify-between ">
        {/* logo */}
        <div className='sm:mr-[2px]'>
          <img src={Logo} alt="Logo" className='md:w-[6rem] w-[4rem] sm:w-[5rem] mix-blend-multiply' />
        </div>

        {/* menu */}
        <div className='navigation md:flex hidden'>
          <ul className='menu flex items-center sm:gap-[1rem] md:gap-[0.4rem] lg:gap-[2.7rem]'>
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
        <div className="flex items-center gap-4">
          <div className='hidden md:block'>
            <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                <img src={useImage} alt="User" className='w-[3rem]' />
              </figure>
            </Link>
          </div>

          <Link to='/login'>
            <button className='bg-primaryColor py-2 px-10 text-white font-[600] h-[44px] flex items-center justify-center rounded-[10px]'>
              Login
            </button>
          </Link>

          <span className=' md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
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
                className={navClass => navClass.isActive ? 'text-primaryColor leading-7 font-[600] text-[16px]' : 'text-textColor leading-7 font-[500] text-[16px] hover:text-primaryColor'}
                onClick={toggleMenu}
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='md:hidden block'>
          <Link to='/'>
            <figure className='w-[4rem] h-[4rem] rounded-full cursor-pointer'>
              <img src={useImage} alt="User" className='w-[7rem] ' />
            </figure>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
