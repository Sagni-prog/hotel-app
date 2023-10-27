import React from 'react'
import Card from './Card'

const data = [
  {
    guestName: 'Robera Insarmu',
    role: 'Front End',
    comment: 'Thank you for your hospitality and generosity! The food was top-notch.'
  },
  {
    guestName : 'Natnael Deyass',
    role: 'PM',
    comment: 'I am grateful to you and your team for the extraordinary service I enjoyed at your hotel.'
  }
  ,
  {
    guestName : 'Natnael Getacho',
    role: 'Musician',
    comment: 'Our hosts were kindhearted. The room was supremely comfortable. The accommodations were immaculate. '
  },
  {
    guestName : 'Sagni Alemayo',
    role: 'Developer',
    comment: 'I’ve never experienced the kind of hospitality I encountered in your home. What a Hotel it\'s!'
  }
]
function Cards() {
  return (
    <div className='test--cards'>
{
  data.map(dat=>{
    return <Card guestName = {dat.guestName} role = {dat.role} comment = {dat.comment} />
  })
}
    </div>
  )
}

export default Cards