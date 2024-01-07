import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const QueryVideoComp = ({ queryvideos }) => {
    // console.log("PPPPPP--->>>", queryvideos);



    return (
        <>
            <div className='space-y-4'>
                {
                    queryvideos?.map((video) => (
                        <Link className='mt-4 bg-red-500 p-2 w-full' key={video.etag} to={`/watch?v=${video.id.videoId}`}>
                            <div className='flex justify-start items-start font-Raleway space-x-3'>
                                <div>
                                    <img className='h-44 w-full md:h-60 md:w-full object-center object-cover rounded-xl' src={video?.snippet?.thumbnails?.high?.url} alt="" />

                                </div>
                                <div>
                                    <h3 className='font-semibold'>{video?.snippet?.title}</h3>
                                    <span><FontAwesomeIcon icon={faEye} /></span>
                                    <p>Channel Name</p>
                                    <span>Description</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </>
    )
}

export default QueryVideoComp
