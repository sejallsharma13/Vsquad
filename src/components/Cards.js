import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
    <div className="about-us" >
      <div className="row">
        <div className="about-col">
          <h1>Vice Chancellor's message...</h1>
          <p>“Over the generations Banasthali Vidyapith has nurtured women leaders in all walks of life and training our students through the unique ideology of five fold education, we are committed to grooming a new generation of "the first woman to..." scale unreached heights. 'Brand Banasthali' should become a new model of higher education"</p>
        </div>
        <div className="message">
          <img src="images/vc.jpg" />
        
      </div>
  </div>
      
    </div>
    <section className="activity">
   	<h2>EXPLORE</h2>
   	<p>Banasthali Vidyapith (Banasthali University) is the largest fully residential women's university in the world, located in the Tonk district of the Indian state of Rajasthan.It is a deemed university offering programs at the secondary, senior secondary, undergraduate, and postgraduate degree levels.Banasthali Vidyapith was founded on 6 October 1935 by freedom fighters and educationists Hiralal Shastri and Ratan Shastri. The institution was declared as a 'Deemed University' in 1983. While NAAC has re-accredited Banasthali Vidyapith at the highest possible ‘Grade A’ level in 2011, the Review Committee (Tandon Committee) of Ministry of HRD also appreciated the overall efforts of Vidyapith in the areas of Institutional Governance, Academic Achievements, Research, Student Progression, Infrastructure etc. and categorized Banasthali Vidyapith under ‘Category A’ list of ‘Institutions Deemed to be University’ in 2010. The university is featured in NIRF, QS I Gauge, and Times Higher Education[8] rankings. In 2020 , NAAC has accredited this university with A++ grading.</p>

   	<div className="row">
   		<div className="course-col">
   			<h3>Five-Fold</h3>
   			<p>Over the 75 years, the Vidyapith has developed into a national center for women’s education. The ‘Panchmukhi Shiksha’  which has evolved from experimentation, attempts a balance among the  five necessary aspects of education: Physical, Practical, Aesthetic, Moral and Intellectual.Its educational programme is based on the concept of "Panchmukhi Shiksha" and aims at all round harmonious development of personality. Emphasis on Indian culture and thought characterized by simple living and khadi wearing are hallmarks of life at Banasthali.</p>
   		</div>
   		<div className="course-col">
   			<h3>Campus</h3>
   			<p>The campus is a sprawling 850 acres, located about 80 kilometres from the capital city of Jaipur, in the Tonk district of Rajasthan, India.The campus has been broadly divided into the school division, the University division and the residential blocks. The residential blocks feature 29 hostels each with the capacity of housing up to 438 students.The Laxmi Bai maidan(field) which is approximately 2660 square kms. is used for parades and annual fairs, whereas the Vidula maidan (4195 sq. kms. approx.) has fields for games. The campus also features a swimming pool. The campus also features a licensed airstrip of 50,191,418 sq. metres, which is used to train the students in flying and guiding. Banasthali Vidyapith also features its own hospital called Apaji Arogya Mandir, a guest house for parents and official guests, and a community radio station called Radio Banasthali.</p>
   		</div>
   		<div className="course-col">
   			<h3>Department</h3>
   			<p>Banasthali Vidyapith provides school education from elementary to senior secondary. At the senior secondary level, student can opt for Science, Commerce or Humanities as their stream.The university offers 18 undergraduate programs in the disciplines of Mathematics, Science, Management, Commerce, Arts, Engineering, Aviation, Education, Design, Law, and Journalism. All the programs are of three years duration except for the Bachelor of Education (B.Ed) which is of 2 years, BA LLB which is of 5 years and the Bachelor of Technology (B.Tech) which is of 4 years.The university offers 61 masters programs and 32 Doctorates in the disciplines of Humanities, Social Sciences, Sciences, Law, Education, Commerce and Management.</p>
   		</div>
   	</div>
   </section>
   <section className="facilities">
    <h4>PANCH-MUKHI SHIKSHA</h4>
 	<p>Banasthali Vidyapith aims at the synthesis of spiritual value of the East and scientific spirit of the West. The main thrust of all the activities of the Banasthali Vidyapith is the development of a complete personality. The institution firmly believes that the personality consists of interdependent components, each being equally important requiring equal attention and can only be developed through a wholesome education. The ‘Panchmukhi Shiksha’  which has evolved from experimentation, attempts a balance among the  five necessary aspects of education: Physical, Practical, Aesthetic, Moral and Intellectual.</p>
<div className="row">
 		<div className="fac-col">
 			<img src="images/31.jpg" />
 				<h3>SPORTS</h3>
 				<p>Banasthali also has a great arrangement for games and other sports events. There is a Laxmi Bai maidan(around 26690 square meters), Vidula Maidan(41950 square meters), swimming pool</p>
 			 </div>
 	<div className="fac-col">
 			<img src="images/32.jpg" />
 				<h3>AVIATION</h3>
 				<p>Banasthali Vidyapith Gliding Flying Club (BVGFC) is part of the Banasthali University and its broad-based learning program with five (5) aircraft started its flying activities in the early 1960s.</p>
 			 </div>
 	<div className="fac-col">
 			<img src="images/33.jpg" />
 				<h3>ART</h3>
 				<p>The faculty comprises of Music & Dance and Visual Arts.  Each of these departments offers Bachelor's and Master's programme.</p>
 			 </div>
</div>
</section>

<div className="cta">
	<h4>Enroll from various online courses <br /> Anywhere from here</h4>
	
</div>
  </>
    
  );
}

export default Cards