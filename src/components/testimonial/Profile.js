import React from 'react'

import images from "../../constants/images";

import {FaQuoteLeft} from 'react-icons/fa'
const { profile } = images;

function Profile({guestName, role}) {
  return (
    <div className='test--profile'>
        <div className='guest--profile'>
         <img src={profile} alt= 'room 1' className='profile--picture'/>
         <FaQuoteLeft  className='faquoteLeft'/>
        </div>
        <div className='guest--info'>
            <p className='guest--name'>{guestName}</p>
            <p className='role'>{role}</p>
        </div>
    </div>
  )
}

export default Profile