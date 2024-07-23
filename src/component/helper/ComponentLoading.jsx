import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const ComponentLoading = () => {
    return (
        <div className='mt-[5rem]'>
            <div className="loading-gif flex items-center justify-center h-full">
                <HashLoader color='blue' />
            </div>
        </div>
    )
}

export default ComponentLoading
