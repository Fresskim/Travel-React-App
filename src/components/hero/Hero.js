import React from 'react'
import './HeroStyles.css'
import { AiOutlineSearch } from 'react-icons/ai'

import Video from '../../assets/video-1.mp4'

export default function Hero() {
  return (

      <div className="hero">
        <video autoPlay loop muted id='video'>
            <source src={Video} type="video/mp4"/>
        </video>
        <div className="overlay"></div>
        <div className="content">
            <h1>Welcome to Freskim's Travel Blog</h1>
            <p>This website is filled with travel planning tips, city guides, and adventures from 115 countries on all seven continents.</p>

            <form className='form'>
                <div>
                    <input type="text" placeholder='Type Your Favourite Destination'/>
                </div>
                <div>
                    <button><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>

      </div>
    
  )
};
