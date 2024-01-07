import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons'
import ToggleWithLogo from './ToggleWithLogo'
import { API_KEY } from '../../../Utils/constant'
import { SEARCH_FETCH_VIDEO_API, YOUTUBE_SEARCH_API } from '../../../Utils/constant'
import { Link } from 'react-router-dom'

const Header = () => {

    // Storing seach queries from input box 
    const [searchquery, SetSearchQuery] = useState('')
    // Setting all fetched queries to state varibale 
    const [showsearchQueries, SetShowSearchQueries] = useState([])

    useEffect(() => {
        // calling the api fetch function (Debouncing Feature) 
        const timer = setTimeout(() => getSearchSuggetions(), 200);

        // Clearing Out the previus timer 
        return () => {
            clearInterval(timer)
        }
    }, [searchquery])

    const getSearchSuggetions = async () => {
        const response = await fetch(YOUTUBE_SEARCH_API + searchquery)
        const data = await response.json()
        // console.log(data);
        SetShowSearchQueries(data[1])
    }




    return (
        <>
            <div id='myheader' className='myheader bg-white flex justify-center gap-2 sm:justify-center md:justify-around items-center md:px-10 bgred-500 w-full py-1 md:py-0 shadow-sm shadow-gray-300 top-0 sticky z-50'>
                <div>
                    <div>
                        <ToggleWithLogo />
                    </div>
                </div>
                <div className='flex items-center justify-center w-1/2 md:w-full z-40'>
                    <div className='py-1 sm:w-1/3 w-1/2 rounded-l-2xl border border-gray-400 md:px-5 focus:border-blue-600 font-Raleway flex items-center'>
                        <FontAwesomeIcon className='hidden md:block text-sm' icon={faMagnifyingGlass} />
                        <input value={searchquery} onChange={(e) => SetSearchQuery(e.target.value)} type="text" className='outline-none px-4 md:px-3 md:text-base text-sm placeholder-black' name="" id="" placeholder='Search' />

                    </div>
                    <div className='flex justify-center items-center py-2 px-3 bg-gray-200 rounded-r-2xl border border-gray-400'>
                        <FontAwesomeIcon className='cursor-pointer text-sm md:text-base' icon={faMagnifyingGlass} />

                    </div>
                    <div className='ml-2 bg-gray-700 h-8 w-8 md:h-9 md:w-9 flex justify-center items-center rounded-full  hover:scale-110 transition-all duration-300 ease-linear'>
                        <FontAwesomeIcon className='text-sm md:text-lg  ' style={{ color: "white", cursor: 'pointer' }} icon={faMicrophone} />
                    </div>

                    {/*Suggetion */}
                    {
                        showsearchQueries.length === 0 ? '' : <ul className='fixed  bg-zinc-800 rounded-xl p-2 md:p-5 w-full left-0 md:w-[32rem] top-12 h-auto z-50 text-white md:space-y-1 md:left-[35%]'>
                            {
                                showsearchQueries.map((item, index) => (
                                    <Link key={index} to={`/results?search_query=${item}`}>
                                    <li className='flex items-center space-x-4 font-Raleway cursor-pointer hover:bg-zinc-900 p-2'><FontAwesomeIcon className='cursor-pointer text-sm md:text-sm' icon={faMagnifyingGlass} /> <span>{item}</span></li></Link>
                                ))
                            }

                        </ul>
                    }

                </div>
                <div>
                    <div className='md:h-10 md:w-10 h-8 w-8 flex justify-center items-center border border-gray-500 rounded-full'>
                        <FontAwesomeIcon className='text-sm md:text-lg' icon={faUser} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
