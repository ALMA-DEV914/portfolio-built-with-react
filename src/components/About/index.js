//import react
import React from 'react';
//import the cover image from the path directory
import coverImage from "../../assets/cover/myphoto.png";
import certificate from "../../assets/certificate.png";

//initiate the About section component
function About(){
    return(
        <main>
        <section className='flex-row'>
            <div className='myphoto'>
            <img src={coverImage} className="my-2" id='me' alt="me" style={{ width:"350px"}}/>
            <h1 id='about'>Hi! Alma here!</h1>
            <p>I am looking forward to speak with you.</p>
            
        </div>
       <div className='description'>
           <h1 className='desc' >FULL STACK WEB DEVELOPER</h1>
          <p>I'm higly motivated and creative with passion for great user experience. I have completed Full Stack Web Development from UC Berkeley Bootcamp.</p>
          <p>My mission is to ensure the best relationship with clients, both during and after their goals have been met.</p>
          <p>I consistently work on development process to provide an informative, user-friendly and effective strategy to provide companies with the message or goal they are hoping to accomplish. This development process is tailored to meet the needs of small, medium and large size businesses and enterprises.</p>
        </div>
        </section>
        <section className='flex-row'>
            <div className='edu-history'>
            <p>Have knowledge in HTML, CSS, JAVASCRIPT, Web Design, REACT, SQL, NoSQL, Express.js, REST API's, MongoDB, and NODE.
          Enjoys being challenged and engaged with projects that require
          to work outside her comfort zone and knowledge set, especially while collaborating with a team. She has a passion to be a part of growth in providing a good services and a great user experienced.</p>
        </div>
        <div className='education'>
            <img src={certificate} alt='certificate' className='certicate' />
            </div>
        </section>
        </main>
        
    );
}
//export the Aboit default
export default About;