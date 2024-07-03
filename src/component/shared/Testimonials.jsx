import React, { useRef } from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='md:px-[2.7rem] lg:px-[5rem]'>
            <div className="container relative">
                <div className='xl:w-[500px] mx-auto'>
                    <h2 className='heading text-center'>
                        What our patients say
                    </h2>
                    <p className='text_para text-center'>
                        World-class care for everyone. Our health systems offer unmatched, expert health care.
                    </p>
                </div>
                <div className='mt-[30px] lg:mt-[55px] px-[2rem] sm:px-[4rem] lg:px-[2rem]'>
                    <Swiper
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className=''>
                                <div className='h-[14rem] py-[2rem] px-5 rounded-lg border border-solid'>
                                    <div className='flex items-center gap-[13px]'>
                                        <img
                                            loading='lazy'
                                            src={patientAvatar}
                                            alt="Patient Avatar"
                                        />
                                        <div>
                                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                                {testimonial.name}
                                            </h4>
                                            <div className="flex items-center gap-[2px]">
                                                <HiStar className="text-yellowColor w-[18px] h-5" />
                                                <HiStar className="text-yellowColor w-[18px] h-5" />
                                                <HiStar className="text-yellowColor w-[18px] h-5" />
                                                <HiStar className="text-yellowColor w-[18px] h-5" />
                                                <HiStar className="text-yellowColor w-[18px] h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                        {testimonial.review}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Navigation Buttons */}
                    <div className="swiper-navigation-buttons">
                        <div ref={prevRef} className="swiper-button-prev-custom">&lt;</div>
                        <div ref={nextRef} className="swiper-button-next-custom">&gt;</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
