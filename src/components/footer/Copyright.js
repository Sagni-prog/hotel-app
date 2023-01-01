import React from 'react'
import {FaCopyright} from 'react-icons/fa'
const year = new Date().getFullYear();
function Copyright() {
  return (
    <div className='copyright'>
        <p>Copyright © {year} All rights reserved </p>
    </div>
  )
}

export default Copyright