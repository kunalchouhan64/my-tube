
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/Header/yt_logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { HideShowMenu } from '../Slices/ToggleMenu'
import { Link } from 'react-router-dom'

const ToggleWithLogo = () => {
    const dispatch = useDispatch()
    const togglemenu = useSelector((store)=> store.togglemenu.togglemenu)
    // console.log(togglemenu);

    return (
        <>
            <div className='flex items-center justify-center space-x-3 transition-all duration-300 ease-linear'>
                <FontAwesomeIcon onClick={() => dispatch(HideShowMenu(false))} className={`cursor-pointer ${togglemenu ? 'inline-block' : ' hidden'}`} style={{ fontSize: "22px" }} icon={faBars} />
                <FontAwesomeIcon onClick={() => dispatch(HideShowMenu(true))} className={`cursor-pointer ${togglemenu ? 'hidden' : 'inline-block '}`} style={{ fontSize: "22px" }} icon={faX} />
               <Link to='/'> <img className='md:h-12 h-9' src={logo} alt="" /></Link>
            </div>
        </>
    )
}

export default ToggleWithLogo
