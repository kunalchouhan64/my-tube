import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Slidebar from '../Sidebar/Slidebar'
import QueryVideoComp from './QueryVideoComp'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../../../Utils/constant'

const SearchQueryContainer = () => {
  useEffect(() => {
    HandleSearchQuesry()
  }, [])
  // Getting specific details of the video with useSerachParams hook 
  const [serachParams] = useSearchParams()
  const [showsqueryvideos, SetShowQueryVideos] = useState([])
  // Extracting exact query id
  const searchquery = (serachParams.get("search_query"));
  console.log(searchquery);


  const HandleSearchQuesry = async () => {
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchquery}&key=${API_KEY}`)
      const data = await response.json()
      // console.log(data);
      SetShowQueryVideos(data.items)
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <>
      <div className='w-full'>
        <Header />
        <div className='flex justify-start items-start w-full'>
          <div className='  md:min-w-[20%]'>

            <Slidebar />
          </div>
          <div className='  w-full py-5'>

            <QueryVideoComp queryvideos={showsqueryvideos} />



          </div>
        </div>
      </div>
    </>
  )
}

export default SearchQueryContainer
