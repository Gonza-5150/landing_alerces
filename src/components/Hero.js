import React from 'react';
import "./Hero.css";

const Hero = ({imageSrc})=> {
    return <div className="hero">
        <img src={imageSrc} alt="travel" className="hero_image"/>
        <h1 className='hero_title'>Los Alerces, simple.</h1>
    </div>
}; 

export default Hero;