import React from 'react';
import '../styles/IntroBanner.css'
import Nav from './Nav'
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';

export default function IntroBanner(params) {
  return(
    <div className="introBanner">
      <h1>Ross Duris</h1>
      <div className='socialIcons'>
        <span><SocialIcon url="https://github.com/duris" bgColor="#80003e" /></span>
        <span><SocialIcon url="https://twitter.com/ross_duris" bgColor="#80003e" /></span>
        <span><SocialIcon url="https://www.linkedin.com/in/rduris/" bgColor="#80003e" /></span>        
      </div>
    </div>
  )
}