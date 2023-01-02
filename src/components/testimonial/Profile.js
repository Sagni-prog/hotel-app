import React from 'react'
import images from "../../constants/images";
import {FaQuoteLeft} from 'react-icons/fa'
const { room_1 } = images;

function Profile() {
  return (
    <div className='test--profile'>
        <div className='guest--profile'>
         <img src={room_1} alt= 'room 1' className='profile--picture'/>
         <FaQuoteLeft  className='faquoteLeft'/>
        </div>
        <div className='guest--info'>
            <p className='guest--name'>Robera Insarmu</p>
            <p className='role'>Front End</p>
        </div>
    </div>
  )
}

export default Profile