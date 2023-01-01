import React from 'react'

function AmenitiesOne(props) {
    console.log(props)
    const data = props.dataOne.map(dat=>{
     return <li> <a href="#"> {dat}</a></li>
    })
  return (
    <div>
      <ul>
        {data}
      </ul>
    </div>
  )
}

export default AmenitiesOne