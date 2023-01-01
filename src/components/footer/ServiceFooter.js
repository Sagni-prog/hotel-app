import React from 'react'
import AmenitiesOne from './AmenitiesOne'
import AmenitiesTwo from './AmenitiesTwo'

const data = {
    header: "Services",
    amenties : {
        data1 :['Free Wifi', 'Easy Booking', 'Restaurant', 'Swimming Pool']
    }
}

const data1 = ['Free Wifi', 'Easy Booking', 'Restaurant', 'Swimming Pool'];
const data2 = ['Beauty & Health', '60 Flatsceen TV', 'Cold AirCondition', 'Help& Support']
function ServiceFooter() {
    
  return (
    <div className='service--footer'>
        <h1>Services</h1>
        <p>{data.amenties.data1[0]}</p>
        <div>

        <AmenitiesOne dataOne= {data.amenties.data1} />
        <AmenitiesTwo dataTwo ={data.amenties.data1}  />
        {/* <AmenitiesOne data = {data1} />
        <AmenitiesTwo data ={data2} /> */}
        </div>
        
    </div>
  )
}

export default ServiceFooter