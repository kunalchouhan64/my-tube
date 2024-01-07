import React from 'react'

const SliderButtonMenu = () => {
    return (
        <>
            <div className='pt-2 fixed top-12 bg-white w-full py-2 md:px-2 space-x-2 text-sm z-10'>
                <button className='rounded-lg py-1 px-4 font-Raleway bg-gray-900 text-white'>Home</button>
                <button className='rounded-lg py-1 px-4 font-Raleway bg-gray-600 text-white'>Gaming</button>
                <button className='rounded-lg py-1 px-4 font-Raleway bg-gray-600 text-white'>Music</button>
            </div>
        </>
    )
}

export default SliderButtonMenu
