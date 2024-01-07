import React, { useEffect, useState } from 'react'
import VideoComponent from '../VideoComponent/VideoComponent'
import SliderButtonMenu from '../SliderMenu/SliderButtonMenu'
import { YOUTUBE_VIDEO_API } from '../../../Utils/constant'
import { useDispatch } from 'react-redux'
import { ShowVideos } from '../Slices/VideosSlice'
import VideoShimmerUI from '../ShimmerUI/VideoShimmerUI'
import VideoShimmerComp from '../ShimmerUI/VideoShimmerComp'
import { Link } from 'react-router-dom'


const VideosContainer = () => {

  const dispatch = useDispatch()
  const [videos, SetVideos] = useState([])

  useEffect(() => {
    FetchVideos()
  }, [])
  const FetchVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API)
    const data = await res.json()
    console.log(data);
    dispatch(ShowVideos(data.items))
    SetVideos(data.items)

  };

  // console.log(videos);


  return (
    <>
      <div>
        <SliderButtonMenu />
        <div className='font-Raleway  p-4 sm:p-8 md:p-3 md:pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center justify-items-center'>
          {
            videos.length === 0 ? <div className='w-full pl-8 pt-10 md:pt-0 -z-20 md:px-0'><VideoShimmerComp /></div> :

              videos.map((items) => (
              <VideoComponent key={items.id} videos={items} />
              ))

          } </div>



      </div>
    </>
  )
}

export default VideosContainer
