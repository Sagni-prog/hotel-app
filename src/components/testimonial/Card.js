import React from 'react'
import Profile from './Profile'
import Quotes from './Quotes'

function Card(props) {
  console.log(props.role);
  return (
    <div className='test--card'>
      <Profile guestName = {props.guestName} role= {props.role}  />
      <Quotes comment = {props.comment} />
    </div>
  )
}



export default Card