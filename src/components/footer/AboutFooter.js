import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


function AboutFooter() {
  return (
    <div className='about--footer'>
        <h1 className='hotel--name'>Central Hotel</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <ul className='about--footer-social-medias'>
            <li className='li-social-medias'>
                <a href="#" className='fa--icons'>
                    <FaTwitter />
                </a>
            </li>
            <li className='li-social-medias'>
                <a href="#">
                    <FaFacebook />
                </a>
            </li>
            <li className='li-social-medias'>
                <a href="#">
                    <FaInstagram />
                </a>
            </li>
           
        </ul>
    </div>
  )
}

export default AboutFooter