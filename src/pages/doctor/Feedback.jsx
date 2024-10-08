import React, { useState } from 'react'
import { formatDate } from '../../utils/formatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = ({ reviews, totalRating, onUpdateFeddback }) => {

    const [showFeedback, setShowfeedback] = useState(false)
    return (
        <div>
            <div className='mb-[50px]'>
                <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
                    All reviews ({totalRating})
                </h4>

                {reviews?.map((item, index) => (
                    <div
                        key={index}
                        className='flex justify-between gap-10 mb-[30px]'
                    >
                        <div className='flex gap-3'>
                            <figure className='w-10 h-10 rounded-full '>
                                <img src={item?.user?.photo} alt="" />
                            </figure>

                            <div>
                                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                                    {item?.user?.name}
                                </h5>
                                <p className='text-[14px] leding-6 text-textColor'>
                                    {formatDate(item?.createdAt)}
                                </p>
                                <p className='text_para mt-3 font-medium text-[15px]'>
                                    {item?.reviewText}
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-1'>
                            {[...Array(item?.rating).keys()].map((_, index) => (
                                <AiFillStar
                                    key={index}
                                    color="#0067fe"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {!showFeedback && <div className='text-center'>
                <button className='btn' onClick={() => setShowfeedback(true)}>
                    Give Feedback
                </button>
            </div>}
            {showFeedback && <FeedbackForm onUpdateFeddback={onUpdateFeddback} />}
        </div>
    )
}

export default Feedback
