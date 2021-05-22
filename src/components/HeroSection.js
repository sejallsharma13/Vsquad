import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import hcbgImage from "./2.jpg";
import { Link } from 'react-router-dom';
//const [ setClick] = useState(false);
//const closeMobileMenu = () => setClick(false);

function HeroSection() {
    return (
        <div className= 'hero-container'
            
            style={{
            backgroundImage: 'url('+hcbgImage+')',
            //backgroundBlendMode: 'luminosity',
            //opacity:0.8,
           
         
            //blurRadius: 90,
            backgroundSize: "cover",
            height: "100vh",
            color: '#f5f5f5'
            }}
            >
            <h1>Vidyapith Squad</h1>
            <p>YEH AAM RAASTA NAHI HAI!</p>
            <div className= "button">
    	<a href="Calendar" class="btn">Calendar</a>
    	<a href="Video" class="btn">Watch Video</a>
          </div>
            
        </div>
    )
}

export default HeroSection
