import React from 'react'
import Loading from '../../assets/images/giphy2.webp'

const ComponentLoading = () => {
    return (
        <div>
            <div className="loading-gif flex items-center justify-center h-full">
                <img src={Loading} className="bg-transparent mix-blend-multiply" alt="Loading..." />
            </div>
        </div>
    )
}

export default ComponentLoading
