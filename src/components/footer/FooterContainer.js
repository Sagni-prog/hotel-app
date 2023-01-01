import React from 'react'
import AboutFooter from './AboutFooter'
import FooterLinks from './FooterLinks'
import Location from './Location'
import ServiceFooter from './ServiceFooter'

function FooterContainer() {
  return (
    <div className='footer--container'>
      <AboutFooter />
      <ServiceFooter />
      <FooterLinks />
      <Location />
    </div>
  )
}

export default FooterContainer