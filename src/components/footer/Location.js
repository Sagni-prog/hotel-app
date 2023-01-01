import React from "react";
import {FaMap} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'

export default function Location() {
  
  return <div className="location">
    <h1>Have a Question?</h1>
    <p>
      <FaMap />
      203 Fake St. Mountain View, San Francisco, California, USA

    </p>

    <p>
      <FaPhone />
     +25197837834743
      
    </p>

    <p>
      <FaLocationArrow />
      info@yourdomain.com
    </p>
  </div>;
}