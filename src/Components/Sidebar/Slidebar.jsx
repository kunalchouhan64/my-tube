import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse, faS, faFileInvoice, faUser,
    faClockRotateLeft, faPlay, faThumbsUp, faClock, faFire, faTowerCell, faMusic, faClapperboard, faNewspaper, faGamepad, faLightbulb, faMicrophoneLines, faVestPatches
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Slidebar = () => {

    const togglemenu = useSelector((store) => store.togglemenu.togglemenu)
    return (
        <>

            <div className={`sidebar transition-all duration-300 ease-linear bg-white ${togglemenu ? ' flex fixed transform flex-col justify-start items-start p-1 sm:p-3 overflow-y-scroll overflow-hidden h-[100vh] scroll-smooth transition-all ease-linear duration-300' : 'hidden  transform -translate-x-56'} `}>
                <div className='space-y-1 md:space-y-1 border-b border-gray-700 py-2'>
                    <div className='bg-slate-800 hover:bg-slate-900  transition-all duration-300 ease-linear text-white font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='md:text-base text-xs' icon={faHouse} /></div> <span className='hidden md:block'>Home</span> </div>

                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faS} /></div> <span className='hidden md:block'>Shorts</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faFileInvoice} /></div> <span className='hidden md:block'>Subsciption</span> </div>

                </div>
                <div className=' md:space-y-1 border-b border-gray-700 py-2'>
                    <div className='hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faUser} /></div> <span className='hidden md:block'>Your Channel</span> </div>

                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faClockRotateLeft} /></div> <span className='hidden md:block'>History</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faPlay} /></div> <span className='hidden md:block'>Your Videos</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faClock} /></div> <span className='hidden md:block'>Watch Later</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faThumbsUp} /></div> <span className='hidden md:block'>Liked Videos</span> </div>

                </div>
                <div className=' md:space-y-1 border-b border-gray-700 py-2'>
                    <div className='hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faFire} /></div> <span className='hidden md:block'>Trending</span> </div>

                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faMusic} /></div> <span className='hidden md:block'>Music</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faClapperboard} /></div> <span className='hidden md:block'>Movies</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faTowerCell} /></div> <span className='hidden md:block'>Live</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faNewspaper} /></div> <span className='hidden md:block'>News</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faGamepad} /></div> <span className='hidden md:block'>Gaming</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faLightbulb} /></div> <span className='hidden md:block'>Learnings</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faMicrophoneLines} /></div> <span className='hidden md:block'>Podcast</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faVestPatches} /></div> <span className='hidden md:block'>Fashion & Beauty</span> </div>


                </div>
                <div className=' md:space-y-1 border-b border-gray-700 py-2'>
                    <div className='hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faFire} /></div> <span className='hidden md:block'>Trending</span> </div>

                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-base' icon={faMusic} /></div> <span className='hidden md:block'>Music</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faClapperboard} /></div> <span className='hidden md:block'>Movies</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faTowerCell} /></div> <span className='hidden md:block'>Live</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faNewspaper} /></div> <span className='hidden md:block'>News</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faGamepad} /></div> <span className='hidden md:block'>Gaming</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faLightbulb} /></div> <span className='hidden md:block'>Learnings</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faMicrophoneLines} /></div> <span className='hidden md:block'>Podcast</span> </div>
                    <div className=' hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear text-black font-Raleway rounded-lg px-4 md:px-8 w-12 md:w-40 p-2 text-xs flex items-center justify-start space-x-4 font-[500] cursor-pointer'><div><FontAwesomeIcon className='text-lg' icon={faVestPatches} /></div> <span className='hidden md:block'>Fashion & Beauty</span> </div>


                </div>
            </div>
        </>
    )
}

export default Slidebar
