import React from 'react'
import {FaChevronRight} from 'react-icons/fa'

function AmenitiesTwo(props) {
  console.log(props)
  const data = props.dataTwo.map(dat=>{
   return <li className='amenities--li'> <FaChevronRight /> <a href="#"> {dat}</a></li>
  })
return (
  <div>
    <ul>
      {data}
    </ul>
  </div>
)
}

export default AmenitiesTwo