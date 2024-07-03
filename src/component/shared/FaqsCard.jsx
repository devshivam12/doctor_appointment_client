import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { motion } from 'framer-motion'


const FaqsCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
            <motion.div
                variants={variants}

                whileTap={{ scale: 0.9 }}
                className='flex items-center justify-between gap-5'
                onClick={handleToggle}
            >
                <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
                    {item.question}
                </h4>
                <div
                    onClick={handleToggle}
                    className={`${isOpen && "bg-primaryColor text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
                >
                    {
                        isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </div>
            </motion.div>

            <div className={`overflow-hidden duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className='mt-4'>
                    <div className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor '>
                        {item.content}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FaqsCard
