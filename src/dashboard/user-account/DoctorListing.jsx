import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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

            <div>
                {
                    doctorData?.data.map((data, index) => (
                        <div key={index}>
                            <p>{data.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DoctorListing;
