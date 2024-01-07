
import { faEye, faScissors, faShare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideRecommendation from './SideRecommendation';
import { useSelector } from 'react-redux';

const VideoPlayer = () => {
    const siderecomandedvideos = useSelector((store) => store.videos?.videos)
    // Getting specific details of the video with useSerachParams hook 
    const [serachParams] = useSearchParams()
    // Extracting exact query id
    const myvide = (serachParams.get("v"));
    const [videodetails, SetVideoDetials] = useState([])

    // Calling the function for fetching data 
    useEffect(() => {
        fetchVideo();
    }, []);

    
    

    const [togglesubscibe, SetToggleSubscribe] = useState(false)
    const [togglediscshowmore, SetToggleDiscShowMore] = useState(false)


    // Function for convert number to readable stream 
    function formatNumber(num) {
        if (num < 1e3) {
            return num;
        } else if (num < 1e6) {
            return (num / 1e3).toFixed(1) + 'K';
        } else if (num < 1e9) {
            return (num / 1e6).toFixed(1) + 'M';
        } else {
            return (num / 1e9).toFixed(1) + 'B';
        }
    }


    // Fetching Sepecific Video 
    const fetchVideo = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${myvide}&key=AIzaSyA5bi_w-U-SBtopXFq63cWVMxJP25VtQc8`);
            const videoData = await response.json();
            SetVideoDetials(videoData.items)
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    // console.log(videodetails);
    const title = videodetails[0]?.snippet?.title;
    const channelTitle = videodetails[0]?.snippet?.channelTitle;
    const views = videodetails[0]?.statistics?.viewCount;
    const likes = videodetails[0]?.statistics?.likeCount;
    const description = videodetails[0]?.snippet?.description;
    // console.log(description);



    return (
        <div className='md:py-8 md:px-7 lg:px-10 sm:px-6 px-2 py-3 w-full grid place-items-start justify-items-center grid-flow-row lg:grid-cols-12 lg:gap-6 gap-3'>
            <div className='md:col-span-9 lg:col-span-8 w-full overflow-hidden'>
                <iframe className='rounded-2xl aspect-video object-cover object-center shadow-md shadow-gray-600 w-full h-auto md:w-full ' src={"https://www.youtube.com/embed/" + myvide + "?autoplay=1"} title="YouTube video player" allow=" autoplay; gyroscope; picture-in-picture;" autoFocus allowFullScreen></iframe>
                <div className='py-1 flex flex-col items-start justify-center space-y-1 w-full'>
                    <div className='font-Raleway text-sm md:text-xl line-clamp-2 font-[600] pt-2'>{title}</div>
                    { /* Channel Logo + Subscribe btn + like dislike btn + share 👇  */}
                    <div className='flex items-center lg:justify-between w-full  md:space-x-3 flex-wrap md:flex-nowrap py-2 md:py-0'>
                        <div className='flex items-center space-x-3 py-2 w-auto'>
                            <div className='p-6 rounded-full bg-black'></div>
                            <div className='flex flex-col font-Raleway'>
                                <span className='font-Raleway text-sm md:text-base font-semibold'>{channelTitle}</span>
                                <span className='sm:text-sm text-xs text-slate-950 font-[500]'>5.5 M Subscriber</span>

                            </div>
                            <div className='px-3 md:px-8'>
                                <button onClick={() => SetToggleSubscribe(!togglesubscibe)} className={`border rounded-3xl text-sm md:text-base border-white ${togglesubscibe ? 'bg-gray-700 text-white' : 'bg-slate-950 text-white'}  py-2 px-5 text-center font-Raleway`}>{togglesubscibe ? 'UnSubscibe' : 'Subscibe'}</button>
                            </div>
                        </div>

                        <div className=' flex md:p-2 items-center justify-center space-x-2 md:space-x-2 w-auto'>
                            <div className='font-Raleway rounded-3xl p-2 md:py-2 md:px-2 bg-slate-950 text-white flex justify-center items-center text-xs md:text-base'>
                                <span className='border-r border-white px-3 cursor-pointer'><FontAwesomeIcon className='pr-2 md:text-xl text-sm' icon={faThumbsUp} />{likes}</span>
                                <span className='px-3 cursor-pointer'><FontAwesomeIcon className='pr-2  md:text-xl text-sm' icon={faThumbsDown} /></span>
                            </div>
                            <div className='font-Raleway rounded-3xl p-2 md:py-2 md:px-5 bg-slate-950 text-white flex justify-center items-center cursor-pointer  text-xs md:text-base'>
                                <span className=''><FontAwesomeIcon className='pr-2  md:text-xl text-sm' icon={faShare} />Share</span>
                            </div>
                            <div className='font-Raleway rounded-3xl p-2 md:py-2 md:px-5 bg-slate-950 text-white flex justify-center items-center cursor-pointer text-xs md:text-base'>
                                <span className=''><FontAwesomeIcon className='pr-2  md:text-lg text-sm' icon={faScissors} />Clip</span>
                            </div>
                        </div>
                    </div>
                    { /* Discription box 👇  */}
                    <div className='bg-slate-950 text-white py-2 px-1  md:px-3 rounded-3xl font-Raleway'>
                        <div className='space-x-2 font-Raleway flex items-center text-sm font-[500]'><FontAwesomeIcon className='pl-2 text-xl' icon={faEye} /><span className='flex items-center '>{formatNumber(views)}</span> <span>Views</span></div>
                        <div className={`p-2 text-sm ${togglediscshowmore ? 'line-clamp-none' : 'line-clamp-3'}`}>
                            <span>{description}</span>

                        </div>
                        <div className='pt-2 px-3'>
                            <button onClick={() => SetToggleDiscShowMore(!togglediscshowmore)}>{togglediscshowmore ? 'Show Less' : 'Show More'}</button>
                        </div>
                    </div>

                </div>
                {/* Comment Section */}
            </div>
            <div className='lg:col-span-4 md:col-span-3 w-full  space-y-3'>
                {
                    siderecomandedvideos?.map((item) => (
                        <SideRecommendation key={item.id} item={item} />

                    ))

                }

            </div>

        </div>
    )
}

export default VideoPlayer
