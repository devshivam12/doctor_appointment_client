import React, { useState } from 'react';

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"


const specializations = [
    { value: "surgeon", label: "Surgeon" },
    { value: "neurology", label: "Neurology" },
    { value: "pathology", label: "Pathology" },
    { value: "cardiologist", label: "Cardiologist" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "orthopedic", label: "Orthopedic" },
    { value: "pediatrician", label: "Pediatrician" },
    { value: "psychiatry", label: "Psychiatry" },
    { value: "otorhinolaryngology", label: "Otorhinolaryngology" },
    { value: "obstetrics-and-gynaecology", label: "Obstetrics and Gynaecology" },
    { value: "immunology", label: "Immunology" },
    { value: "oncology", label: "Oncology" },
    { value: "general-surgery", label: "General Surgery" },
    { value: "urology", label: "Urology" },
    { value: "physical-therapy", label: "Physical Therapy" },
    { value: "anesthesiology", label: "Anesthesiology" },
    { value: "geriatrics", label: "Geriatrics" },
    { value: "rheumatology", label: "Rheumatology" },
    { value: "ophthalmology", label: "Ophthalmology" },
    { value: "cardiothoracic-surgery", label: "Cardiothoracic Surgery" },
    { value: "pulmonology", label: "Pulmonology" },
    { value: "plastic-surgery", label: "Plastic Surgery" },
    { value: "radiology", label: "Radiology" },
    { value: "gastroenterology", label: "Gastroenterology" },
    { value: "endocrinology", label: "Endocrinology" },
    { value: "nephrology", label: "Nephrology" },
    { value: "preventive-healthcare", label: "Preventive Healthcare" },
    { value: "vascular-surgery", label: "Vascular Surgery" },
    { value: "medical-genetics", label: "Medical Genetics" },
    { value: "neurosurgery", label: "Neurosurgery" },
    { value: "colorectal-surgery", label: "Colorectal Surgery" },
    { value: "occupational-medicine", label: "Occupational Medicine" },
    { value: "intensive-care-medicine", label: "Intensive Care Medicine" },
    { value: "hematology", label: "Hematology" },
    { value: "diagnostic-radiology", label: "Diagnostic Radiology" },
    { value: "neonatology", label: "Neonatology" },
    { value: "pediatric-surgery", label: "Pediatric Surgery" },
    { value: "pediatric-hematology-oncology", label: "Pediatric Hematology Oncology" },
    { value: "podiatry", label: "Podiatry" },
];

const location = [
    {
        value: "africa",
        label: "Africa"
    },
    {
        value: "usa",
        label: "USA"
    },
    {
        value: "india",
        label: "India"
    },
    {
        value: "uk",
        label: "UK"
    },
    {
        value: "singapor",
        label: "singapor"
    },
    {
        value: "japan",
        label: "Japan"
    },
    {
        value: "pakistan",
        label: "Pakistan"
    },
    {
        value: "zimbabwe",
        label: "Zimbabwe"
    },
    {
        value: "germany",
        label: "Germany"
    },
    {
        value: "italy",
        label: "Italy"
    },
    {
        value: "paris",
        label: "Paris"
    },
    {
        value: "new zeland",
        label: "New zeland"
    },
    {
        value: "iceland",
        label: "Iceland"
    },
    {
        value: "afghanistan",
        label: "Afghanistan"
    },
    {
        value: "iraq",
        label: "Iraq"
    },
    {
        value: "iran",
        label: "Iran"
    },
]

const ratings = [
    {
        value: "0 to 2 rating",
        label: "0 to 2 Rating"
    },
    {
        value: "2 to 3.5 rating",
        label: "2 to 3.5 Rating"
    },
    {
        value: "3 to 4.5 rating",
        label: "3 to 4.5 Rating"
    },
    {
        value: "4 to 5 rating",
        label: "4 to 5 Rating"
    },
    {
        value: "5 rating",
        label: "5 Rating"
    }
]

const Sidebar = () => {
    const [specializationOpen, setSpecializationOpen] = useState(false);
    const [locationOpen, setLocationOpen] = useState(false);
    const [specializationValue, setSpecializationValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [ratingOpen, setRatingOpen] = useState(false)
    const [ratingValue, setRatingValue] = useState("")
    return (

        <div className='block'>

            {/* specialization */}

            <div>
                <h2 className='my-4 font-semibold text-lg'>Category</h2>
                <Popover open={specializationOpen} onOpenChange={setSpecializationOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={specializationOpen}
                            className="w-[250px] justify-between"
                        >
                            {specializationValue
                                ? specializations.find((item) => item.value === value)?.label
                                : "Select specialiast..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                        <Command>
                            <CommandInput placeholder="Select specialiast..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No specialiast found.</CommandEmpty>
                                <CommandGroup>
                                    {specializations.map((specialization) => (
                                        <CommandItem
                                            key={specialization.value}
                                            value={specialization.value}
                                            onSelect={(currentValue) => {
                                                setSpecializationValue(currentValue === specializationValue ? "" : currentValue)
                                                setSpecializationOpen(false)
                                            }}
                                        >
                                            {specialization.label}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    specializationValue === specialization.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            {/* checkbox */}

            <div className='mt-[1rem]'>
                <h2 className='my-4 font-semibold text-lg'>Experience Level</h2>
                <div className='block space-y-5'>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            0-5 Years
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            5-10 Years
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            10+ Years
                        </label>
                    </div>
                </div>
            </div>

            {/* Cosultaion Type */}

            <div className='mt-[1rem]'>
                <h2 className='my-4 font-semibold text-lg'>Consultaion Type</h2>
                <div className='block space-y-5'>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Online
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            In Person
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Home visit
                        </label>
                    </div>
                </div>
            </div>

            {/*Consultation Fees*/}

            <div className='mt-[1rem]'>
                <h2 className='my-4 font-semibold text-lg'>Consultation Fees</h2>
                <div className='block space-y-5'>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Less then $100
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            $100 to $500
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            $500 to $1k
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            $1k to $5k
                        </label>
                    </div>
                </div>
            </div>

            {/* Location */}

            <div>
                <h2 className='my-4 font-semibold text-lg'>Doctor Location</h2>
                <Popover open={locationOpen} onOpenChange={setLocationOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={locationOpen}
                            className="w-[250px] justify-between"
                        >
                            {locationValue
                                ? location.find((location) => location.value === value)?.label
                                : "Select location..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                        <Command>
                            <CommandInput placeholder="Select location..." className="h-9" /> {/* Fixed typo */}
                            <CommandList>
                                <CommandEmpty>No location found.</CommandEmpty> {/* Changed from 'framework' to 'location' */}
                                <CommandGroup>
                                    {location.map((item) => (
                                        <CommandItem
                                            key={item.value}
                                            value={item.value}
                                            onSelect={(currentValue) => {
                                                setLocationValue(currentValue === locationValue ? "" : currentValue);
                                                setLocationOpen(false);
                                            }}
                                        >
                                            {item.label}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    locationValue === item.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Doctor histroy */}
            <div className='mt-[1rem]'>
                <h2 className='my-4 font-semibold text-lg'>Doctors History</h2>
                <div className='block space-y-5'>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            No Consultaion
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            1 Patient
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            5 to 10 Patient
                        </label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            10+ Patient
                        </label>
                    </div>
                </div>
            </div>

            {/* Rating */}

            <div>
                <h2 className='my-4 font-semibold text-lg'>Select Rating</h2>
                <Popover open={ratingOpen} onOpenChange={setRatingOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={ratingOpen}
                            className="w-[250px] justify-between"
                        >
                            {ratingValue
                                ? ratings.find((item) => item.value === value)?.label
                                : "Select rating..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                        <Command>
                            <CommandInput placeholder="Select rating..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No rating found.</CommandEmpty>
                                <CommandGroup>
                                    {ratings.map((rating) => (
                                        <CommandItem
                                            key={rating.value}
                                            value={rating.value}
                                            onSelect={(currentValue) => {
                                                setRatingValue(currentValue === ratingValue ? "" : currentValue)
                                                setRatingOpen(false)
                                            }}
                                        >
                                            {rating.label}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    rating === rating.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
        // </div>
    );
}

export default Sidebar;
