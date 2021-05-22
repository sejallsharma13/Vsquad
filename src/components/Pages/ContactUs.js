import React from 'react';
import './ContactUs.css';
import hcbgImage from "./background.jpg";
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return( 
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
              <h2>Contact Us</h2>
            </div>
            <section class="cont">
            <section class="location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.643777765389!2d75.87287571476158!3d26.402693883349947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0c282ffffff%3A0x4776f298b0f0587e!2sBanasthali%20University!5e0!3m2!1sen!2sin!4v1618564919524!5m2!1sen!2sin"
              title="This is a unique title"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              frameBorder="0"
              style={{ border: 0 }}
            />
            </section>
            <div class="row">
         <div class="contact-col">
          <div class="i">
            <img src="images/home.jpg" width="30"/>
            <span>
              <h5>  XYZ Road, ABC Building</h5>
              <p>   Vanasthali,Rajasthan</p>
            </span>
            </div>
            <div class="i">
           <img src="images/tel.png" width="30" />
            <span>
              <h5>+0120-6975432</h5>
              <p>Wednesday to Monday, 9AM to 6pm</p>
            </span>
         </div>
         <div class="i">
           <img src="images/del.jpg" width="30"/>
            <span>
              <h5>bv@gmail.com</h5>
              <p>Email us your query</p>
            </span>
         </div>
            </div>
            <div class="contact-coll">
           <form action="form-handler.php" method="post">
           <input type="text" name="Name" placeholder="Enter Your Name" Required />
           <input type="email" name="Email" placeholder="Enter Email" Required />
           <input type="text" name="Subject" placeholder="Enter Your ID" Required />
          <textarea rows="8" name="Message" placeholder="Message" required></textarea>
           <button type="Submit" class="btn red-btn">Send Message</button>
         </form>
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

}
export default ContactUs;