import { faClock, faClockRotateLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

const VideoComponent = ({ videos }) => {
    function formatNumber(num) {
        if (num < 1e3) {
            return num;
        } else if (num < 1e6) {
            return (num / 1e3).toFixed(1) + 'k';
        } else if (num < 1e9) {
            return (num / 1e6).toFixed(1) + 'M';
        } else {
            return (num / 1e9).toFixed(1) + 'B';
        }
    }


    return (
        <>

            <Link to={`/watch?v=${videos.id}`}>
                <div className='h-auto w-auto flex flex-col justify-center items-start'>
                    <img className='rounded-xl h-auto w-auto md:h-auto md:w-full object-cover object-center' src={videos.snippet?.thumbnails?.maxres?.url} alt="" />
                    <div className='flex justify-center items-start space-x-2'>

                        <div className='p-5 rounded-full bg-black mt-2'></div>
                        <div className='py-1 flex flex-col items-start justify-center space-y-1'>
                            <div className='font-Raleway line-clamp-2 font-[500]'>{videos.snippet.title}</div>
                            <div>
                                <span className='font-Raleway text-sm font-semibold'>{videos.snippet.channelTitle} </span>
                            </div>
                            <div className='text-sm space-x-2 font-Poppins'>
                                <span>{formatNumber(videos.statistics.viewCount)}<FontAwesomeIcon className='pl-1' icon={faEye} /></span>
                                <span>10 Day ago <FontAwesomeIcon className='pl-1' icon={faClockRotateLeft} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default VideoComponent
