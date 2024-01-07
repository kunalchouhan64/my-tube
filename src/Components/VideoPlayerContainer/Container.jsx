import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Slidebar from '../Sidebar/Slidebar'
import VideoPlayer from './VideoPlayer'
import { useDispatch } from 'react-redux'
import { HideShowMenu } from '../Slices/ToggleMenu'

const Container = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(HideShowMenu(false))
    }, [])

    return (

        <>
            <div>
                <Header />
                <div className='flex justify-start items-start'>
                    <Slidebar />
                    <VideoPlayer />
                </div>
            </div>
        </>
    )
}

export default Container
