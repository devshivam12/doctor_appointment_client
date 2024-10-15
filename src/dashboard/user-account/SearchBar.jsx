import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci'; // Search icon
import { IoMdClose } from 'react-icons/io'; // Close (X) icon
import { IoIosCloseCircleOutline } from "react-icons/io";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [model, setModel] = useState(false)
    const [price, setPrice] = useState(50)
    const [availability, setAvailability] = useState('');
    const [consultationMode, setConsultationMode] = useState('');

    // Options for consultation mode
    const consultationOptions = ['In-person', 'Video Call', 'Telehealth', 'Message'];
    const handleClearInput = () => {
        setInputValue('');
    };

    return (
        <div className="w-full">
            <div className='flex items-center w-full'>

                <div
                    className={`flex items-center px-3 w-[500px] py-[0.5rem] border rounded-full transition-all duration-300 ${isFocus ? 'border-slate-400 shadow-md' : 'border-slate-200'
                        }`}
                >

                    <CiSearch size={30} className="text-lg text-slate-500" />

                    <input
                        className="w-full px-3 py-[0.6rem] outline-none text-slate-700 bg-transparent"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        type="text"
                        placeholder="Search Here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    {inputValue && (
                        <IoMdClose
                            size={20}
                            className="text-lg text-slate-500 cursor-pointer w-[1.7rem] h-[1.5rem] border border-slate-400 rounded-full"
                            onClick={handleClearInput}
                        />
                    )}
                </div>
                <div className='ml-[2rem]'>
                    <button
                        onClick={() => setModel(!model)}
                        className='w-full text-xl text-slate-700 font-medium'>
                        Advance Search
                    </button>
                </div>

                {/* For open Advance Search */}

                {
                    model ? (
                        <div className='fixed inset-0 flex w-screen h-full items-center justify-center bg-black bg-opacity-40 z-50'>
                            <div className='relative w-[700px] h-[500px] bg-white border border-slate-400 outline-none rounded-lg py-[2rem] flex flex-col'>
                                <div className='flex items-center justify-between py-[0.4rem] px-[2rem] border-b border-b-slate-200'>
                                    <div>
                                        <h1 className='text-3xl font-semibold'>Advance Search</h1>
                                    </div>
                                    <div>
                                        <IoIosCloseCircleOutline size={40} className=' cursor-pointer' onClick={() => setModel(false)} />
                                    </div>
                                </div>

                                <div className='overflow-y-auto h-[calc(100%-3rem)]'>
                                    <div className='px-[2rem]'>
                                        {/* Specialization  */}

                                        <div className='mt-[1rem]'>
                                            <h2 className='font-medium text-lg text-slate-500'>Specialization</h2>
                                            <input
                                                type="text"
                                                placeholder=''
                                                className='w-full rounded-lg mt-[0.8rem] border border-slate-300 focus:border-slate-400 py-[.4rem] px-[0.4rem]'
                                            />
                                        </div>

                                        {/* Experience and Location */}

                                        <div className='mt-[1.5rem] flex items-center m-auto gap-4'>
                                            <div className='flex-1'>
                                                <h2 className='font-medium text-lg text-slate-500'>Experience</h2>
                                                <input
                                                    type="text"
                                                    placeholder=''
                                                    className='w-full rounded-lg mt-[0.8rem] border border-slate-300 focus:border-slate-400 py-[.4rem] px-[0.4rem]'
                                                />
                                            </div>

                                            <div className='flex-1'>
                                                <h2 className='font-medium text-lg text-slate-500'>Location</h2>
                                                <input
                                                    type="text"
                                                    placeholder=''
                                                    className='w-full rounded-lg mt-[0.8rem] border border-slate-300 focus:border-slate-400 py-[.4rem] px-[0.4rem]'
                                                />
                                            </div>
                                        </div>

                                        {/* Gender and Rating */}

                                        <div className='mt-[1.5rem] flex items-center m-auto gap-4'>
                                            <div className='flex-1'>
                                                <h2 className='font-medium text-lg text-slate-500'>Gender</h2>
                                                <select className='w-full rounded-lg mt-[0.8rem] border border-slate-300 focus:border-slate-400 py-[.4rem] px-[0.6rem]'>
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>

                                            </div>

                                            <div className='flex-1'>
                                                <h2 className='font-medium text-lg text-slate-500'>Rating</h2>
                                                <select className='w-full rounded-lg mt-[0.8rem] border border-slate-300 focus:border-slate-400 py-[.4rem] px-[0.6rem]'>
                                                    <option value="">Select Rating</option>
                                                    <option value="less_than_3.5">Less then 3.5</option>
                                                    <option value="less_than_4">Less then 4</option>
                                                    <option value="less_than_4.5">Less then 4.5</option>
                                                    <option value="exact_5">Exactly 5</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Price range */}


                                        <div className='mt-[1rem]'>
                                            <h2 className='font-medium text-lg text-slate-500'>Price Range</h2>
                                            <input
                                                type="range"
                                                min='0'
                                                max="1000"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                className='w-full mt-[0.8rem] accent-slate-600'
                                            />
                                            <div className='flex justify-between text-slate-500 text-sm mt-[0.4rem]'>
                                                <span>$0</span>
                                                <span>${price}</span>
                                                <span>$1000</span>
                                            </div>
                                        </div>

                                        {/* Availability and consultation mode */}

                                        <div className='mt-[2rem]'>
                                            {/* Search by Availability */}
                                            <div className='mt-[1rem]'>
                                                <h2 className='font-medium text-lg text-slate-500'>Search by Availability</h2>
                                                <select
                                                    className='w-full mt-[0.8rem] py-[0.4rem] px-[0.4rem] rounded-lg border border-slate-300 focus:border-slate-400'
                                                    value={availability}
                                                    onChange={(e) => setAvailability(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Availability</option>
                                                    <option value="anytime">Anytime</option>
                                                    <option value="morning">Morning</option>
                                                    <option value="afternoon">Afternoon</option>
                                                    <option value="evening">Evening</option>
                                                    <option value="weekends">Weekends</option>
                                                </select>
                                            </div>

                                            {/* Search by Consultation Mode */}
                                            <div className='mt-[1.5rem]'>
                                                <h2 className='font-medium text-lg text-slate-500'>Search by Consultation Mode</h2>
                                                <div className='mt-[0.8rem]'>
                                                    {consultationOptions.map((option, index) => (
                                                        <div key={index} className='flex items-center mb-[0.5rem]'>
                                                            <input
                                                                type="radio"
                                                                id={option}
                                                                name="consultationMode"
                                                                value={option}
                                                                checked={consultationMode === option}
                                                                onChange={(e) => setConsultationMode(e.target.value)}
                                                                className='mr-[0.5rem]'
                                                            />
                                                            <label htmlFor={option} className='text-slate-600'>
                                                                {option}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center justify-end px-[2rem] border-t border-t-slate-200'>
                                    <div className='mt-[1rem] gap-10'>
                                        <button 
                                        onClick={() => setModel(false)}
                                        className='px-[0.7rem] py-[.5rem] text-blue-900 font-bold'>Cancel</button>
                                        <button className='bg-primaryColor py-[8px] px-[20px] rounded-[10px] text-white font-[600]  hover:bg-blue-700'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }

            </div>
        </div>
    );
};

export default SearchBar;
