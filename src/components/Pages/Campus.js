import React from 'react';
import '../../App.css';
import hcbgImage from "./xyz.jpg";
import './Campus.css';
import { Link } from 'react-router-dom';
import { CenterFocusStrong, Gradient } from '@material-ui/icons';
//export default function Campus() {
  //return <h1 className='campus'>CAMPUS</h1>;
//}  
const Campus = () => {
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
              <h2>Campus</h2>
            </div>
        
        <div className="fac">
          <h5>CAMPUS AMENITIES</h5>
  <div className="col">
        <div class="w3-card-4">
  <img src="images/hostel.jpg"/>
  <div class="w3-container w3-center">
    <h3>Accommodation </h3>
    <p> Banasthali University is a residential institution. There are 29 hostels with a capacity of housing 110 to 438 students. The network and Internet access has been extended to all hostels providing the students unlimited opportunities to unleash the power of the Internet. There are more than 400 fully equipped staff quarters of different types, ranging from one - storeyed houses to multi -storeyed modern apartments and one Working Women’s Hostel with 113 seats.</p>
  </div>
</div>
<div class="w3-card-4">
  <img src="images/fivefold.jpg"/>
  <div class="w3-container w3-center">
  <h3>Air Strip</h3>
    <p>There is a licensed air strip of 50,191,418 sq. meters in the Banasthali University which is used for training the students in gliding and flying. This has been one of the activities introduced as early as 1960 even before Banasthali  got the University status. A regular flying club, BVGFC (Banasthali Vidyapith Gliding and Flying Club)  has started on January 9, 2009.</p>
  </div>
</div>
<div class="w3-card-4">
  <img src="images/library.jpg"/>
  <div class="w3-container w3-center">
  <h3>LIBRARY</h3>
    <p>In the Central Library access to Internet is provided via around 8 Mbps Internet is provided via different modes such as BSNL leased line, VSNL leased line . The library has been using the LIBSYS, an Integrated Library Management software package with all the modules for the library housekeeping operations. The library online Catalogue (OPAC) has more than 1.60 lakhs records of books (Bibliographic Information) and 13,500 back volumes of periodicals. The library currently receives over 600 periodical titles of which 550 are subscribed while the remaining titles are received as gratis. About 9000 titles are accessible online under UGC-INFONET Consortia.</p>
  </div>
</div>
</div>
</div> 
<div className="events">
 	<h4>EVENTS</h4>
 	<p>"We didn't know we were making memories, We were just having fun."</p>
 	<div className="col">
 		<div className="events-col">
 			<img src="images/qe.jpg" width="500"/>
 			<div className="layer">
 				<h6>FESTIVALS</h6>
 			 </div>
 	</div>
 	<div className="events-col">
 			<img src="images/abc.jpg" width="1250"/>
 			<div className="layer">
 				<h6>CULTURAL FEST</h6>
 			 </div>
 	</div>
 	<div className="events-col">
 			<img src="images/asas.jpg" width="950"/>
 				<div className="layer">
 				<h6>TECHNICAL FEST</h6>
 			 </div>
 	</div>
 	

 </div>
<div className="containerpy-5">
        <p>  Banasthali University has been a leading institution in the field of women education since 1935. The institution has an area extending to 850 acres having numerous buildings of different statures and sizes, housing various academic and administrative blocks.
          </p>

          <img src='images/ing.png'  />
          
    
          <p> 
          The campus has been broadly divided into the University division, School division and the residential blocks and is capable of fulfilling the basic requirements of its inhabitants.
          </p>  
        </div>  
      </div>  

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
}

export default Campus