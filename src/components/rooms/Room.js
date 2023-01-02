import React from "react";
import "./room.css";
import images from "../../constants/images";

const Room = () => {
  const { room_1 } = images;
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
    <div className='rooms_card_container'>
          <div className="room-wrap">
           <a href="#" className="img img-room">
           <img
        src={room_1}
        alt=""
              />
              </a>
            <div className="text p-5 text-center">
              <h3><a href="#">Suite Room</a></h3>
                <p  className="room-card-paragragh">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-0 mt-2"><span className="me-3 price">$450 <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
             </div>
          </div>
        <div className="room-wrap">
            <div className="text p-5 text-center">
              <h3><a href="#">Suite Room</a></h3>
                <p className="room-card-paragragh">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-0 mt-2"><span className="me-3 price">$450 <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
             </div>
             <a href="#" className="img img-room">
             <img
        src={room_1}
        alt=""
      />
              </a>
          </div>
          <div className="room-wrap">
           <a href="#" className="img img-room">
                <img
        src={room_1}
        alt=""
      />
              </a>
            <div className="text p-5 text-center">
              <h3><a href="#">Suite Room</a></h3>
                <p  className="room-card-paragragh">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-0 mt-2"><span className="me-3 price">$450 <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
             </div>
          </div>
       

    </div>
   
    {/* <div className='room__color room__font'>Room</div> */}
  </div>
    
  )
}

export default Room;
