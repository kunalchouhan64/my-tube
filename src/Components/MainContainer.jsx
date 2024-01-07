import React from 'react'
import Header from './Header/Header'
import Slidebar from './Sidebar/Slidebar'
import VideosContainer from './VideosContainer/VideosContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const togglemenu = useSelector((store) => store.togglemenu.togglemenu)
    return (
        <>
        <Header />
            <div className='h-auto w-auto overflow-hidden transition-all ease-in-out duration-300'>
              
                <div className=' flex'>
                    <div className={`${togglemenu ? 'md:w-[20%]' : 'md:w-auto'} `}>
                        <Slidebar />

                    </div>
                    <div className='md:w-full w-full md:px-0 b-700'>
                        <VideosContainer />

                    </div>
                </div>

            </div>
        </>
    )
}

export default MainContainer
