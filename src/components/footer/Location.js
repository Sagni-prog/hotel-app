import React from "react";
import {FaMap} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'

export default function Location() {
  
  return <div className="location">
    <h1>Have a Question?</h1>
    <div className="location--children">
    <p>
      <FaMap className="icons famap" />
      <span>203 Fake St. Mountain View, San Francisco, California, USA</span>

    </p>

    <p>
      <FaPhone className="icons" />
     +25197837834743
      
    </p>

    <p>
      <FaLocationArrow className="icons" />
      <a href="mailto:lorem@gmail.com" target='_blank'>lorem@gmail.com</a>
    </p>
    </div>
  </div>;
}