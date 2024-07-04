import React, { useEffect, useState } from 'react';
import { HiStar } from 'react-icons/hi';
import patientAvatar from '../../assets/images/patient-avatar.png';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Shivam Mittal",
            review: "I have taken medical service from them. They treat so well and they are providing the best medical services."
        },
        {
            name: "John Doe",
            review: "Excellent service and friendly staff. Highly recommended!"
        },
        {
            name: "Jane Smith",
            review: "Top-notch medical care and professional staff."
        },
        {
            name: "Doe Smith",
            review: "Top-notch medical care and professional staff."
        },
        {
            name: "Markrem Maie",
            review: "Top-notch medical care and professional staff."
        },
        {
            name: "Bumrah",
            review: "Top-notch medical care and professional staff."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleTestimonials, setVisibleTestimonials] = useState([]);

    const getUpdatedTestimonials = () => {
        const width = window.innerWidth;
        let itemsToShow = 1;
        if (width >= 1280) {
            itemsToShow = 3;
        } else if (width >= 1024) {
            itemsToShow = 2;
        }

        const updatedTestimonials = [];
        for (let i = 0; i < itemsToShow; i++) {
            updatedTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        setVisibleTestimonials(updatedTestimonials);
    };

    useEffect(() => {
        getUpdatedTestimonials();
        window.addEventListener('resize', getUpdatedTestimonials);

        return () => {
            window.removeEventListener('resize', getUpdatedTestimonials);
        };
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className='md:px-[2.7rem] lg:px-[5rem] px-[1rem]'>
            <div className="container relative">
                <div className='xl:w-[500px] mx-auto'>
                    <h2 className='heading text-center'>
                        What our patients say
                    </h2>
                    <p className='text_para text-center'>
                        World-class care for everyone. Our health systems offer unmatched, expert health care.
                    </p>
                </div>
                <div className='mt-[30px] lg:mt-[55px]'>
                    <div className="flex flex-col items-center justify-center w-full relative">
                        <div className="hidden lg:flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-2">
                            <button onClick={prevSlide} className="py-2 px-4 bg-primaryColor text-white cursor-pointer rounded-md hover:bg-blue-700">&lt;</button>
                            <button onClick={nextSlide} className="py-2 px-4 bg-primaryColor text-white cursor-pointer rounded-md hover:bg-blue-700">&gt;</button>
                        </div>
                        <div className="flex justify-center">

                                {visibleTestimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.name}
                                        className='w-full sm:w-[30rem] md:w-[30rem] lg:w-[25rem] flex items-center justify-center'
                                    >
                                        <div className={`h-[14rem] sm:mx-2 w-full md:w-[27rem] lg:w-[22rem] py-8 px-5 rounded-lg border border-solid ${index === 1 ? 'scale-110 bg-primaryColor text-white shadow-xl' : ''}`}>
                                            <div className='flex items-center gap-8'>
                                                <img
                                                    loading='lazy'
                                                    src={patientAvatar}
                                                    alt="Patient Avatar"
                                                />
                                                <div>
                                                    <h4 className='text-lg font-semibold'>
                                                        {testimonial.name}
                                                    </h4>
                                                    <div className="flex items-center gap-1">
                                                        <HiStar className="text-yellow-500 w-5 h-5" />
                                                        <HiStar className="text-yellow-500 w-5 h-5" />
                                                        <HiStar className="text-yellow-500 w-5 h-5" />
                                                        <HiStar className="text-yellow-500 w-5 h-5" />
                                                        <HiStar className="text-yellow-500 w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-base mt-4'>
                                                {testimonial.review}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                          
                        </div>
                        <div className="mt-4 flex lg:hidden justify-center space-x-4">
                            <button onClick={prevSlide} className="py-2 px-4 bg-primaryColor text-white cursor-pointer rounded-md hover:bg-blue-700">&lt;</button>
                            <button onClick={nextSlide} className="py-2 px-4 bg-primaryColor text-white cursor-pointer rounded-md hover:bg-blue-700">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
