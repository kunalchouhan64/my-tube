import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideRecommendation = ({ item }) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        // Navigate to the new video URL
        navigate(`/watch?v=${id}`);
    };

    // const videos = useSelector((store) => store.videos?.videos)
    // console.log("Recomandation comp", videos);

    // Function for convert number to readable stream 
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


            <div onClick={() => handleClick(item.id)} key={item.id} className='flex items-start justify-start gap-2 font-Raleway flex-col sm:flex-col md:flex-row'>
                <div><img className='h-auto w-full rounded-xl' src={item.snippet?.thumbnails?.maxres?.url} alt="thumbnail" /></div>
                <div>
                    <span className='line-clamp-2 py-1 font-semibold'>{item.snippet.title}</span>
                    <span className='font-[500] font-Poppins'>{item.snippet.channelTitle}</span>
                    <div className='space-x-2 text-sm'>
                        <span >{formatNumber(item.statistics.viewCount)} Views</span>
                        <span>1 Year ago</span>
                    </div>

                </div>
            </div>


        </>
    )
}

export default SideRecommendation
