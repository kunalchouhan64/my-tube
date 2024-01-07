import React from 'react'

const VideoShimmerUI = () => {
    return (
        <>

            <div className='h-auto w-auto md:w-auto flex flex-col justify-center items-start'>
                {/* Shimmer Image */}
                <div className='animate-pulse min-h-[150px] min-w-[250px] sm:min-w-[400px] md:h-60 md:w-96 object-cover object-center bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-xl'></div>

                {/* Shimmer Details */}
                <div className='flex justify-center items-start space-x-2 mt-2 flex-col'>
                    <div className='flex items-start justify-center'>
                        {/* Shimmer Circle */}
                        <div className='p-5 rounded-full bg-gray-300 animate-pulse'></div>
                        <div className='md:px-2 space-y-2'>
                            <div className='h-3 w-28 md:w-60 bg-gray-300 rounded animate-pulse'></div>
                            <div className='h-3 w-20 md:w-32 bg-gray-200 rounded animate-pulse'></div>

                        </div>
                    </div>


                    {/* Shimmer Details Text */}
                        
                        <div className='flex space-x-5 pl-10 justify-start items-start  p-2 w-full'>
                            <div className='h-3 w-16 bg-gray-300 rounded animate-pulse'></div>
                            <div className='h-3 w-16 bg-gray-200 rounded animate-pulse'></div>
                        </div>
                   
                </div>
            </div>


        </>
    )
}

export default VideoShimmerUI
