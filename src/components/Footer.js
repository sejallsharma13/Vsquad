import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
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

export default Footer;