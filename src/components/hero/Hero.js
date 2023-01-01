import React from 'react'
import './hero.css'
import Images from '../../constants/Images'

const { restBar } = Images

const Hero = () => {
  return (
    <div className='hero__font hero__color'>
        <img src = { restBar } alt = "hello" />
    </div>
  )
}

export default Hero