import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL, token } from '../../config'
import HashLoader from 'react-spinners/HashLoader'


const FeedbackForm = ({onUpdateFeddback}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState('')
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!rating || !reviewText) {
                setLoading(false)
                return toast.error('Rating & Review fields are required')
            }

            const response = await fetch(`${BASE_URL}/doctor/${id}/review`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ rating, reviewText })
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message)
            }

            setLoading(false)
            toast.success(result.message)
            onUpdateFeddback()
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
            console.log(error)
        }
    }

    return (
        <form action=''>
            <div>
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
                    How would you rate the overall experience?
                </h3>
                <div>
                    {Array.from({ length: 5 }, (_, index) => {
                        index += 1
                        return (
                            <button
                                key={index}
                                type='button'
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setRating(0)
                                    setHover(0)
                                }}
                                className={`${index <= (hover || rating) ? 'text-yellowColor' : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className='mt-[30px]'>
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                    How would you rate the overall experience?
                </h3>

                <textarea
                    className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md'
                    rows={5}
                    placeholder='Write your message'
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                >

                </textarea>
            </div>
            <button
                disabled={loading && true}
                onClick={handleSubmitReview}
                type='submit'
                className='btn'>
                {loading ? <HashLoader size={35} color='#fff' /> : "Submit Review"}
            </button>
        </form>
    )
}

export default FeedbackForm
