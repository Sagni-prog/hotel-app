import React from 'react'
import {FaChevronRight} from 'react-icons/fa'

function AmenitiesOne(props) {
    console.log(props)
    const data = props.dataOne.map(dat=>{
     return <li className='amenities--li'> 
      <FaChevronRight />
      <a href="#"> {dat}</a></li>
    })
  return (
    <div>
      <ul >
        {data}
      </ul>
    </div>
  )
}

export default AmenitiesOne