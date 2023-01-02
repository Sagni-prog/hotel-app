import React from 'react'
import './service.css'
import { IoRestaurantOutline } from 'react-icons/io5'
import { MdPool } from 'react-icons/md'
import { FaHotTub } from 'react-icons/fa'
 
const Service = () => {
  return (
    <div className='service__bg__gray'>
        <div className='container py-5'>
           <div  className='flex align-center justify-center w-100 mb-5'>
                <h1 className='font-relway font-52 service__color__golden pb-5'>
                    Services
                </h1>
           </div>
             <div className='service__grid service__grid__col__3 gap-4'>
                  <div className='service__card flex flex-col gap-3 service__border pb-5'>
                    <div className='flex justify-center pt-4'>
                       <IoRestaurantOutline className = "font-52 service__color__golden"/>
                    </div>
                    
                    <div className='flex justify-center '>
                      <h4 className='font-relway font-32 service__color__golden'>
                           RESTAURANT
                      </h4>
                    </div>
                    <div>
                        <p className='px-3 service__color__light__gray font-16 font-relway line-height'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                       
                  </div>
                  <div className='service__card flex flex-col gap-3 service__border pb-5'>
                    <div className='flex justify-center pt-4'>
                       <MdPool className = "font-52 service__color__golden"/>
                    </div>
                    
                    <div className='flex justify-center '>
                      <h4 className='font-relway font-32 service__color__golden'>
                           POOL
                      </h4>
                    </div>
                    <div>
                        <p className='px-3 service__color__light__gray font-16 font-relway line-height'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                       
                  </div>
                  <div className='service__card flex flex-col gap-3 service__border pb-5'>
                    <div className='flex justify-center pt-4'>
                       <FaHotTub className = "font-52 service__color__golden"/>
                    </div>
                    
                    <div className='flex justify-center '>
                      <h4 className='font-relway font-32 service__color__golden'>
                           SPA
                      </h4>
                    </div>
                    <div>
                        <p className='px-3 service__color__light__gray font-16 font-relway line-height'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                       
                  </div>
{/* 
                  <div className='card flex flex-col gap-3 service__border pb-5'>
                    <div className='flex justify-center pt-4'>
                       <IoRestaurantOutline className = "font-52 service__color__golden"/>
                    </div>
                    
                    <div className='flex justify-center '>
                      <h4 className='font-relway font-32 service__color__golden'>
                           RESTAURANT
                      </h4>
                    </div>
                    <div>
                        <p className='px-3 service__color__light__gray font-16 font-relway line-height'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                       
                  </div>
                  <div className='card flex flex-col gap-3 service__border pb-5'>
                    <div className='flex justify-center pt-4'>
                       <IoRestaurantOutline className = "font-52 service__color__golden"/>
                    </div>
                    
                    <div className='flex justify-center '>
                      <h4 className='font-relway font-32 service__color__golden'>
                           RESTAURANT
                      </h4>
                    </div>
                    <div>
                        <p className='px-3 service__color__light__gray font-16 font-relway line-height'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                       
                  </div>
                  <div className='card flex flex-col gap-3 service__border pb-5'>
                    <div className='flex justify-center pt-4'>
                       <IoRestaurantOutline className = "font-52 service__color__golden"/>
                    </div>
                    
                    <div className='flex justify-center '>
                      <h4 className='font-relway font-32 service__color__golden'>
                           RESTAURANT
                      </h4>
                    </div>
                    <div>
                        <p className='px-3 service__color__light__gray font-16 font-relway line-height'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                       
                  </div> */}
                 
             </div>
        </div>
    </div>
  )
}

export default Service