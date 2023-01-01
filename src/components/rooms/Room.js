import React from 'react'
import './room.css'

const Room = () => {
  return (
  <div className='room__container room_container_bg'>
    <div className='container'>
       <div className='room_header'>
          <div className="room_heading_section">
             <span className="subheading">Our Rooms</span>
             <h2>Featured Rooms</h2>
          </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate" data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">
<div class="room-wrap d-md-flex flex-md-column-reverse">
<a href="room-single.html" class="img img-room" style="background-image: url(images/room-1.jpg);">
</a>
<div class="text p-5 text-center">
<h3><a href="room-single.html">Suite Room</a></h3>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<p class="mb-0 mt-2"><span class="me-3 price">$450 <small>/ night</small></span><a href="#" class="btn-custom">Book Now</a></p>
</div>
</div>
</div>
   
    {/* <div className='room__color room__font'>Room</div> */}
  </div>
    
  )
}

export default Room