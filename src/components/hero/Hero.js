<<<<<<< HEAD
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero__header">
      <a href="#" className="hero__">
        <img src="" className="hero__logo"></img>
      </a>
    </div>
  );
};
=======
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
>>>>>>> 6e14543867eebf3eb483e9a9ede3f2db4b47066a

export default Hero;
