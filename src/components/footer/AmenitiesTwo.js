import React from 'react'

function AmenitiesTwo(props) {
  console.log(props)
  const data = props.dataTwo.map(dat=>{
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

export default AmenitiesTwo