import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserDetailsQuery } from '../../redux/api/api'

const Userprofile = () => {
    const { id } = useParams()
    console.log(id)

    const { data } = useGetUserDetailsQuery(id)
    console.log(data)

    const truncate = (str, maxLength) => {
        if(str.length > maxLength){
            return str.substring(0, maxLength) + '';
        }
        return str
    }
    return (
        <section className='min-h-screen'>
            <div className='w-full max-w-[1170px] px-5 mx-auto'>
                <div className='w-full h-[500px] border border-slate-300 rounded-lg p-[2rem]'>
                    <div>
                        <div className='flex items-center'>
                            <img
                                src={data?.data?.photo}
                                className='w-[8rem]'
                            />
                            <div className='ml-[1rem]'>
                                <h3 className='text-4xl'>{truncate(data?.data?.name || '' , 5)}</h3>
                                <p>{data?.data?.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Userprofile
