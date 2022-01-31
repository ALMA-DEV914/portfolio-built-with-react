import React from "react";
import ProjectList from "../ProjectList";

function Portfolio() {
  const projects = [
    {
      title: "Budget tracker",
      image: "Budget-Tracker-PWA.png",
      repository: "https://github.com/ALMA-DEV914/PWA-Budget-Tracker",
      deployment: "https://aqueous-cove-81545.herokuapp.com",
      description: "Built with HTML, CSS, JAVASCRIPT, MONGOOSE/MONGODB, EXPRESS.jS and NODE packages. This appliaction is a Progressive Web Application that is installable in mobile devices and can be used offline."
    },
    {
      title: "Menu Underground Hunt",
      image: "Menu-Hunt.png",
      repository: "https://github.com/ALMA-DEV914/Menu-Underground-Hunt",
      deployment: "https://still-lowlands-55484.herokuapp.com/",
      description: "Built with HTML, CSS, MongoDb/Mongoose and Javascript. This application used Bootstrap and Jquery. It will allow user to share recipe/menu of their best meal. So you can either grab a menu or share your recipe of choice through discussions.This app used MongoDB to store the data from clients/users"
    },
    {
      title: "Full-Stack Web Application",
      image: "Full-Stack.png",
      repository: "https://github.com/ALMA-DEV914/fixup-job-site-full-stack",
      deployment: "https://fixup-job.herokuapp.com/jobs",
      description: "Built with NODE.js packages like template engine Handlebars, Expess.js, MySQL, Sequelize ORM, MVC, BULMA/CSS frameworks, passport-jwt authentication. We collaborate in creating this site and turn into life with my team that are great in backend. This app will allow users to post jobs as employer or employee. Check the link above for more functionalities or features."
    },
    {
      title: "Weather Dashboard",
      image: "Weather-Dashboard.png",
      repository: "https://github.com/ALMA-DEV914/Weather-Dashboard",
      deployment: "https://alma-dev914.github.io/Weather-Dashboard/",
      description:"Built with Javascript, Html, CSS, MongoDB, PWA, Node packages and Bootstrap. This application will allow user to check the weather condition in a certain city or place. I used third party api to fetch the data information. This display the current forecast and the 5 days weather condition ahead."
    },
    {
      title: "Quiz Challenge",
      image: "Quiz-Challenge.png",
      repository: "https://github.com/ALMA-DEV914/Brainstorm-Challenge",
      deployment: "https://alma-dev914.github.io/Brainstorm-Challenge/",
      description: "This application used HTML, Javascript and Web API. This used a local storage to store and retrieved data. This challenge invites me to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I write.",
    },
    {
      title: "Interactive Front End",
      image: "Interactive-Front-End.png",
      repository: "https://github.com/ALMA-DEV914/Front-End-Interactive-User-Interface-",
      deployment: "https://alma-dev914.github.io/Front-End-Interactive-User-Interface-/",
      description: " Built with HTML, CSS, Javascript, Third party API, Bootstrap/Mediaqueries, Git/Github - We used this application to work together or collaborate in building this project. This application would allow user to search for a movie and could check the ratings as well as the plot of the story."
    },
    {
      title: "Create Sweat Moments",
      image: "Workout.png",
      repository: "https://github.com/ALMA-DEV914/Workout",
      deployment: "https://serene-escarpment-69823.herokuapp.com/",
      description: "Built with Javascript, Html,Bootstrap, MongoDB/Mongoose, Express.js, Node.js. This application will allow user to check the their workout history and achievements in a various types of exercises. This app will allow you to either continue your workout or create new starting point."
    },
    {
      title: "MVC Tech Blog",
      image:"MVC-Tech-Blog.png",
      repository:"https://github.com/ALMA-DEV914/MVC-TECH-BLOG",
      deployment: "https://mysterious-brook-54092.herokuapp.com/",
      description: "TOOLS and SOFTWARE are Node.js EXPRESS.js, express-session, connect-session-sequelize, express-handlebars ORM - Object Relational Mapping MVC - Model View Controller Bulma, CSS Javascript Heroku, JAWSMySQLDB"
    },
  
  ];
  return (
    
    <div>
      <ProjectList projects={projects} />
    </div>
  
  );
}

export default Portfolio;
