import React from 'react'
import { MdSchedule } from 'react-icons/md'
import { IoEyeOutline } from 'react-icons/io5'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import { MdComment } from 'react-icons/md'
// import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'
import images from "../../constants/images";
 import './singleroomstyle.css'
import Footer from '../footer/Footer'


 function Single() {
  const { room_1 } = images;
  return (
    <div>
    <div className='room__container room_container_bg'>
    <div className='containery'>
    <div className = 'bg-white mb-l'> 
    <div className='container bg-white '>
        <div className='container2 gap-4 flex mt-3'>
             <div className='w-100 flex flex-col gap-2 mb-l'>
                  <div className='detail-img mt-1 mb-2'>
                      <img src ={room_1} alt = '' />
                  </div>
                 

                  <div className='title'>
                      <h1 className='font-montserrat color-black '>Luxury Room</h1> 
                  </div>

                  <div className='title w-80 border-bottom'>
                      <p className='font-montserrat color-dark font-weight font-16 line-height-1-5 '>
                      When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                     </p> 
                     <div class="d-md-flex mt-5 mb-5">
                      <ul class="list">
                      <li><span>Max:</span> 3 Persons</li>
                      <li><span>Size:</span> 45 m2</li>
                      </ul>
                        <ul class="list ms-md-5">
                        <li><span>View:</span> Sea View</li>
                        <li><span>Bed:</span> 1</li>
                        </ul>
                        </div>

               
                  </div>
           
                 <div className='w-60 h-100 mr-3 mt-3'>
                     <div className='flex align-center gap-1 mb-1'>
                         <div className='dash-catagory'></div>
                            <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700 '>
                                Tags
                            </h1>    
           
                     </div>
                     <div className='flex justfy-center flex-wrap gap-1'>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>Hotel</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>cafe</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>Wifi</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>Restaurant</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>Relax</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>Pool</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>TV</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>BAR</a>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <a className='link font-14 color-white font-montserrat p-1' href = '#'>Business</a>
             </div>
        </div>   
                </div>
   
                 
             </div>
             
          </div>
    </div>
  
    </div>
    <div className='room-side'>
<div class="col-lg-4 sidebar ps-md-4">
<div class="sidebar-box bg-light rounded">
<form action="#" class="search-form">
<div class="form-group">
<span class="icon fa fa-search"></span>
<input type="text" class="form-controll" placeholder="Search..."/>
</div>
</form>
</div>
<div class="sidebar-box">
<h3>Hotel Services</h3>
<div class="d-md-flex">
<ul class="categories me-md-4">
<li><a href="#">Free Wifi</a></li>
<li><a href="#">Easy Booking</a></li>
<li><a href="#">Restaurant</a></li>
<li><a href="#">Swimming Pool</a></li>
</ul>
<ul class="categories ms-md-4">
<li><a href="#">Beauty &amp; Health</a></li>
<li><a href="#">60" Flatscreen TV</a></li>
<li><a href="#">Cold Aircondition</a></li>
<li><a href="#">Help &amp; Support</a></li>
</ul>
</div>
</div>


<div class="sidebar-box">
<h3>Paragraph</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
</div>
</div>
    </div>
    </div>
    </div>
    <div className='room_head'>
          <div className="room_heading_sectionn">
             <h2>Related Rooms</h2>
        
          </div>
      </div>
      <div className='rooms_card_container'>
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
      
         
       

    </div>
    <Footer />
    </div>
  )
}
export default Single