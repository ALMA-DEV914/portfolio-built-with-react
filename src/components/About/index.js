import React from 'react';
import coverImage from "../../assets/cover/z1.jpg";
function About(){
    return(
        <main>
        <section className='flex-row'>
            <div className='myphoto'>
            <h1 id='about'>Hi! Alma here!</h1>
            <p>I am looking forward to speak with you.</p>
            <img src={coverImage} className="my-2" id='me' alt="me" style={{width: '250px'}} />
        </div>
       <div className='description'>
           <h1>FULL STACK WEB DEVELOPER</h1>
          <p>I'm higly motivated and creative with passion for great user experience. I have completed Full Stack Web Development from UC Berkeley Bootcamp.</p>
          <p>My mission is to ensure the best relationship with clients, both during and after their goals have been met.</p>
          <p>I consistently work on development process to provide an informative, user-friendly and effective strategy to provide companies with the message or goal they are hoping to accomplish. This development process is tailored to meet the needs of small, medium and large size businesses and enterprises.</p>
        </div>
        </section>
        </main>
    );
}
export default About;