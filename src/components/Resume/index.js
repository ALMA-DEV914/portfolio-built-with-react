import React from "react";

function Resume() {
  return (
    <main>
    <section>
      <h1>My Resume</h1>
      <a href={require("../../assets/Resume.pdf")} download>
        Download my resume
      </a>
      <div>
          <h2>Front End Proficiences</h2>
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JAVASCRIPT</li>
              <li>JQUERY</li>
              <li>Responsive Design</li>
              <li>REACT</li>
          </ul>
      </div>
      <div>
          <h2> Back End Proficiences</h2>
          <ul>
              <li>API's</li>
              <li>NODE.JS</li>
              <li>MySQL/NoSQL Sequelize</li>
              <li>MONGODB database</li>
              <li></li>
          </ul>
      </div>
    </section>
    </main>
  );
}

export default Resume;