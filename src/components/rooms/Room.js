import React from 'react'
import './room.css'
import images from '../../constants/Images'

const { room_1 } = images

const Room = () => {
  return (
    <div className='room__color room__font'>
      <img src= {room_1} alt = '' />
    </div>
  )
}

export default Room