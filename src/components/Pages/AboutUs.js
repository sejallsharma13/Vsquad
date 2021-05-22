import React from 'react';
import '../../App.css';
import hcbgImage from "./200.jpeg";
import { Link } from 'react-router-dom';
import './AboutUs.css';
import { CenterFocusStrong, Gradient } from '@material-ui/icons';
//export default function Campus() {
  //return <h1 className='campus'>CAMPUS</h1>;
//}  
const AboutUs = () => {
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
              <h2>ABOUT US</h2>
            </div>

            <h6>Our Alumni</h6>
<div class="roww">
  <div class="column">
    <div class="card2">
      <img src="images/meira.jpg" alt="Jane"  width="100" />
      <div class="containerr">
        <h2>Meira Kumar</h2>
        <p class="title">Former Speaker of the Lok Sabha</p>
        
        
        
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card1">
      <img src="images/dogara2.jpg" alt="Jane"  width="100" />
      <div class="container">
        <h2>Sunita Godara</h2>
        <p class="title">Former Indian marathon runner</p>
        
       
        
      </div>
    </div>
  </div>
  <div class="column">
  <div class="card">
      <img src="images/avni.jpg" alt="Jane"  width="100" />
      <div class="container">
        <h2>Avani </h2>
        <p class="title">Flight Lieutenant</p>
        
       
        
      </div>
    </div>
    </div>
</div>
            <section class="about-us">
      <div class="row">
        <div class="about-col">
          <h1>University with a difference</h1>
          <p>With students coming from different parts of India, the 850 acre Campus Banasthali today with 16000 students itself is a mini India echoing the lines of Gurudev Rabindranath Tagore in National anthem “Panjaba-Sindhu-Gujarata-Maratha Dravida-Utkala-Banga.”

The evolution of Banasthali is nothing short of a fairy tale in which the parents freedom fighter and Gandhian Pt Hiralal Shastri and Padma Bhushan & Jamnalal Babaj Award winner Smt Ratan Shastri took up the mission with passion for setting up an institution at Banasthali to fulfill the desire of their beloved daughter Shantabai who died at a very young age but had sown the seeds of a school built with mud bricks made by her own hands for educating girls.</p>

        </div>
        <div class="about-col">
          <img src="images/41.jpg" />
        </div>
      </div>
      
    </section>
    <section class="about-uss">
      <div class="row">
        <div class="about-coll">
        
        <img src="images/1234.png" />
         
        
      </div>
      <div class= "blog-r">
      <p>Banasthali today has the pride of having been chosen as a Faculty Development Centre under the MHRD Govt of India Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching (PMMMNMTT) as well as for hosting Atal Incubation Centre (AIC) by NITI Aayog. Apart from various National Rankings which include India Today #2, FICCI University of the year 2015, NAAC A grade, MHRD NIRF 29, in recent past, Banasthali has been in national and international media attention for getting Quacquarelli Symonds QS Asia University Ranking, QS BRICS Ranking, Diamond status under QS i-Gauge Indian University Rating and the overall Four Star Ranking in - QS Stars Rated for Excellence with 5 Stars for each for Teaching, Employability, Facilities, Arts & Culture and Inclusiveness. Being a comprehensive university, Banasthali offers graduate and post-graduate programmes in a vast variety of disciplines such as Arts, Humanities, Social Sciences, Bio-technology, Bio-science, Computer Science, Mathematical Sciences, Physical Sciences, Electronics, Engineering, Earth Sciences, Fine Arts, Management, Aviation Science, Education, Home Science, Design, Pharmacy, Law, Commerce and Journalism & Mass Communication. Globally, STEM disciplines have always been considered to be a male domain. </p>

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
  )
}
export default AboutUs