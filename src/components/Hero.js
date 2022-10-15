import React from "react";
import { Link, Routes, Route } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
        <div>
            <img className='home-image' src='../public/img/animeCity.png'></img>
            </div>
            <div className='cta-button'>
               <button><Link to='/start'>Join the Whitelist</Link></button> 
            </div>

           
        </div>
    )
}

export default Hero