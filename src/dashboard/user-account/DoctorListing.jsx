import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MdVerified } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const listings = [
    {
        value: "newest",
        label: "Newest",
    },
    {
        value: "experienced",
        label: "Experienced",
    },
];

const DoctorListing = ({ doctorData, isLoading, isError }) => {
    const [sortOpen, setSortOpen] = useState(false);
    const [sortValue, setSortValue] = useState("");
    const [changeIcon, setChangeIcon] = useState(false)

    const toggleIcon = () => {
        setChangeIcon(!changeIcon)
    }

    return (
        <div>
            <div className="flex items-center justify-end pb-[0.5rem] space-x-10 border-b-[1px]">
                <div className="flex items-center space-x-3">
                    {
                        changeIcon
                            ?
                            <FaRegHeart
                                size={22}
                                className='cursor-pointer'
                                onClick={toggleIcon}
                            />
                            :
                            <FaHeart
                                size={22}
                                className='cursor-pointer'
                                onClick={toggleIcon}
                            />
                    }
                    <p className='text-lg underline cursor-pointer'>Saved Doctor</p>
                </div>

                <div>
                    <Popover open={sortOpen} onOpenChange={setSortOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={sortOpen}
                                className="w-[250px] justify-between"
                            >
                                {sortValue
                                    ? listings.find((listing) => listing.value === sortValue)?.label
                                    : "Sort by:"}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[250px] p-0">
                            {/* Removed CommandInput and CommandEmpty */}
                            <div>
                                {listings.map((listing) => (
                                    <div
                                        key={listing.value}
                                        onClick={() => {
                                            setSortValue(listing.value === sortValue ? "" : listing.value);
                                            setSortOpen(false);
                                        }}
                                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200"
                                    >
                                        {listing.label}
                                        {listing.value === sortValue && (
                                            <CheckIcon className="ml-auto h-4 w-4 opacity-100" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* main content */}

            <div className='w-full p-4'>
                {
                    doctorData?.data.map((data, index) => (
                        <div
                            key={index}
                            className='border-b last:border-b-0 px-[1.5rem] py-[2rem] bg-white max-w-full mx-auto border rounded-md shadow-md my-4 space-y-4'
                        >
                            <div className='flex justify-between items-center'>

                                <div className='flex items-center gap-8 '>
                                    <div className=''>
                                        <img
                                            src={data.photo}
                                            alt=""
                                            className='w-[3rem] rounded-full'
                                        />
                                    </div>

                                    <div>
                                        <p className='text-xl font-semibold'>{data.name}</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full border border-slate-300 cursor-pointer hover:border-slate-900 transition-all'>
                                        <FaRegHeart size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center space-x-3 mb-[1rem] text-sm'>
                                <div className='space-x-3 flex items-center'>
                                    <div>
                                        <MdVerified size={20} />
                                    </div>
                                    <p className='text-slate-600 text-sm'>Verified <span className='font-bold bg-slate-200 px-[0.5rem] py-[0.3rem] rounded-lg ml-1 cursor-pointer hover:underline'>{data?.specialization?.toUpperCase()}</span></p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='flex space-x-2' title={`${data.totalRating} review`}>
                                        {[...Array(5)].map((_, index) => (
                                            index < data.averageRating ?
                                                (
                                                    <AiFillStar key={index} size={20} className='text-yellow-500' />
                                                ) : (
                                                    <AiOutlineStar key={index} size={20} className='text-gray-300' />
                                                )
                                        ))}
                                    </div>

                                    <div className='ml-2 text-sm text-gray-500'>
                                        ({data.averageRating} out of {data.totalRating} review)
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <div>
                                        <IoLocationOutline size="20" />
                                    </div>
                                    <div>
                                        <p className='text-slate-600'>{data.location}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='flex items-center font-light text-slate-600 text-sm'>
                                <div>
                                    <p className='text-slate-500 font-semibold'>Consultation Fees - Expert: </p>
                                </div>
                                <div className='ml-1'>
                                    <p className='text-slate-800 from-semibold '>
                                        ${
                                            data.ticketPrice
                                        }
                                    </p>
                                </div>
                            </div>


                            <div className='block'>
                                <div className=''>
                                    <h2 className='font-light text-slate-600 text-base'>
                                        {data.about ?
                                            data.about.length > 100 ? `${data.about.slice(0, 230)}....` : data.about : "No description available"}

                                    </h2>
                                </div>
                            </div>

                            <div className='flex items-center space-x-2 text-sm'>
                                <p className='text-slate-600'>Consultation Type</p>
                                <div className='flex space-x-2 text-slate-700'>
                                    {data.consultaion_type?.map((type, index) => (
                                        <span className='px-[0.5rem] py-[0.3rem] bg-slate-200 rounded-lg text-slate-600 text-sm font-bold ' key={index}>{type}</span>
                                    ))}
                                </div>
                            </div>


                            <div className='flex items-center text-slate-600 text-sm'>
                                <div>
                                    <p className='text-slate-600 '>Availability: </p>
                                </div>
                                <div className='ml-1'>
                                    <div className='flex space-x-2 text-slate-700'>
                                        {
                                            data.availability?.map((type, index) => (
                                                <span key={index} className='px-[0.5rem] py-[0.3rem] bg-slate-200 rounded-lg text-slate-600 text-sm font-bold '>{type}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default DoctorListing;
