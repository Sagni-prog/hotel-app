import React from 'react'
import Copyright from './Copyright'
import './footer.css'
import FooterContainer from './FooterContainer'

const Footer = () => {
  return (
    <div className='footer__color footer'>
        <FooterContainer />
        <Copyright />
    </div>
  )
}

export default Footer