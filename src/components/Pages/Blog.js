import React from 'react';
import hcbgImage from "./blog1.jpg";
import './Blog.css';
import { Link } from 'react-router-dom';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
const Blog = () => {
  const data = [
    { name:"2014", users: 60 },
    { name:"2016", users: 65 },
    { name: "2018", users: 80 },
    { name: "2020", users: 90 },
  ];
  return (
    <>
    <div className= 'hero-container'
            
            style={{
            backgroundImage: 'url('+hcbgImage+')',
            //backgroundBlendMode: 'luminosity',
            //opacity:0.8,
           
         
            //blurRadius: 90,
            backgroundSize: "cover",
            height: "50vh",
            color: '#f5f5f5',
          backgroundPosition: "center",
          
            }}>
              <h2>BLOG</h2>
            </div>
    
<div class="row">
  <div class="leftcolumn">
  <div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="images/516.jpg" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">Apaji Mela marks founder's day</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="images/512.jpg" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">Dusshehra ceebration</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="images/127'.png" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">Gliding Flying Club</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="images/514.jpeg" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">SOA-School of automation</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="images/31.jpg" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">Horse riding</div>
</div>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="images/5.jpg" alt="Cinque Terre" width="600" height="400" />
  </a>
  <div class="desc">Cultural Fest celebration</div>
</div>
<br/>
<br/>
<div class="testimonials">
  
    <h6>What our students say</h6>
 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 	tempor incididunt ut labore et dolore magna aliqua.</p>
  
<div class="row">
 		<div class="test-col">
 			<img src="images/pic.png" />
 			
 			<div> 				
 				<p>"Banasthali Vidyapith is a place I would never regret going to"</p>
 				<h3>Rajkumari</h3>
 				<i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="far fa-star"></i>
 			 </div>
 		</div>    
 	<div class="test-col">
 			<img src="images/pic.png" />
 			<div>
 				<p>"Banasthali vidyapith overall is a good university and if you really want a happy college with a lot of fun, learning environment, blissful nature , and a family full of friends then it will be best university for you."</p>
 				<h3>Surekha</h3>
 	
 	
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
                </div>
                </div>
                </div>
</div>
    </div>
   
    <div class="rightcolumn">
    <div class="cardd">
     
      <img src="images/naac2.jpg"  />
  <div class="containerr">
    <h4><b>NAAC accredation</b></h4>
  </div>
      <p>The institute has been approved by NAAC (National Assessment and Accreditation Council) with an ‘A’ grade and is recognized by the UGC (University Grants Commission). It provides education to girls from school level to Ph.D. level.</p>
    </div>
   <br />
  
      <h3>Popular Post</h3>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/124.png"  />
    </div>
    <div class="flip-card-back">
      <h1>Cultural Fest</h1>
      <p>By: Mohan Kumawand </p>
      
    </div>
  </div>
      </div>
      <br/>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/128'.png"  />
    </div>
    <div class="flip-card-back">
      <h1>GYM</h1>
      <p>By: Banasthali Social Media</p>
      
    </div>
  </div>
      </div>
      <br/>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="images/129'.png"  />
    </div>
    <div class="flip-card-back">
      <h1>Independence Day</h1>
      <p>By:Banasthali Social Media</p>
    </div>
  </div>
      </div>
      
    </div>
    </div>
    <section className="place">
  
    <div style={{ textAlign: "center" }}>
      <h1>Placement Statistics
      </h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#e56d75"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 80,
            bottom: 20,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#026aa7" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
    </section>

    <div className='footer-container'>
      <section className='footer-subscription'>
        
        <h4>About Us</h4>	
	<p>Banasthali Vidyapith, established in 1935, is the world’s largest residential university for women, doing pioneering work in its field for more than eight decades.In the last few years Banasthali Vidyapith has made its mark in the rankings and ratings.The Vidyapith has received the highest possible accreditation, A++ from NAAC and is the only Women’s’ University to feature among the top 100 Universities in the NIRF university rankings of India; an accomplishment, that it has been achieving continuously since the ranking commenced. The university has also been felicitated with FICCI’s ‘The University of the Year’ Award 2015, and the ‘Best Value Based Educational Institution Award’ in 3rd CCI Technology Education Excellence Awards 2015 </p>
        <p class="specialPara"> Copyright &copy; Vidyapith Squad 2021 All Rights Reserved.</p>
	<p class="para">Made with &hearts; in India</p>
  <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Keep In Touch
             
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>     
		
	
  </section>
</div>
    


          </>
          
            );
          };
  
          
  
export default Blog