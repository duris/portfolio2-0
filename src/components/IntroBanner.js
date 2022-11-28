import React from 'react';
import '../styles/IntroBanner.css'
import Nav from './Nav'
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import workImg from '../images/workplace.png'

export default function IntroBanner(params) {
  return(
    <div className='bannerWrap'>
      <img src={workImg} id="bannerImg"></img>
    
      <div className="introBanner" id="homeTab">      
    
        <h1>Ross Duris</h1>
        
        <div className='socialIcons'>
          <span><SocialIcon url="https://github.com/duris" target="_blank" bgColor="#80003e" /></span>
          <span><SocialIcon url="https://twitter.com/ross_duris" target="_blank" bgColor="#80003e" /></span>
          <span><SocialIcon url="https://www.linkedin.com/in/rduris/" target="_blank" bgColor="#80003e" /></span>        
        </div>
      </div>
    </div>
  )
}